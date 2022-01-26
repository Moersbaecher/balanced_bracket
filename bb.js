let input = document.getElementById('input');
let output = document.getElementById('output');
let check = document.getElementById('check');
let clear = document.getElementById('clear');
const data = [];
const fechamento = [];

check.addEventListener('click', function(){
  
  let textField = input.value;
  

   for (let i = 0; i < textField.length; i++){
       if(textField[i] === "(" ){ 
            data.push( "(" );
       } else if(textField[i] === ")" && data.length > 0){
            data.pop("(");
       } else if(textField[i] === ")" && data.length == 0 ){
          fechamento.push(")")
     }
   } 
   console.log(data.length + '(');
   console.log(fechamento.length + ')');
   console.log(input.value);

   if(fechamento.length > 0){
     output.innerHTML = fechamento.length + " ) fora de posição";
   } else {
        output.innerHTML = data.length + " ( fora de posição";
   }

     while(data.length > 0) {
          data.pop();
      };

     return data;
})

clear.addEventListener('click', function(){
     input.value = "";
});