const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')


$(".enviar").on("click", function() {
    alert("Estas seguro de enviar el correo!!");
})
$(".cambiar").click(function() {
    $(".parrafo").addClass("nuevo");
});
$("p, h3, h4").hover(function() {
    $(this).css("color", "blue");
}, function() {
    $(this).css("color", "black");
});
$(".card").click(function() {
    $(this).toggle();
});
$("h5").dblclick(function() {
    $(this).css("color", "red");
});