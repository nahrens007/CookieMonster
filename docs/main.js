var firstName;
var position;
var storyText = "All sounds are muted. The world around is warm and comforting but "+
  "strangely is not as roomy as you first remebered. Suddenly, a light appears and " +
  "you are thrust towards the light. You think to yourself, 'Here goes nothing...'";
var cry = 0, giggle = 0, giggleModifier = 1, babyWords = 0, soiledDiapers = 0, pottyTraining = 0, parentStress = 0;                                  //Baby variables
var parentsAdoration = 0, selfWill = 0, intelligence = 0;


/*
function: gameLoop():
1) Runs the game loop. Is called only by initiateGame()!
 */
function gameLoop() {

  document.getElementById("pAdorationBar").style.height = parentsAdoration + "px";
  document.getElementById("selfWillBar").style.height = selfWill + "px";
  document.getElementById("intelligenceBar").style.height = intelligence + "px";
  document.getElementById("pottyTrainBar").style.height = pottyTraining + "px";
  document.getElementById("parentStressBar").style.height = parentStress + "px";

}

/*
function: initiateGame()
This function is responsible for:
1) Setting the display of any elements
correctly, as well as any game variables (other than the name and position,
which have been set by either setNameClick() or loadCookies()).
2) Starting the ticker tape animation
*/
function initiateGame(){
  //Shows the first buttons and set starting stats
  document.getElementById("buttons").style.display = "inline";

  document.getElementById("gamePlayer").innerHTML = "Name: " + firstName;
  document.getElementById("gamePosition").innerHTML = "Position: " + position;
  document.getElementById("tapeContainer").style.display = "block";
  document.getElementById("game").style.display = "block";
  document.getElementById("gamePlayer").style.display = "inline";
  document.getElementById("gamePosition").style.display = "inline";

  // Start ticker tape
  animateTape(storyText, 2400);

  /* game stats are updated once every 100ms  */
  setInterval(function() { gameLoop(); }, 100);
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}
/*This will determine what happens when giggle is cliked.
 Overtime the effects increase.*/
function giggleClick(){


  if(giggle < cry){
    giggleModifier = 2;
  }

  if(giggle < 10){
    parentsAdoration += (1*giggleModifier);
    selfWill --;
    giggle++;
    parentStress--;
  }else if(giggle==10){
      document.getElementById("giggleButton").innerHTML = "Laugh";
      giggle++;
    }else{
    giggle += 2
    parentsAdoration += (5*giggleModifier);
    selfWill-= 5;
    parentStress -=5;
    }

}

function cryClick(){

  var crySound;
  crySound = new sound("babyCry.mp3");
  crySound.stop();


  if(cry < 10){
    parentsAdoration--;
    selfWill++;
    cry++;
    parentStress++;
  }else if(cry==10){
      document.getElementById("cryButton").innerHTML = "Wail";
      cry++;
    }else{
    cry += 2
    parentsAdoration -= 5;
    selfWill+= 5;
    parentStress +=5;
    }

    crySound.play();


}

function babyWordsClick() {

  intelligence++;

}

function pottyTrainClick() {

  pottyTraining++;
}

function parentStatus(){


}

function healthStatus() {

}




/* function: bodyOnLoad():
Runs when the HTML body loads (onload attribute)
*/
function bodyOnLoad() {

  loadCookies();
}

/*
function: animateTape():
1) This is going to have scrolling text to introduce the game like a ticker tape.
https://www.w3schools.com/js/js_htmldom_animate.asp
*/
function animateTape(text, containterSize){
  var animatedElement = document.getElementById("tapeAnimate");
  var id = setInterval(frame,15);
  var box = document.querySelector("#tapeContainer");  //https://www.w3schools.com/jsref/prop_element_offsetwidth.asp
  var pos = box.offsetWidth + 50;

  animatedElement.style.width = containterSize + "px";

  //Starts tape offscreen so you don't see a flash of text on start
  animatedElement.style.left = pos + "px";
  animatedElement.innerHTML = text;

  function frame(){
    if(pos <= -containterSize){
      //clearInterval(id);
      pos = box.offsetWidth + 50;
    }else{
      pos-=2;
      animatedElement.style.left = pos + "px";
    }
  }
}

/*
setNameClick(): function is activated when the "submit" button is clicked on the name input form.
This function is responsible for:
1) Retrieving the name from the input box in the name input form
2) Setting the name and position variables
3) Setting the name/position cookies
4) Setting the visibility of the header (cookie and html/css).
*/
function setNameClick() {

  firstName = document.getElementById("fName").value;
  position = "Baby";

  // if the firstName input field was empty, set it to a generic name.
  if (firstName == "" || firstName == null){
    firstName = "Guest";
  }

  /* nameInputFields is no longer needed since the name has been retrieved */
  document.getElementById("nameInputFields").innerHTML = "";                  //https://www.w3schools.com/jsref/dom_obj_style.asp

  // Set the cookies - should expire after 356 days.
  setCookie("name", firstName, 356);
  setCookie("position", position, 356);

  initiateGame(); // Update the heading (name/position) and prepare to start
}

/*
function: loadCookies():
1) Load the cookies for the game
- if cookies have been set: load cookies and start game by calling initiateGame()
- else (cookies not set): display nameInputFields to allow user to enter name
*/
function loadCookies() {
  firstName = getCookie("name");
  position = getCookie("position");

  // set the name to name from cookies
  if (firstName != "")
  {
    document.getElementById("nameInputFields").innerHTML = "";
    initiateGame();
  }else {
    document.getElementById("nameInputFields").style.display = "block";
  }
}

/* set the cookie at name cname to value cvalue, to expire in exdays */
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/* return the cookie at name cname: https://www.w3schools.com/js/js_cookies.asp */
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
