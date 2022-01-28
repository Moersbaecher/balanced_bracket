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
            data.push( "( na " + [i] + " posição" )
            console.log('push');
       } else if(textField[i] === ")" && data.length > 0){
            data.pop("(")
            console.log('pop');
       } else if(textField[i] === ")" && data.length == 0 ){
          fechamento.push(") na " + [i] + " posição")
          console.log('sobrou' + [i]);
     }
     console.log([i])
   } 
   console.log(data);
   console.log(fechamento);
  // console.log(input.value);

   if(fechamento.length > 0){
     output.innerHTML = fechamento + "<br>" + data + "<br>"+ input.value;
   } else {
        output.innerHTML = data + "<br>" + fechamento + "<br>" + input.value;
   }

     while(data.length > 0) {
          data.pop();
      };

     return data;
})

clear.addEventListener('click', function(){
     input.value = "";
     data.pop();
});