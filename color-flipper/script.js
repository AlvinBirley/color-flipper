let colorArray = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "gray", "aqua", "burlywood", "chartreuse", "darkgreen", "firebrck" ]

const grabColor = getColor();

  function getColor()
{ 
return colorArray[Math.floor(Math.random()*colorArray.length)];

}

function buttonPress() {
   let grabColor = getColor();
    document.getElementById("bgc").innerHTML = grabColor;
    document.getElementById('bodcontainer').style.backgroundColor = grabColor;
   
}

buttonPress();




