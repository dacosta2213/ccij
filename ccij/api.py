# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import frappe
import json
from frappe import _
import frappe.utils
import frappe.async
import frappe.sessions
import frappe.utils.file_manager
from frappe.utils.file_manager import save_url
import frappe.desk.form.run_method
from frappe.utils.response import build_response
import datetime
from datetime import date,datetime,timedelta
import requests
import pytz
import shutil
import os
import sys

@frappe.whitelist(allow_guest=True)
# Para validar usuario
def validar_user(username,clave):
    valido = frappe.db.sql("select first_name from `tabUser` where name=%s AND clave=%s", (username,clave), as_dict=1)
    if valido:
        return(valido)
    else:
        return('No encontrado')

@frappe.whitelist(allow_guest=True)
# Para insertar la foto en el documento como attachment
def foto(name,image):
    fecha_actual = datetime.now().isoformat()[0:19]
    dest ='/home/frappe/frappe-bench/sites/ccij.totall.mx/public/files/' + fecha_actual
    jpg = open( dest + ".jpg", "w+")
    jpg.write(image.decode('base64'))
    jpg.close()
    save_url( "/files/" + fecha_actual +  ".jpg" , fecha_actual + ".jpg" , "Representacion" , name , "Home/Attachments" , 0)
    return('Imagen/archivo exitosamente guardado.')

@frappe.whitelist(allow_guest=True)
# Pa traerse las representaciones de un usuario particular
def reps(usuario):
    valido = frappe.db.sql("select name,nombre,enviado_por,documento,usuario,entrega,full_name,direccion,lat,lng from `tabRepresentacion` where usuario=%s", (usuario), as_dict=1)
    if valido:
        return(valido)
    else:
        return('No encontrado')


@frappe.whitelist(allow_guest=True)
# Pa filtrar el llamado a la DB
def filtrar(usuario,search):
    valido = frappe.db.sql("select name,nombre,enviado_por,documento,usuario,entrega,full_name,direccion,lat,lng from `tabRepresentacion` where usuario=%s AND nombre like %s", (usuario, ('%%%s%%' % search)), as_dict=1)
    if valido:
        return(valido)
    else:
        return('No encontrado')

@frappe.whitelist(allow_guest=True)
# Muestra todas las representaciones que tienen votacion. Les quite la direccion para que no muestre el mapa.
def todas(search):
    mes = datetime.now().month
    valido = frappe.db.sql("select name,nombre,enviado_por,documento,usuario,entrega,full_name,lat,lng,mes_entrega from `tabRepresentacion` where enviado_por IS NOT NULL  AND nombre like %s AND mes_entrega = %s",  ('%%%s%%' % search, mes), as_dict=1)
    if valido:
        return(valido)
    else:
        return('No encontrado')

@frappe.whitelist(allow_guest=True)
# detalle de la votacion
def votacion(name):
    valido = frappe.db.sql("select name,nombre,enviado_por,voto_a_favor, abstencion, comentario_voto, comentario_abs from `tabRepresentacion` where name = %s",  (name), as_dict=1)
    if valido:
        return(valido)
    else:
        return('No encontrado')

@frappe.whitelist(allow_guest=True)
def updateVoto(voto_a_favor, comentario_voto,abstencion,comentario_abs, enviado_por, name):
    """Actualizar informacion de votos desde el app de ionic"""
    frappe.db.sql("""UPDATE `tabRepresentacion` SET voto_a_favor=%s, comentario_voto=%s, abstencion=%s,comentario_abs=%s, enviado_por=%s WHERE name=%s""", ( voto_a_favor, comentario_voto,abstencion,comentario_abs,enviado_por, name) )
    frappe.db.commit()
    return "Voto Enviado Exitosamente"

@frappe.whitelist(allow_guest=True)
# Pa todas las comisiones
def comisiones():
    valido = frappe.db.sql("select name,icono,liga from `tabComision`",  as_dict=1)
    if valido:
        return(valido)
    else:
        return('No encontrado')
