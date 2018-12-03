function triangle() {
  var sides = [];
  sides.push(document.getElementById("side1").value);
  sides.push(document.getElementById("side2").value);
  sides.push(document.getElementById("side3").value);

  var [a,b,c] = sides;
  var display = document.getElementById("display");
  if(a.length === 0 || b.length === 0 || c.length === 0 ) {
    alert("Please fill in all the fields")
    confirm("Click on help for more information")
  } else {
    side(a,b,c);
  } 
}
function side(a,b,c) {
  if(a + b > c && b + c > a && c + a > b) {
    if(a === b && a === c) {
      display.innerHTML = "<p>This is an Equilateral triangle</p>"
    }
    else if(a === b || b === c || c === a) {
      display.innerHTML = "This is an Isoceles triangle"
    }
    else {
      display.innerHTML = "This is a Scalene triangle"
    }
  }
  else {
    display.innerHTML = "This is not a triangle"
  }
}
  function reset() {
    location.reload();
  }

function newClues() {
  var clues = [
    'Enter only numbers to the fields provided',
    'Letters and punctuation marks are not numbers',
    'All fields must be filled with a number only',
    'Enter only one number',
    'click on the help icon for more information',
    'All inputs must be submitted for result to be displayed'
]
  var randomNumber= Math.floor(Math.random() *(clues.length));
  document.getElementById('cluesdisplay').innerHTML=clues[randomNumber]  ;
}

function instructions() {
    document.getElementById("instructions").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.instruct')) {

    var instructions = document.getElementsByClassName("instructions-content");
    var i;
    for (i = 0; i < instructions.length; i++) {
      var openInstructions = instructions[i];
      if (openInstructions.classList.contains('show')) {
        openInstructions.classList.remove('show');
      }
    }
  }
}

function about() {
    document.getElementById("about").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.abouttc')) {

    var instructions = document.getElementsByClassName("about-content");
    var i;
    for (i = 0; i < about.length; i++) {
      var openAbout = about[i];
      if (openAbout.classList.contains('show')) {
        openAbout.classList.remove('show');
      }
    }
  }
}
