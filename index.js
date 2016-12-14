var left = document.getElementById("left");
var Tera = document.getElementById("Tera");
var btn = document.getElementById("btn");


var right = document.getElementById("right");
var myText = document.getElementById("myText");
var mybtn = document.getElementById("mybtn");


btn.addEventListener('click', handler1, false);
mybtn.addEventListener('click', handler2, false);

function handler1() {
    var span1 = document.createElement('p');
    var span2 = document.createElement('p');
    span1.className = "tarun";

    span2.className = "ash";
    main_content.appendChild(span1);
    sidebar.appendChild(span2);
    span1.textContent = Tera.value;
    span2.textContent = Tera.value;

    Tera.value = "";



}

function handler2() {
    var span1 = document.createElement('p');
    var span2 = document.createElement('p');
    span1.className = "ash";
    span2.className = "tarun";
    main_content.appendChild(span1);
    sidebar.appendChild(span2);
    span1.textContent = myText.value;
    span2.textContent = myText.value;

    myText.value = "";



}
