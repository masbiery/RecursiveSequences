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
  
  var pelDiv = document.createElement('div');
  pelDiv.setAttribute('class','pelDiv');
  
  document.querySelector('body').appendChild(fibDiv);
  document.querySelector('body').appendChild(pelDiv);
};


function fibHelper(n){
  var fibNumber;
  var div = document.createElement('div');
  if(n===0){
    fibNumber = 0;
    var text = document.createElement('p')
    text.textContent = 'Fib(' + n + ')=' + fibNumber;
    div.appendChild(text)
  }
  else if(n===1){
    fibNumber = 1;
    var text = document.createElement('p')
    text.textContent = 'Fib(' + n + ')=' + fibNumber;
    div.appendChild(text);
  }else{
    var leftChild = fibHelper(n-1);
    leftChild.html.setAttribute('class', 'leftDiv');
    
    var rightChild = fibHelper(n-2);
    rightChild.html.setAttribute('class', 'rightDiv');
    
    fibNumber = leftChild.value + rightChild.value;
    var text = document.createElement('p')
    text.textContent = 'Fib(' + n + ')=' + fibNumber;
    div.appendChild(text);
    div.appendChild(leftChild.html);
    div.appendChild(rightChild.html);
  }
  return {'value' : fibNumber, 'html' : div}; 
};

function fib(n, node){
  var tree = fibHelper(n);
  node.appendChild(tree.html)
  node.style = 'display: inline-block';
}

addDivs();
fib(4, document.querySelector('.fibDiv'));

function pelHelper(n){
  var pelNumber;
  var div = document.createElement('div');
  if(n===0){
    pelNumber = 0;
    var text = document.createElement('p')
    text.textContent = 'Pel(' + n + ')=' + pelNumber;
    div.appendChild(text)
  }
  else if(n===1){
    pelNumber = 1;
    var text = document.createElement('p')
    text.textContent = 'Pel(' + n + ')=' + pelNumber;
    div.appendChild(text);
  }else{
    var leftChild = pelHelper(n-1);
    leftChild.html.setAttribute('class', 'leftDiv');
    
    var rightChild = pelHelper(n-2);
    rightChild.html.setAttribute('class', 'rightDiv');
    
    pelNumber = (2*leftChild.value) + rightChild.value;
    var text = document.createElement('p')
    text.textContent = 'Pel(' + n + ')=' + pelNumber;
    div.appendChild(text);
    div.appendChild(leftChild.html);
    div.appendChild(rightChild.html);
  }
  return {'value' : pelNumber, 'html' : div}; 
};

function pel(n, node){
  var tree = pelHelper(n);
  node.appendChild(tree.html)
  node.style = 'display: inline-block';
}

addDivs();
pel(6, document.querySelector('.pelDiv'));
