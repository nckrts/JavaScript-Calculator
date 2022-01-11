document.addEventListener("keydown", function(e) {
  console.log("key code", e.code);  
  console.log("key simbol", e.key);
  var teclaPressionada = e.key;

           if (isNaN(teclaPressionada)){ //if verificando se é numero ou ñ
                   switch (teclaPressionada) { //switch chamado para validar qual será a função
                         case '+': number("+");
                         break;

                         case '-': number("-");
                         break;

                         case '/': number("/"); 
                         break;

                         case '*': number("*");
                         break;

                         case '%': number("%");
                         break;

                         case '√':  number("√");          
                         break;

                         case 'Enter': resultado("resultado");
                         break;
                                             }
                                        }
           else {
            number(teclaPressionada.toString());
            console.log(teclaPressionada);
                }
});

  function number(num) {
      var numero = document.getElementById('display').innerHTML;
      document.getElementById('display').innerHTML = numero + num;
  }
  
  function resultado() {
      var resultado = document.getElementById('display').innerHTML;
      // contas padrões Ex: =,-,/ e *
      if(resultado) {
          document.getElementById('display').innerHTML = eval(resultado);  
      } else {
          document.getElementById('display').innerHTML = "NaN"
      }
  }
    
  function dif(simbolo) {
      var valorNaTela = document.getElementById('display').innerHTML;
      //calcular raiz  
      if (simbolo === '√') {
          document.getElementById('display').innerHTML = Math.sqrt(valorNaTela); 
      //calcular a porcentagem 
      } else if(simbolo === '%') {
          document.getElementById('display').innerHTML = valorNaTela / 100; 
      }
  }
