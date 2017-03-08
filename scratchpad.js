var style = document.createElement('style')
style.textContent = 
"#fib{" + "\n" +
" color: rgb(0,0,255);" + "\n" +
" background: rgb(0,255,0);" + "\n" +
"}"
document.querySelector('body').appendChild(style);


function addDivs(){
  var fibDiv = document.createElement('div');
  fibDiv.textContent = "fibDiv";
  fibDiv.setAttribute("id","fib");
  document.querySelector('body').appendChild(fibDiv);
};
//addDiv();

function fibHelper(n){
  var fibNumber = 0;
  if(n===0){
    return 0;
  }
  else if(n===1){
    return 1; 
  }else{
    var leftChild = fibHelper(n-1);
    var rightChild = fibHelper(n-2);
    fibNumber = leftChild.value + rightChild.value;
  }
  return fibNumber;
}

function fib(n, node){
  return 0;
}

fibHelper(4)
