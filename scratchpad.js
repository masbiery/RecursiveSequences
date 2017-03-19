function inputCss(){
  var style = document.createElement('style');
  style.textContent = 
    ".rightDiv{ " +
		"	color: lightgray; " +
		"	font-size: 10px; " +
		"	float: right; " +
		"	display: inline-block; " +
		"	background-color: rgba(0,0,255,0.09); " +
		"	width: 50%; " +	
		"} " +
		".leftDiv{ " +
		"	color: lightgray; " +
		"	font-size: 10px; " +
		"	float: left; " +
		"	display: inline-block; " +
		"	background-color: rgba(0,0,255,0.09); " +
		"	width: 50%; " +
		"} " +
		".centerDiv{ " +
		"	color: lightgray; " +
		"	font-size: 10px; " +
		"	float: center; " +
		"	display: inline-block; " +
		"	background-color: rgba(0,0,255,0.09); " +
		"	width: 50%; " +
		"} " +
		".fibDiv{ " +
		"	color: lightgray; " +
		"	margin: 10px; " +
		"	width: 50000px; " +
		"	text-align: center; " +
		"	background-color: green; " +
		"} " +
		".pelDiv{ " +
		"	color: lightgray; " +
		"	margin: 10px; " +
		"	width: 50000px; " +
		"	text-align: center; " +
		"	background-color: red; " +
		"} " +
		".tribDiv{ " +
		"	color: lightgray; " +
		"	margin: 10px; " +
		"	width:600000px; " +
		"	text-align: center; " +
		"	background-color: teal; " +
		"} ";
  document.querySelector('body').appendChild(style);
}


function addDivs(){
  var fibDiv = document.createElement('div');
  fibDiv.setAttribute('class','fibDiv');
  
  var pelDiv = document.createElement('div');
  pelDiv.setAttribute('class','pelDiv');
  
  var tribDiv = document.createElement('div');
  tribDiv.setAttribute('class','tribDiv');
  
  document.querySelector('body').appendChild(fibDiv);
  document.querySelector('body').appendChild(pelDiv);
  document.querySelector('body').appendChild(tribDiv);
}


function fibHelper(n){
  var fibNumber;
  var div = document.createElement('div');
  if(n===0){
    fibNumber = 0;
    var text = document.createElement('p');
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
    leftChild.html.setAttribute('class', 'leftDiv');
    
    var rightChild = fibHelper(n-2);
    rightChild.html.setAttribute('class', 'rightDiv');
    
    fibNumber = leftChild.value + rightChild.value;
    var text = document.createElement('p');
    text.textContent = 'Fib(' + n + ')=' + fibNumber;
    div.appendChild(text);
    div.appendChild(leftChild.html);
    div.appendChild(rightChild.html);
  }
  return {'value' : fibNumber, 'html' : div}; 
}


function fib(n, node){
  var tree = fibHelper(n);
  node.appendChild(tree.html);
  node.style = 'display: inline-block';
}


function pelHelper(n){
  var pelNumber;
  var div = document.createElement('div');
  if(n===0){
    pelNumber = 0;
    var text = document.createElement('p');
    text.textContent = 'Pel(' + n + ')=' + pelNumber;
    div.appendChild(text);
  }
  else if(n===1){
    pelNumber = 1;
    var text = document.createElement('p');
    text.textContent = 'Pel(' + n + ')=' + pelNumber;
    div.appendChild(text);
  }else{
    var leftChild = pelHelper(n-1);
    leftChild.html.setAttribute('class', 'leftDiv');
    
    var rightChild = pelHelper(n-2);
    rightChild.html.setAttribute('class', 'rightDiv');
    
    pelNumber = (2*leftChild.value) + rightChild.value;
    var text = document.createElement('p');
    text.textContent = 'Pel(' + n + ')=' + pelNumber;
    div.appendChild(text);
    div.appendChild(leftChild.html);
    div.appendChild(rightChild.html);
  }
  return {'value' : pelNumber, 'html' : div}; 
}


function pel(n, node){
  var tree = pelHelper(n);
  node.appendChild(tree.html);
  node.style = 'display: inline-block';
}


function tribHelper(n){
  var tribNumber;
  var div = document.createElement('div');
  if(n===0){
    tribNumber = 0;
    var text = document.createElement('p');
    text.textContent = 'T(' + n + ')=' + tribNumber;
    div.appendChild(text)
  }
  else if(n===1){
    tribNumber = 0;
    var text = document.createElement('p');
    text.textContent = 'T(' + n + ')=' + tribNumber;
    div.appendChild(text);
  }
  else if(n===2){
    tribNumber = 1;
    var text = document.createElement('p');
    text.textContent = 'T(' + n + ')=' + tribNumber;
    div.appendChild(text);
  }else{
    var leftChild = tribHelper(n-1);
    leftChild.html.setAttribute('class', 'leftDiv');
    
    var centerChild = tribHelper(n-2);
    centerChild.html.setAttribute('class', 'centerDiv');
    
    var rightChild = tribHelper(n-3);
    rightChild.html.setAttribute('class', 'rightDiv');
    
    tribNumber = leftChild.value + rightChild.value + centerChild.value;
    var text = document.createElement('p');
    text.textContent = 'T(' + n + ')=' + tribNumber;
    div.appendChild(text);
    
    div.appendChild(leftChild.html);
    div.appendChild(centerChild.html);
    div.appendChild(rightChild.html);
  }
  return {'value' : tribNumber, 'html' : div}; 
}


function trib(n, node){
  var tree = tribHelper(n);
  node.appendChild(tree.html);
  node.style = 'display: inline-block';
}


function treeSelector(n, node){
  var i = node.childNodes.length;
  while(i>2){
    node.removeChild(node.lastChild);
    i = node.childNodes.length;
  }
  if(node.classList.contains('fibDiv')){
    fib(n, node);
  }
  if(node.classList.contains('pelDiv')){
    pel(n, node);
  }
  if(node.classList.contains('tribDiv')){
    trib(n, node);
  }
}


function updateButton(button, node){
   if(node.classList.contains('fibDiv')){
    button.textContent = "fib(" + node.querySelector('input').value + ")";
  }
  if(node.classList.contains('pelDiv')){
    button.textContent = "pel(" + node.querySelector('input').value + ")";
  }
  if(node.classList.contains('tribDiv')){
    button.textContent = "trib(" + node.querySelector('input').value + ")";
  }
}


function addControl(node){
  var slider = document.createElement('input');
  slider.type = 'range';
  slider.min = 0;
  slider.max = 8;
  slider.value = 0;
  slider.addEventListener('input', function(){
    updateButton(bttn, node)
  });
  node.appendChild(slider);
  
  var bttn = document.createElement('button');
  bttn.type = 'button';
  bttn.addEventListener('click', function() {
    treeSelector(parseInt(node.querySelector('input').value), node)
  });
  node.appendChild(bttn);
  updateButton(bttn, node);
}


document.title = "Recursive Sequence Trees";
addDivs();
addControl(document.querySelector('.fibDiv'));
addControl(document.querySelector('.pelDiv'));
addControl(document.querySelector('.tribDiv'));