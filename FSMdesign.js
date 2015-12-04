"use strict";
(function() {
  var count;
  window.onload = function() {
    document.addEventListener("keydown", action);
    count = 0;
	var allHealthBar = document.querySelectorAll(".healthbar");
	for (var i = 0; i < allHealthBar.length; i++) {
		allHealthBar[i].style.backgroundColor = "green";
	}
	var img = new Image();
	img.src = "http://www.andrew-yq.com/shift90/lab311/image.gif";
	img.src = "http://www.andrew-yq.com/shift90/lab311/teletubbies.png";
	img.src = "http://www.andrew-yq.com/shift90/lab311/boss.png";
	img.src = "http://www.andrew-yq.com/shift90/lab311/ouch.png";
	img.src = "http://www.andrew-yq.com/shift90/lab311/oof.png";
	img.src = "http://www.andrew-yq.com/shift90/lab311/fail.png";
	img.src = "http://www.andrew-yq.com/shift90/lab311/lol.png";
	img.src = "http://www.andrew-yq.com/shift90/lab311/vs.png";
    document.getElementById("enablebgm").onclick = enableBgm;
  };

  function enableBgm() {
    document.getElementById("bgm").autoplay = "autoplay";
    document.getElementById("bgm").muted = !this.firstChild.checked;
  }

  function action(event) {
    var movement = event.keyCode;
    if (includes(movement, [83, 68, 65, 77])) {
      event.preventDefault();
      if (count == 0) {
        // D is correct
        if (includes(movement, [65, 77, 83])) {
          document.getElementById("OOF").style.visibility = "visible";
          setTimeout(function() {
            document.getElementById("OOF").style.visibility = "hidden";
          }, 300);
          document.getElementById("LOL").style.visibility = "visible";
          setTimeout(function() {
            document.getElementById("LOL").style.visibility = "hidden";
          }, 300);
          changeHPbar();
        } else {
          document.getElementById("boss").style.transform = "rotate(20deg)";
          setTimeout(function() {
            document.getElementById("boss").style.transform = "rotate(0deg)";
          }, 100);
          count++;
        }
      } else if (count == 1) {
        // S is correct
        if (includes(movement, [65, 77, 68])) {
          document.getElementById("OOF").style.visibility = "visible";
          setTimeout(function() {
            document.getElementById("OOF").style.visibility = "hidden";
          }, 300);
          document.getElementById("LOL").style.visibility = "visible";
          setTimeout(function() {
            document.getElementById("LOL").style.visibility = "hidden";
          }, 300);
          changeHPbar();
          count = 0;
        } else {
          document.getElementById("boss").style.transform = "rotate(20deg)";
          setTimeout(function() {
            document.getElementById("boss").style.transform = "rotate(0deg)";
          }, 100);
          count++;
        }
      } else if (count == 2) {
        // D is correct
        if (includes(movement, [65, 77, 83])) {
          document.getElementById("OOF").style.visibility = "visible";
          setTimeout(function() {
            document.getElementById("OOF").style.visibility = "hidden";
          }, 300);
          document.getElementById("LOL").style.visibility = "visible";
          setTimeout(function() {
            document.getElementById("LOL").style.visibility = "hidden";
          }, 300);
          changeHPbar();
          count = 0;
        } else {
          document.getElementById("boss").style.transform = "rotate(20deg)";
          setTimeout(function() {
            document.getElementById("boss").style.transform = "rotate(0deg)";
          }, 100);
          count++;
        }
      } else if (count == 3) {
        //A is correct
        if (includes(movement, [83, 77, 68])) {
          document.getElementById("OOF").style.visibility = "visible";
          setTimeout(function() {
            document.getElementById("OOF").style.visibility = "hidden";
          }, 300);
          document.getElementById("LOL").style.visibility = "visible";
          setTimeout(function() {
            document.getElementById("LOL").style.visibility = "hidden";
          }, 300);
          changeHPbar();
          count = 0;
        } else {
          document.getElementById("boss").style.transform = "rotate(90deg)";
          setTimeout(function() {
            document.getElementById("boss").style.transform = "rotate(0deg)";
          }, 700);
          document.getElementById("OUCH").style.visibility = "visible";
          setTimeout(function() {
            document.getElementById("OUCH").style.visibility = "hidden";
          }, 300);
          document.getElementById("lefthealthbar").style.backgroundColor = "green";
          document.getElementById("righthealthbar").style.backgroundColor = "green";
          document.getElementById("middlehealthbar").style.backgroundColor = "green";
          count = 0;
        }
      }
    }
    if (document.getElementById("lefthealthbar").style.backgroundColor == "white") {
      document.getElementById("FAIL").style.visibility = "visible";
    }

  }

  function changeHPbar() {
    if (document.getElementById("lefthealthbar").style.backgroundColor == "green") {
      document.getElementById("lefthealthbar").style.backgroundColor = "yellow";
      document.getElementById("middlehealthbar").style.backgroundColor = "yellow";
      document.getElementById("righthealthbar").style.backgroundColor = "white";
    } else if (document.getElementById("lefthealthbar").style.backgroundColor == "yellow") {
      document.getElementById("lefthealthbar").style.backgroundColor = "red";
      document.getElementById("middlehealthbar").style.backgroundColor = "white";
    } else {
      document.getElementById("lefthealthbar").style.backgroundColor = "white";
    }
  }

  function includes(i, items) {
    if (items.indexOf(i) == -1) {
      return false;
    } else {
      return true;
    }
  }
})();
