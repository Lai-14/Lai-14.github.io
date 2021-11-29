// button_1
button_color1 = document.getElementById("b1")
button_color1.addEventListener("mouseover", change1);
button_color1.addEventListener("mouseout", origin1);

function origin1(){
    button = document.getElementById("b1");
    button.style.backgroundColor = "#FED801";
    text = document.getElementById("b1");
    text.style.color = "black";
}

function change1(){
    button = document.getElementById("b1");
    button.style.backgroundColor = "black";
    text = document.getElementById("b1");
    text.style.color = "white";
}

// button_2
button_color2 = document.getElementById("b2")
button_color2.addEventListener("mouseover", change2);
button_color2.addEventListener("mouseout", origin2);

function origin2(){
    button = document.getElementById("b2");
    button.style.backgroundColor = "#FED801";
    text = document.getElementById("b2");
    text.style.color = "black";    
}

function change2(){
    button = document.getElementById("b2");
    button.style.backgroundColor = "black";
    text = document.getElementById("b2");
    text.style.color = "white";    
}

// button_3
button_color3 = document.getElementById("b3")
button_color3.addEventListener("mouseover", change3);
button_color3.addEventListener("mouseout", origin3);

function origin3(){
    button = document.getElementById("b3");
    button.style.backgroundColor = "#FED801";
    text = document.getElementById("b3");
    text.style.color = "black";    
}

function change3(){
    button = document.getElementById("b3");
    button.style.backgroundColor = "black";
    text = document.getElementById("b3");
    text.style.color = "white";    
}