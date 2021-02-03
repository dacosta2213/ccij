// Copyright (c) 2019, Totall and contributors
// For license information, please see license.txt

// Client ID and API key from the Developer Console (rubenuzmancastro 17 de Julio)
var CLIENT_ID = '380746168163-cgt91c8pggd3oa1m6hkpii0vfqrbjipv.apps.googleusercontent.com'
var CLIENT_SECRET = 'ZvQXGkSJcB6JKsZNbGbqeLom'
var access_token = ''
var API_KEY = 'AIzaSyCiPgNUvcyS4p2i0raiN5ExBbyqK9KG8zM'
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
var SCOPES = "https://www.googleapis.com/auth/calendar.readonly"
var refresh_token = ''

frappe.ui.form.on('Representacion', {
	refresh: function(frm) {
		$('.btn[data-fieldname=sync_calendar]').addClass('btn-success');

	},
	validate: function(frm) {
		frm.set_value('mes_entrega', moment(cur_frm.doc.entrega).month() +1 )

	},
	onload: function(frm) {
		// $.getScript("https://apis.google.com/js/api.js")
	},
	sync_calendar: function(frm) {


		// frappe.db.get_value('GCalendar Config','GCalendar Config','access_token', (r) => {
		// 	 access_token = r.access_token
		// 	 gcal_insert(body_req,access_token)
		// })


		frappe.db.get_value('GCalendar Config','GCalendar Config','refresh_token', (r) => {
			 refresh_token = r.refresh_token
			 gcal_refresh(frm,refresh_token)
		})


		// setTimeout(function(){  console.log('at: ',access_token) }, 3000);
			// var makeQuerystring = params =>
			// 	  Object.keys(params)
			// 	    .map(key => {
			// 	      return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
			// 	    })
		  //   	.join("&");


	 }
});


var gcal_refresh = function(frm,refresh_token){

		var body_ref = {
			'client_id': CLIENT_ID,
			'client_secret': CLIENT_SECRET,
			'refresh_token': refresh_token,
			'grant_type': "refresh_token"
		}
		// console.log('bod: ',body_ref , 'ref:' ,refresh_token )
		fetch("https://www.googleapis.com/oauth2/v4/token", {
		  method: "post",
		  body: JSON.stringify(body_ref),
		  headers: {
		    "Content-Type": "application/json; charset=UTF-8"
		  }
		})
		.then( res => res.json() )
		// .then( json => console.log(json) )
		// .then(json => frappe.db.set_value('GCalendar Config','GCalendar Config','access_token', json.access_token) )
		.then(json => gcal_insert(frm, json.access_token) );
		// .then( alg => console.log(alg) )
}

var gcal_insert = function(frm,access_token){
	// console.log('bod: ',body_req , 'at:' ,access_token )
	var body_req = {
		'summary': frm.doc.nombre,
		'attendees': [ { 'email': frm.doc.usuario }  ],
		'start': {
			'dateTime': moment(frm.doc.inicio).format("YYYY-MM-DDTHH:mm:ss.SSS[-06:00]")
		},
		'end': {
			'dateTime': moment(frm.doc.final).format("YYYY-MM-DDTHH:mm:ss.SSS[-06:00]")
		},
	}
	fetch(
		"https://www.googleapis.com/calendar/v3/calendars/primary/events",
				{
					method: "post",
					body: JSON.stringify(body_req),
					headers: {
						'Content-Type': "application/json; charset=UTF-8",
						Authorization: "Bearer " + access_token
					}
				}
			)
	.then(res => res.json())
	// .then(json => console.log(json.error.message));
	.then(json => { if (json.error) {
							frappe.msgprint(json.error.message,'Error al crear Evento')
							console.log(json.error.message)
						} else {
							frappe.msgprint('Respuesta del Servidor: ' + json.status,'Evento Creado')
						}
				});
}


// RG- De aqui para abajo, todo es innecesario

var authorizeButton = $('.btn[data-fieldname=sync_calendar]')
var signoutButton = document.getElementById('signout_button');

/**
*  On load, called to load the auth2 library and API client library.
*/
function handleClientLoad() {
gapi.load('client:auth2', initClient);
}

/**
*  Initializes the API client library and sets up sign-in state
*  listeners.
*/
function initClient() {
gapi.client.init({
	apiKey: API_KEY,
	clientId: CLIENT_ID,
	discoveryDocs: DISCOVERY_DOCS,
	scope: SCOPES
}).then(function () {
	// Listen for sign-in state changes.
	gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

	// Handle the initial sign-in state.
	updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
	authorizeButton.onclick = handleAuthClick;
	signoutButton.onclick = handleSignoutClick;
}, function(error) {
	appendPre(JSON.stringify(error, null, 2));
});
}

/**
*  Called when the signed in status changes, to update the UI
*  appropriately. After a sign-in, the API is called.
*/
function updateSigninStatus(isSignedIn) {
if (isSignedIn) {
	authorizeButton.style.display = 'none';
	signoutButton.style.display = 'block';
	listUpcomingEvents();
} else {
	authorizeButton.style.display = 'block';
	signoutButton.style.display = 'none';
}
}

/**
*  Sign in the user upon button click.
*/
function handleAuthClick(event) {
gapi.auth2.getAuthInstance().signIn();
}

/**
*  Sign out the user upon button click.
*/
function handleSignoutClick(event) {
gapi.auth2.getAuthInstance().signOut();
}

/**
* Append a pre element to the body containing the given message
* as its text node. Used to display the results of the API call.
*
* @param {string} message Text to be placed in pre element.
*/
function appendPre(message) {
var pre = document.getElementById('page-Form/Representacion');
var textContent = document.createTextNode(message + '\n');
pre.appendChild(textContent);
}

/**
* Print the summary and start datetime/date of the next ten events in
* the authorized user's calendar. If no events are found an
* appropriate message is printed.
*/
function listUpcomingEvents() {
gapi.client.calendar.events.list({
	'calendarId': 'primary',
	'timeMin': (new Date()).toISOString(),
	'showDeleted': false,
	'singleEvents': true,
	'maxResults': 10,
	'orderBy': 'startTime'
}).then(function(response) {
	var events = response.result.items;
	appendPre('Upcoming events:');

	if (events.length > 0) {
		for (i = 0; i < events.length; i++) {
			var event = events[i];
			var when = event.start.dateTime;
			if (!when) {
				when = event.start.date;
			}
			appendPre(event.summary + ' (' + when + ')')
		}
	} else {
		appendPre('No upcoming events found.');
	}
});
}
//
// async defer src="https://apis.google.com/js/api.js"
//       onload="this.onload=function(){};handleClientLoad()"
//       onreadystatechange="if (this.readyState === 'complete') this.onload()"


//
// var fetch =
// fetch("https://www.googleapis.com/calendar/v3/users/me/settings", {
//   method: "get",
//   headers: {
//     Authorization: "Bearer ACCESS_TOKEN"
//   }
// })
//   .then(res => res.json())
//   .then(json => console.log(json));
//
//
// var fetchs =
//
// 	var makeQuerystring = params =>
// 	  Object.keys(params)
// 	    .map(key => {
// 	      return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
// 	    })
// 	    .join("&");
//
// 	fetch("https://www.googleapis.com/oauth2/v4/token", {
// 	  method: "post",
// 	  body: makeQuerystring({
// 	    client_id: "967030240566-66bg98l2ink6hc2ntjcsulap8se6k73i.apps.googleusercontent.com",
// 	    client_secret: "1pi6m4Lwuj6NKLAxJfYv7EyZ",
// 	    // refresh_token: "REFRESH_TOKEN",
// 	    grant_type: "refresh_token"
// 	  }),
// 	  headers: {
// 	    "Content-Type": "application/x-www-form-urlencoded"
// 	  }
// 	})
// 	  .then(res => res.json())
