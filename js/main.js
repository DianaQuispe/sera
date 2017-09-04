$(document).ready(function() {
});
    function Persona(nombre,apellido,dnis,casilla) {
    this.nombre = [];
    this.apellido= [];
    this.dnis=  [];
    this.casilla= [];
};
var persona;
var nombre = [];
var apellido =  [];
var dnis = [];
var escogidos =  [];
var nomVal = $('#nombreValue').val();
var appVal = $('#apellidoValue').val();
var dniVal = $('#DNIvalue').val();
$('#botonValor').click(function() {

    $('td').click(function(){

        persona.nombre.push($('#nombreValue').val());
        Persona.apellido.push($('#apellidoValue').val());
        Persona.dnis.push($('#DNIvalue').val());
        $(this).addClass('color');
        escogidos.push($(this).text());

    })
})

