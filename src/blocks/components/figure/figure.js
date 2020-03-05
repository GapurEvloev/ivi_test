let arrText = ["1", "2", "3", "Go!"];
let message = document.getElementById("message");

textSequence();

function textSequence(i) {
  if (!i) {
    i = 0;
  }
  if (arrText.length > i) {
    setTimeout(function() {
      message.innerHTML = arrText[i];
      textSequence(++i);
    }, 500); // задержка между цифрами
  } else if (arrText.length == i) {
    // задержка между циклами
    setTimeout(textSequence, 4000);
  }
}

function changeBg(color) {
    let mainEl = document.querySelector(".main");
    mainEl.style.backgroundColor = color;
  
}

message.addEventListener("mouseover", function( event ) {   
    changeBg("#3d6cc7")
}, false);

message.addEventListener("mouseout", function( event ) {   
    changeBg("#ffffff")
}, false);