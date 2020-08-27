$(document).on('ready', funcMain);


function funcMain()
{
	$("#add_row").on('click',newRowTable);

	$("loans_table").on('click','.fa-eraser',deleteProduct);
	$("loans_table").on('click','.fa-edit',editProduct);

	$("body").on('click',".fa-eraser",deleteProduct);
	$("body").on('click',".fa-edit",editProduct);
}


function funcEliminarProductosso(){
	//Obteniendo la fila que se esta eliminando
	var a=this.parentNode.parentNode;
	//Obteniendo el array de todos loe elementos columna en esa fila
	//var b=a.getElementsByTagName("td");
	var edad=a.getElementsByTagName("td")
	console.log(a);

	$(this).parent().parent().fadeOut("slow",function(){$(this).remove();});
}


function deleteProduct(){
	//Guardando la referencia del objeto presionado
	var _this = this;
	//Obtener las filas los datos de la fila que se va a elimnar
	var array_fila=getRowSelected(_this);

	//Restar esos datos a los totales mostrados al finales
	//calculateTotals(edadd, sexo, subtotal, impuesto, totalneto, accioneliminar)
	calculateTotals(array_fila[3],array_fila[4],array_fila[5],array_fila[6],array_fila[7],2)

	$(this).parent().parent().fadeOut("slow",function(){$(this).remove();});
}


function editProduct(){
	var _this = this;;
	var array_fila=getRowSelected(_this);
	console.log(array_fila[0]+" - "+array_fila[1]+" - "+array_fila[2]+" - "+array_fila[3]+" - "+array_fila[4]+" - "+array_fila[5]+" - "+array_fila[6]+" - "+array_fila[7]);
	//Codigo de editar una fila lo pueden agregar aqui
}



function getRowSelected(objectPressed){
	//Obteniendo la linea que se esta eliminando
	var a=objectPressed.parentNode.parentNode;
	//b=(fila).(obtener elementos de clase columna y traer la posicion 0).(obtener los elementos de tipo parrafo y traer la posicion0).(contenido en el nodo)
	var nombre=a.getElementsByTagName("td")[0].getElementsByTagName("p")[0].innerHTML;
	var apellido=a.getElementsByTagName("td")[1].getElementsByTagName("p")[0].innerHTML;
	var email=a.getElementsByTagName("td")[2].getElementsByTagName("p")[0].innerHTML;
	var edad=a.getElementsByTagName("td")[3].getElementsByTagName("p")[0].innerHTML;
	var sexo=a.getElementsByTagName("td")[4].getElementsByTagName("p")[0].innerHTML;


	var array_fila = [nombre, apellido, email, edad, sexo];

	return array_fila;
	//console.log(numero+' '+codigo+' '+descripcion);
}



function newRowTable()
{
	var nombre=document.getElementById("nombre").value;
	var apellido=document.getElementById("apellido").value;
	var email=document.getElementById("email").value;
	var edad=document.getElementById("edad").value;
	var sexo=document.getElementById("sexo").value;

	var name_table=document.getElementById("tabla_factura");

    var row = name_table.insertRow(0+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);


    cell1.innerHTML = '<p name="nombre_f[]" class="non-margin">'+nombre+'</p>';
    cell2.innerHTML = '<p name="apellido_p[]" class="non-margin">'+apellido+'</p>';
    cell3.innerHTML = '<p name="email_p[]" class="non-margin">'+email+'</p>';
    cell4.innerHTML = '<p name="edad_p[]" class="non-margin">'+edad+'</p>';
    cell5.innerHTML = '<p name="sexop[]" class="non-margin">'+sexo+'</p>';

    //Para calcular los totales enviando los parametros
    calculateTotals(edad, sexo, subtotal, impuesto, total_n, 1);
    //Para calcular los totales sin enviar los parametros, solo adquiriendo los datos de la columna con mismo tipo de datos
    //calculateTotalsBySumColumn()
}



function calculateTotalsBySumColumn(){
	var total_edad=0;
	var array_cantidades=document.getElementsByName("edad_p[]");
	for (var i=0; i<array_cantidades.length; i++) {
		total_edad+=parseFloat(array_cantidades[i].innerHTML);
	}
	document.getElementById("total_catidad").innerHTML=total_edad;


	var total_precios=0;
	var array_precios=document.getElementsByName("sexo_p[]");
	for (var i=0; i<array_precios.length; i++) {
		total_precios+=parseFloat(array_precios[i].innerHTML);
	}
	document.getElementById("total_precio").innerHTML=total_precios;


}



function calculateTotals(edad, sexo, subtotal, impuesto, totaln, accion){
	//funcTotalsConParametro(cantidad, sexo,subtotal,impuesto,total_n);
	var t_cantidad=parseFloat(document.getElementById("total_catidad").innerHTML);
	var t_precio=parseFloat(document.getElementById("total_precio").innerHTML);

	//accion=1		Sumarle al los totales
	//accion=2		Restarle al los totales
	if (accion==1) {
		document.getElementById("total_catidad").innerHTML=parseFloat(t_cantidad)+parseFloat(cantidad);
		document.getElementById("total_precio").innerHTML=parseFloat(t_precio)+parseFloat(precio);
	
	}else if(accion==2){
		document.getElementById("total_catidad").innerHTML=parseFloat(t_cantidad)-parseFloat(cantidad);
		document.getElementById("total_precio").innerHTML=parseFloat(t_precio)-parseFloat(precio);
	
		alert('Accion Invalida');
	}
}



function format(input)
{
	var num = input.value.replace(/\,/g,'');
	if(!isNaN(num)){
		input.value = num;
	}
	else{ alert('Solo se permiten numeros');
		input.value = input.value.replace(/[^\d\.]*/g,'');
	}
}