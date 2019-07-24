# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import frappe
import json
from frappe import _
import frappe.utils
import frappe.async
import frappe.sessions
import frappe.utils.file_manager
import frappe.desk.form.run_method
from frappe.utils.response import build_response
import datetime
from datetime import date,datetime,timedelta
import requests
import pytz

@frappe.whitelist(allow_guest=True)
# Para validar usuario
def validar_user(username,clave):
    valido = frappe.db.sql("select first_name from `tabUser` where name=%s AND clave=%s", (username,clave), as_dict=1)
    if valido:
        return(valido)
    else:
        return('No encontrado')

@frappe.whitelist(allow_guest=True)
# Pa traerse las representaciones de un usuario particular
def reps(usuario):
    valido = frappe.db.sql("select name,documento,usuario,entrega,full_name,direccion,lat,lng from `tabRepresentacion` where usuario=%s", (usuario), as_dict=1)
    if valido:
        return(valido)
    else:
        return('No encontrado')

# RG - Faltan:
# TODAS las representaciones donde hubo una votación - debe de llevar a google drive
# Post request para registrar el voto

@frappe.whitelist(allow_guest=True)
# Pa filtrar el llamado a la DB
def filtrar(search):
    valido = frappe.db.sql("select name,documento,usuario,entrega,full_name,direccion,lat,lng from `tabRepresentacion` where nombre like %s", ('%%%s%%' % search), as_dict=1)
    if valido:
        return(valido)
    else:
        return('No encontrado')

@frappe.whitelist(allow_guest=True)
# Pa todas las comisiones
def comisiones():
    valido = frappe.db.sql("select name,icono,liga from `tabComision`",  as_dict=1)
    if valido:
        return(valido)
    else:
        return('No encontrado')
