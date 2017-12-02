document.addEventListener("load",function(){
    var $content = document.getElementById('contents');
    var text = document.createTextNode('hello javascript');
    var $div = document.createElement('div');
    $div.appendChild(text);
    $content.appendChild($div);
},false);