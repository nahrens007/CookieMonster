var firstName,position;
var hideHeading = true;          //Boolean Variables

/* 
setNameClick(): function is activated when the "submit" button is clicked on the name input form.
This function is responsible for: 
1) Retrieving the name from the input box in the name input form
2) Setting the name and position variables
3) Setting the name/position cookies
4) Setting the visibility of the header (cookie and html/css).
*/
function setNameClick() {                                                          //After someone enters there name, this removes the field and

  firstName = document.getElementById("fName").value;                         // Retrieves name from user
  
  // if the firstName input field was empty, set it to a generic name.
  if (firstName == "" || firstName == null){
    firstName = "Guest";	  
  }

  document.getElementById("game").style.display = "block";                    // Set the display div to block so that the user may begin playing
  document.getElementById("nameInputFields").innerHTML = "";                  //https://www.w3schools.com/jsref/dom_obj_style.asp

  position = "Amateur";                                                       // Clients always start as an amateur.
  hideHeading = false;                                                        // The heading should not be hidden since the name and position are set.

  updateHeader();                                                             // Update the heading (name/position)

  // Update the cookies
  setCookie("name", firstName, 30);
  setCookie("position", position, 30);
  setCookie("headingVisibility", hideHeading, 30);
}

/* 
Will update the information in the top header when we need it to.
*/
function updateHeader(){

  document.getElementById("gamePlayer").innerHTML = "Name: " + firstName;
  document.getElementById("gamePosition").innerHTML = "Position: " + position;
  
  if (hideHeading)
  {
    document.getElementById("gamePlayer").style.display = "inline";
    document.getElementById("gamePosition").style.display = "inline";
  } else {
    document.getElementById("gamePlayer").style.display = "none";
    document.getElementById("gamePosition").style.display = "none";
  }
  
}

/* return the cookie at name cname: https://www.w3schools.com/js/js_cookies.asp */
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/* Load the cookies */
function loadCookies() {
  firstName = getCookie("name");
  hideHeading = getCookie("headingVisibility");
  position = getCookie("position");
  console.log(hideHeading);
	
  // set the name to name from cookies
  if (firstName != "")
  {
      document.getElementById("nameInputFields").innerHTML = "";
      updateHeader();
  }else {
      document.getElementById("nameInputFields").style.display = "block";
  }
}

/* runs on HTML body onLoad event */
function bodyOnLoad() {
  loadCookies();
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
