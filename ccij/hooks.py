# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version

app_name = "ccij"
app_title = "Ccij"
app_publisher = "Totall"
app_description = "Frappe App para CCIJ"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "soporte@totall.mx"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/ccij/css/ccij.css"
app_include_js = "/assets/ccij/js/ccij.js"

# include js, css files in header of web template
# web_include_css = "/assets/ccij/css/ccij.css"
# web_include_js = "/assets/ccij/js/ccij.js"

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "ccij.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "ccij.install.before_install"
# after_install = "ccij.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "ccij.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"ccij.tasks.all"
# 	],
# 	"daily": [
# 		"ccij.tasks.daily"
# 	],
# 	"hourly": [
# 		"ccij.tasks.hourly"
# 	],
# 	"weekly": [
# 		"ccij.tasks.weekly"
# 	]
# 	"monthly": [
# 		"ccij.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "ccij.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "ccij.event.get_events"
# }
