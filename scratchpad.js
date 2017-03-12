function inputCss(){
  var style = document.createElement('style');
  style.textContent = 
  "#fib{" + "\n" +
  " color: rgb(0,0,255);" + "\n" +
  " background: rgb(0,255,0);" + "\n" +
  "}";
  document.querySelector('body').appendChild(style);
};


function addDivs(){
  var fibDiv = document.createElement('div');
  fibDiv.setAttribute('class','fibDiv');
  document.querySelector('body').appendChild(fibDiv);
};


function fibHelper(n){
  var fibNumber;
  var div = document.createElement('div');
  if(n===0){
    fibNumber = 0;
    var text = document.createElement('p')
    text.textContent = 'Fib(' + n + ')=' + fibNumber;
    div.appendChild(text);
  }
  else if(n===1){
    fibNumber = 1;
    var text = document.createElement('p');
    text.textContent = 'Fib(' + n + ')=' + fibNumber;
    div.appendChild(text);
  }else{
    var leftChild = fibHelper(n-1);
    leftChild.html.setAttribute('class', 'fib-left');
    
    var rightChild = fibHelper(n-2);
    rightChild.html.setAttribute('class', 'fib-right');
    
    fibNumber = leftChild.value + rightChild.value;
    var text = document.createElement('p');
    text.textContent = 'Fib(' + n + ')=' + fibNumber;
    div.appendChild(text);
    div.appendChild(leftChild.html);
    div.appendChild(rightChild.html);
  }
  return {'value' : fibNumber, 'html' : div}; 
};

function fib(n, node){
  var tree = fibHelper(n);
  node.appendChild(tree.html);
  node.style = 'display: inline-block';
}

addDivs();
fib(7, document.querySelector('.fibDiv'));
