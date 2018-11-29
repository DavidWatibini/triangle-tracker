function triangle() {
  var sides = [];
  sides.push(document.getElementById("side1").value);
  sides.push(document.getElementById("side2").value);
  sides.push(document.getElementById("side3").value);

  var [a,b,c] = sides;
  
  var display = document.getElementById("display");
    if(a.length === 0 || b.length === 0 || c.length === 0 ) {
      alert("Please fill in all the fields")
      confirm("Have you understood all instructions? click on help")
    } else {
      side(a,b,c);
    }
