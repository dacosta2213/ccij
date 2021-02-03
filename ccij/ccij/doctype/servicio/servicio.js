// Copyright (c) 2019, Totall and contributors
// For license information, please see license.txt
frappe.ui.form.on("Concepto Servicio", "item_code", function(frm, cdt, cdn) {
	let row = locals[cdt][cdn];
	frappe.model.set_value(cdt, cdn, "amount", row.qty * row.rate);
});

frappe.ui.form.on('Servicio', {
	refresh: function(frm) {
		var itotal = 0;
		var htotal = 0;

		$(cur_frm.doc.items).each(function(index){
			renglon = cur_frm.fields_dict.items.grid.grid_rows[index].doc;
			console.log(renglon)
			let amount = renglon.qty * renglon.rate
			renglon.amount = amount
			itotal += parseFloat(amount);
			htotal += parseFloat(renglon.qty);
		});
		cur_frm.set_value("total", itotal);
		cur_frm.set_value("total_horas", htotal);

	},
	validate: function(frm) {
		var itotal = 0;
		var htotal = 0;

		$(cur_frm.doc.items).each(function(index){
			renglon = cur_frm.fields_dict.items.grid.grid_rows[index].doc;
			console.log(renglon)
			let amount = renglon.qty * renglon.rate
			renglon.amount = amount
			itotal += parseFloat(amount);
			htotal += parseFloat(renglon.qty);
		});
		cur_frm.set_value("total", itotal);
		cur_frm.set_value("total_horas", htotal);

	}

});
