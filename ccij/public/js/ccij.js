$(document).ready(function() {
  console.log('ccij')
	$('.main-section').append(frappe.render_template("ccij"));
});

// frappe.ui.form.on('Sales Invoice', {
//   onload: function(frm) {
//     frappe.call({
//         method: "frappe.client.get",
//         args: {
//           doctype: "Configuracion CFDI",
//           filters: {
//           "name": frm.doc.perfil
//           }
//         },
//         callback: function (data) {
//           if (frm.doc.__unsaved)  {
//             let v = data.message;
//             // console.log(v);
//             cur_frm.set_value("regimen_fiscal", v.regimen_fiscal);
//             cur_frm.set_value("forma_de_pago", v.forma_de_pago);
//             cur_frm.set_value("tipo_de_comprobante", v.tipo_de_comprobante);
//             cur_frm.set_value("metodo_pago", v.metodo_pago);
//             cur_frm.set_value("lugar_expedicion", v.lugar_expedicion);
//             cur_frm.set_value("zona_horaria", v.zona_horaria);
//             cur_frm.set_value("uso_cfdi", v.uso_cfdi);
//             cur_frm.set_value("no_certificado", v.no_certificado);
//             cur_frm.set_value("nombre_emisor", v.nombre_emisor);
//             cur_frm.set_value("rfc_emisor", v.rfc_emisor);
//             cur_frm.set_value("url_timbrado", v.url_timbrado);
//             cur_frm.set_value("folder", v.folder);
//             cur_frm.set_value("user_id", v.user_id);
//             cur_frm.set_value("user_password", v.user_password);
//             cur_frm.set_value("url", v.url);
//             cur_frm.set_value("token", v.token);
//             cur_frm.set_value("version", v.version);
//             cur_frm.set_value("incluye_impuesto", v.incluye_impuesto);
//             cur_frm.set_value("pac", v.pac);
//           }
//         }
//     })
//   },
// })
frappe.templates["ccij"] = '<aside class="main-sidebar">'
 +'	<section class="sidebar">'
 +'      <ul class="sidebar-menu">'
 +'        <li class="header">MENU CAMARAS</li>'
 +'        <li><a href="#dashboard-totall"><i class="fas fa-home"></i></a></li>'



 +'        <li class="treeview">'
 +'          <a href="#">'
 +'            <i class="fas fa-chart-bar"></i>'
 +'            <span>CAMARAS</span>'
 +'            <span class="pull-right-container">'
 +'              <i class="fa fa-angle-left pull-right"></i>'
 +'            </span>'
 +'          </a>'
 +'          <ul class="treeview-menu">'
 +'            <li><a href="#List/Representacion"><i class="fa fa-calendar"></i>  Representaciones</a></li>'
 +'            <li><a href="#List/Project/List"><i class="fas fa-briefcase"></i>  Proyecto</a></li>'
 +'            <li><a href="#List/Metas"><i class="fas fa-flag"></i>  Metas</a></li>'
 +'            <li><a href="#List/Linea Accion"><i class="fas fa-chart-bar"></i>  Lineas de Accion</a></li>'
 +'            <li><a href="#List/Comision/Image"><i class="fas fa-flag"></i>  Comisiones</a></li>'
 +'            <li><a href="#List/Servicio"><i class="far fa-money-bill-alt"></i>  Servicios</a></li>'
 +'            <li><a href="#List/Item/item_group=Servicios"><i class="fa fa-list-ol"></i> Lista de Servicios</a></li>'
 +'            <li><a href="#List/Customer/List?customer_group=Gubernamental"><i class="octicon octicon-organization"></i>  Organismos</a></li>'
 +'            <li><a href="#List/User/List?tipo=Representante""><i class="octicon octicon-person"></i>  Representantes</a></li>'
 +'            <li><a href="#List/GCalendar Config"><i class="fa fa-calendar"></i>  GCalendar Config.</a></li>'
 +'          </ul>'
 +'        </li>'



 +'        <li class="treeview">'
 +'          <a href="#">'
 +'            <i class="fas fa-bolt"></i>'
 +'            <span>CFDI</span>'
 +'            <span class="pull-right-container">'
 +'              <i class="fa fa-angle-left pull-right"></i>'
 +'            </span>'
 +'          </a>'
 +'          <ul class="treeview-menu">'
 +'            <li><a href="#List/Sales%20Invoice/List"><i class="far fa-money-bill-alt"></i>   Facturas</a></li>'
 +'            <li><a href="#List/CFDI%20Nota%20de%20Credito/List"><i class="far fa-money-bill-alt"></i>   Nota de credito</a></li>'
 +'            <li><a href="#List/CFDI/List"><i class="far fa-money-bill-alt"></i>   Global</a></li>'
 +'            <li><a href="#List/Payment%20Entry/List"><i class="far fa-money-bill-alt"></i>   Pagos</a></li>'
 +'            <li><a href="#List/CFDI Clave Producto/List"><i class="octicon octicon-plus"></i> Clave Producto</a></li>'
 +'            <li><a href="#List/CFDI Clave Unidad/List"><i class="fas fa-plus-circle"></i>  Clave Unidad</a></li>'
 +'            <li><a href="#Form/Configuracion CFDI/Cliente"><i class="fa fa-cog"></i>  Configurar</a></li>'
 +'          </ul>'
 +'        </li>'

 +'        <li class="treeview">'
 +'          <a href="#">'
 +'            <i class="fas fa-user-tie"></i>'
 +'            <span>CATALOGOS</span>'
 +'            <span class="pull-right-container">'
 +'              <i class="fa fa-angle-left pull-right"></i>'
 +'            </span>'
 +'          </a>'
 +'          <ul class="treeview-menu">'
 +'            <li><a href="#List/Item/List"><i class="octicon octicon-package"></i>  Productos</a></li>'
 +'            <li><a href="#List/Supplier/List"><i class="octicon octicon-package"></i>  Proveedores</a></li>'
 +'            <li><a href="#List/Customer/List"><i class="far fa-address-card"></i>  Clientes</a></li>'
 +'            <li><a href="#List/User/List"><i class="octicon octicon-person"></i>  Usuarios</a></li>'
 +'          </ul>'
 +'        </li>'


 +'        <li class="treeview">'
 +'          <a href="#">'
 +'            <i class="fas fa-cubes"></i>'
 +'            <span>INVENTARIO</span>'
 +'            <span class="pull-right-container">'
 +'              <i class="fa fa-angle-left pull-right"></i>'
 +'            </span>'
 +'          </a>'
 +'          <ul class="treeview-menu">'
 +'            <li><a href="#Tree/Warehouse"><i class="octicon octicon-package"></i>  Almacenes</a></li>'
 +'            <li><a href="#List/Stock Reconciliation/List"><i class="fas fa-tools"></i>  Ajustes</a></li>'
 +'            <li><a href="#List/Stock Entry/List"><i class="octicon octicon-plus"></i>  Movimientos</a></li>'
 +'            <li><a href="#stock-balance"><i class="octicon octicon-screen-full"></i>  Estatus/Producto</a></li>'
 // +'            <li><a href="#List/Captura Inventario/List"><i class="octicon octicon-screen-normal"></i> Captura Lector</a></li>'
 +'          </ul>'
 +'        </li>'


  +'        <li class="treeview">'
  +'          <a href="#">'
  +'            <i class="fas fa-female"></i>'
  +'            <span>VENTAS</span>'
  +'            <span class="pull-right-container">'
  +'              <i class="fa fa-angle-left pull-right"></i>'
  +'            </span>'
  +'          </a>'
  +'          <ul class="treeview-menu">'
  +'            <li><a href="#List/Delivery%20Note/List"><i class="far fa-envelope"></i>  Entrega de Material</a></li>'
  // +'            <li><a href="#en-construccion"><i class="fas fa-birthday-cake"></i>  Boletines</a></li>'
  +'            <li><a href="#List/Installation Note/List"><i class="fas fa-briefcase"></i>  Nota de Instalacion</a></li>'
  +'            <li><a href="#List/SMS%20Envio/List"><i class="fas fa-bullhorn"></i>  SMS Envio</a></li>'
  +'          </ul>'
  +'        </li>'


  +'        <li class="treeview">'
  +'          <a href="#">'
  +'            <i class="far fa-address-card"></i>'
  +'            <span>CRM</span>'
  +'            <span class="pull-right-container">'
  +'              <i class="fa fa-angle-left pull-right"></i>'
  +'            </span>'
  +'          </a>'
  +'          <ul class="treeview-menu">'
  +'            <li><a href="#List/Lead/Kanban/Prospecto"><i class="fas fa-female"></i>  Prospecto</a></li>'
  +'            <li><a href="#List/Opportunity/List"><i class="far fa-envelope"></i>  Oportunidad</a></li>'
  +'            <li><a href="#List/Quotation/List"><i class="fa fa-table"></i>  Cotizaciones</a></li>'
  +'            <li><a href="#List/Ruta/List"><i class="octicon octicon-location"></i>  Rutas</a></li>'
  +'          </ul>'
  +'        </li>'

	 +'        <li class="treeview">'
		+'          <a href="#">'
		+'            <i class="fas fa-briefcase"></i>'
		+'            <span>PROYECTOS</span>'
		+'            <span class="pull-right-container">'
		+'              <i class="fa fa-angle-left pull-right"></i>'
		+'            </span>'
		+'          </a>'
		+'          <ul class="treeview-menu">'
		+'            <li><a href="#List/Project/List"><i class="fas fa-briefcase"></i>  Proyecto</a></li>'
		+'            <li><a href="#List/Task/Gantt"><i class="fas fa-bell"></i>  Tarea</a></li>'
		+'            <li><a href="#List/Project%20Type/List"><i class="octicon octicon-plus"></i>  Tipo de Proyecto</a></li>'
		+'            <li><a href="#List/Activity%20Type/List"><i class="fa fa-cog"></i>  Tipo de Actividad</a></li>'
		+'          </ul>'
		+'        </li>'


 +'        <li class="treeview">'
 +'          <a href="#">'
 +'            <i class="fas fa-inbox"></i>'
 +'            <span>COMPRAS</span>'
 +'            <span class="pull-right-container">'
 +'              <i class="fa fa-angle-left pull-right"></i>'
 +'            </span>'
 +'          </a>'
 +'          <ul class="treeview-menu">'
 +'            <li><a href="#List/Purchase%20Order/List"><i class="octicon octicon-package"></i>  Orden de Compra</a></li>'
 +'            <li><a href="#List/Request%20for%20Quotation/List"><i class="fas fa-bell"></i>  RFQ</a></li>'
 +'            <li><a href="#List/Supplier%20Quotation/List"><i class="fas fa-briefcase"></i>  Cotizacion Proveedor</a></li>'
 +'            <li><a href="#Form/Buying%20Settings"><i class="fa fa-cog"></i>  Config. Compras</a></li>'
 +'          </ul>'
 +'        </li>'


 +'        <li class="treeview">'
 +'          <a href="#">'
 +'            <i class="fas fa-chart-line"></i>'
 +'            <span>Reportes</span>'
 +'            <span class="pull-right-container">'
 +'              <i class="fa fa-angle-left pull-right"></i>'
 +'            </span>'
 +'          </a>'
 +'          <ul class="treeview-menu">'
 +'            <li><a href="#query-report/LISTA FACTURACION"> <i class="far fa-money-bill-alt"></i> Facturacion</a></li>'
  +'            <li><a href="#query-report/Ventas del Dia"> <i class="far fa-money-bill-alt"></i> Ventas x Fecha</a></li>'
 +'            <li><a href="#query-report/Gross Profit"><i class="far fa-money-bill-alt"></i> Margenes x Producto</a></li>'
 +'            <li><a href="#query-report/Sales Invoice Trends"><i class="far fa-money-bill-alt"></i> Comportamiento Ventas</a></li>'
 +'            <li><a href="#query-report/Accounts%20Payable"><i class="far fa-money-bill-alt"></i> Cuentas por Pagar</a></li>'
 +'            <li><a href="#query-report/Accounts%20Receivable"><i class="far fa-money-bill-alt"></i> Cuentas por Cobrar</a></li>'
 +'            <li><a href="#stock-balance"><i class="fa fa-table"></i>  Niveles de Inventario</a></li>'
 +'            <li><a href="#query-report/Stock Balance"><i class="fa fa-table"></i>  Balance Inventario</a></li>'
 +'          </ul>'
 +'        </li>'


 	// +'        <li class="treeview">'
 	// +'          <a href="#">'
 	// +'            <i class="fas fa-barcode"></i>'
 	// +'            <span>MANUFACTURA</span>'
 	// +'            <span class="pull-right-container">'
 	// +'              <i class="fa fa-angle-left pull-right"></i>'
 	// +'            </span>'
 	// +'          </a>'
 	// +'          <ul class="treeview-menu">'
	//
 	//  +'            <li><a href="#List/Production%20Order/List"><i class="octicon octicon-screen-full"></i> Orden Produccion</a></li>'
 	//  +'            <li><a href="#List/BOM/List"><i class="fas fa-barcode"></i> Bill de Materiales</a></li>'
 	//  +'            <li><a href="#Form/BOM%20Update%20Tool"> <i class="octicon octicon-screen-normal"></i>Actualizar BOM</a></li>'
  // +'            <li><a href="#List/Manufacturer/List"><i class="fas fa-briefcase"></i>  Manufacturadores</a></li>'
 	// +'          </ul>'
 	// +'        </li>'



 +'        <li class="treeview">'
 +'          <a href="#">'
 +'            <i class="fa fa-cog"></i>'
 +'            <span>Configuracion</span>'
 +'            <span class="pull-right-container">'
 +'              <i class="fa fa-angle-left pull-right"></i>'
 +'            </span>'
 +'          </a>'
 +'          <ul class="treeview-menu">'
 +'            <li><a href="#List/User/List"><i class="octicon octicon-person"></i>  Usuarios</a></li>'
 +'            <li><a href="#permission-manager"><i class="octicon octicon-organization"></i>  Privilegios</a></li>'
 +'            <li><a href="#List/Currency%20Exchange/List"><i class="fas fa-flag"></i>  Tipo de Cambio</a></li>'
 +'            <li><a href="#List/Mode of Payment/List"><i class="far fa-money-bill"></i>  Metodo de Pago</a></li>'
 +'            <li><a href="#List/POS Profile/List"><i class="octicon octicon-person"></i>  Perfil de Venta</a></li>'
 +'            <li><a href="#Tree/Warehouse"><i class="octicon octicon-package"></i>  Almacenes</a></li>'
 // +'            <li><a href="#Form/Item Attribute/Talla"><i class="octicon octicon-tasklist"></i>  Tallas</a></li>'
 // +'            <li><a href="#List/Caja/List"><i class="far fa-money-bill-alt"></i>  Caja</a></li>'
 +'            <li><a href="#List/Poliza%20Contpaq/List"><i class="octicon octicon-diff"></i>  Poliza Contpaq</a></li>'
 +'            <li><a href="#List/Letter Head/List"><i class="octicon octicon-diff"></i>  Membrete</a></li>'
 +'            <li><a href="#List/Print Heading/List"><i class="octicon octicon-eye"></i>  Encabezado Ticket</a></li>'
 +'            <li><a href="#List/Terms and Conditions/List"><i class="octicon octicon-eye"></i>  Pol. Devoluciones</a></li>'
 +'            <li><a href="#List/Company/List"><i class="octicon octicon-eye"></i>  Compañia</a></li>'
 +'            <li><a href="#List/Email%20Account/List"><i class="octicon octicon-eye"></i>  Email</a></li>'
 +'            <li><a href="#Form/Customize%20Form/Customize%20Form"><i class="octicon octicon-eye"></i>  Personalizar Form.</a></li>'
 +'            <li><a href="#List/Actualizar%20Precio/List"><i class="far fa-money-bill"></i>  Actualizar Precios</a></li>'
 +'          </ul>'
 +'        </li>'


 +'        <li class="treeview">'
 +'          <a href="http://totall.mx">'
 +'            <i class="far fa-question-circle" style="color:Tomato"></i>'
 +'            <span>Ayuda</span>'
 +'            <span class="pull-right-container">'
 +'              <i class="fa fa-angle-left pull-right"></i>'
 +'            </span>'
 +'          </a>'
 +'        </li>'
 +'    </ul>'
 +'    </section>'
 +'  </aside>'
 +'<div class="overlay"><div>' ;

 // }
