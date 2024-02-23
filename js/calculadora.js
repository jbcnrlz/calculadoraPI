var previousNumber = 0;
var numeroDigitado = "";
var op = "";
var resultado=0;
$(".btnNumber").on("click",function(){
    numeroDigitado += $(this).attr("value");
    console.log(numeroDigitado);
    $("#numberResult").html(numeroDigitado);
});

$(".btnOp").on("click",function(){
    if ($(this).attr("value") == "="){
        switch(op){
            case '+':
                resultado = previousNumber + parseInt(numeroDigitado);
                break;
            case '-':
                resultado = previousNumber - parseInt(numeroDigitado);
                break;
            case '*':
                resultado = previousNumber * parseInt(numeroDigitado);
                break;
            case '/':
                resultado = previousNumber / parseInt(numeroDigitado);
                break;
        }
        $("#numberResult").html(resultado);
        $('.btn-danger').addClass('btn-warning');
        $('.btn-warning').removeClass('btn-danger');
    }else{
        op = $(this).attr("value");
        $(this).removeClass('btn-warning');
        $(this).addClass('btn-danger');
        previousNumber = parseInt(numeroDigitado);
        numeroDigitado = "";
        $("#numberResult").html("");
    }    
});