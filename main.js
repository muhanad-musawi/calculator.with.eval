function appendOperation(operation) {
  document.getElementById('area').innerHTML += operation;
} 

function calculateResult() { 
  let container =document.getElementById('area'); 
  let result = eval(container.innerHTML); 
  // daran  muss ich noch arbeiten!! 
  container.innerHTML = result  
}  

/*function prozent() {
  let contProzent = document.getElementById('area');   
  
} */

function deleteOne() {
  let container =document.getElementById('area'); 
  if (container.innerHTML.endsWith(' ')) {
    container.innerHTML = container.innerHTML.slice(0, -3);
  } else { 
  container.innerHTML = container.innerHTML.slice(0, -1); 
 }
} 



function deleteAll() {
  const myNode = document.getElementById('area');
  myNode.innerHTML = '';
}