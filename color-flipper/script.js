let colorArray = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "gray", "aqua", "burlywood", "chartreuse", "darkgreen", "firebrick", "goldenrod", "hotpink", "indigo", "khaki", "lightcoral", "mediumaquamarine", "navajowhite", "olive", "plum", "royalblue", "rosybrown", "teal", "violet", "wheat", "yellowgreen",  ]

const grabColor = getColor();

  function getColor()
{ 
return colorArray[Math.floor(Math.random()*colorArray.length)];

}

function buttonPress() {
   let grabColor = getColor();
    document.getElementById("bgc").innerHTML = grabColor;
    document.getElementById('bodcontainer').style.backgroundColor = grabColor;
    document.getElementById('button').style.backgroundColor = grabColor;
   
}






