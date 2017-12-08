
var cookies = 0;
var cursors = 0;
var cursorCost = 0;
var firstName;

function setName() {                                                          //After someone enters there name, this removes the field and
  firstName = document.getElementById("fName").value;                         //Adds info
  document.getElementById("nameFields").innerHTML = "";     //https://www.w3schools.com/jsref/dom_obj_style.asp
  document.getElementById("nameFields").style.fontSize = "150%";
  document.getElementById("position").style.fontSize = "150%";
  document.getElementById("heading").innerHTML = "Cookie Monster &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp " +
                    "Name: " + firstName +  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Position: Amateur";

}

/*
function cookieClick(number) {

  cookies = cookies + number;
  document.getElementById("cookies").innerHTML = cookies;

}

function buyCursor() {
  cursorCost = Math.floor(10*Math.pow(1.1,cursors))     //Works Out cost for current cursor
  if(cookies >= cursorCost){                                //Checks that playerr can buy cursor
    cursors = cursors + 1;
    cookies = cookies - cursorCost;
    document.getElementById("cursors").innerHTML = cursors;
    document.getElementById("cookies").innerHTML = cookies;
  }
  var nextCost = Math.floor(10*Math.pow(1.1,cursors));            //Updates the user of cursor cost
  document.getElementById("cursorCost").innerHTML = nextCost;
};

window.setInterval(function(){

	cookieClick(cursors);

  if(cookies < cursorCost){

  }

    //  document.getElementById("buyCursor").disabled = false;

}, 1000);
*/
