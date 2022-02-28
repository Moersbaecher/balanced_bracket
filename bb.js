const data = [];
const fechamento = [];
let input = document.getElementById('input');
let output = document.getElementById('output');
let check = document.getElementById('check');
let clear = document.getElementById('clear');
let base = [];
let textField = input.value;

check.addEventListener('click', function () { 

     for (let i = 0; i < textField.length; i++) {
          if (textField[i] === "(") {
               data.push([i + 1]);
          } else if (textField[i] === ")") {
               if (data.length == 0) {
                    fechamento.push([i + 1]);
               } else if (data.length > 0) {
                    data.pop([i + 1]);
               }
          }
     }

     console.log("data: " + data, isNaN(data));
     console.log("fechamento: " + fechamento, isNaN(fechamento));


     base =[data, fechamento];  
     base.sort();

     asterisco(input.value);

     while (data.length > 0) {
          data.pop();
     };
     while (fechamento.length > 0) {
          fechamento.pop();
     };

     //return data;
})



clear.addEventListener('click', function () {
     input.value = "";
     data.pop();
     fechamento.pop();
     output.innerHTML = "";
});


//const inputStr = input.value.split(" ");
const inputStr = Array.from(input.value);
console.log('conteudo: ' + inputStr);
console.log('quantidade: ' + inputStr.length);


function asterisco(texto){

     for (let i = 1; i <= texto.length; i++){

          console.log("base: " + base + " and " + isNaN(base));
          console.log("i: "+ i)

            if(data == i || fechamento == i){
               console.log("if")
               console.log(texto.substring(0,i) + "*" + texto.substring(i, texto.length));
          } else {
               console.log("else")
          } 
     }
}