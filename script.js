window.addEventListener("load",function(){
    var div = document.createElement("div");
    var text = document.createTextNode("hello javascript");
    div.appendChild(text);
    document.getElementById("contents").appendChild(div);
},false);