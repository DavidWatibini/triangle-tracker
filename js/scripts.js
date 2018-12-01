function triangle() {
  var sides = [];
  sides.push(document.getElementById("side1").value);
  sides.push(document.getElementById("side2").value);
  sides.push(document.getElementById("side3").value);

  var [a,b,c] = sides;
  var display = document.getElementById("display");
  if(a.length === 0 || b.length === 0 || c.length === 0 ) {
    alert("Please fill in all the fields")
    prompt("Need help?")
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
    'Letters and punctuation marks are not number',
    'All fields must be filled with a number only',
    'Enter only one number',
    'click on help icon for '
]
  var randomNumber= Math.floor(Math.random() *(clues.length));
  document.getElementById('cluesdisplay').innerHTML=clues[randomNumber]  ;
}
