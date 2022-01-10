document.addEventListener("keydown", function(e) {
    //console.log(e);
   //console.log(e.);
   console.log("key code", e.code);  
   console.log("key simbol", e.key);
   var tec=e.key;

            if (isNaN(e.key)){
               console.log(e.key);
            }
            if (e.key == '+'){
                number("+")
            }
            if (e.key == '-'){
                number("-")
            }
            if (e.key =='/'){
                number("/")
            }
            if (e.key == '*'){
                number("X")
            }
            if (e.key == '%'){
                dif("%")
            }           
            if (e.key == '√'){
                dif("√")
            }
            if (!isNaN(e.key)){
                number(e.key.toString())
                console.log(e.key);
             }
             
            if (e.key == 'Enter'){
                resultado("resultado")
                console.log('enter')
            }

});

function number(num)
{
    var numero = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = numero + num;
}
function resultado()
        {
            var resultado = document.getElementById('display').innerHTML;
            if(resultado)
            {
                document.getElementById('display').innerHTML = eval(resultado); 
                // contas padrões Ex: =,-,/ e * 
            }
            else
            {
                document.getElementById('display').innerHTML = "NaN"
            }
        }
        
function dif(simbolo){
    var valorNaTela = document.getElementById('display').innerHTML;
            if (simbolo === '√'){
               document.getElementById('display').innerHTML = Math.sqrt(valorNaTela); 
               //calcular raiz
                                } 
            else if(simbolo === '%') {
              document.getElementById('display').innerHTML = valorNaTela / 100; 
              //calcular a porcentagem 
                             }
}