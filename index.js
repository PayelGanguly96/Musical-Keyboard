window.onload = function(){
  // Items holding notes
  var a = document.getElementById("a");
  var b = document.getElementById("b");
  var c = document.getElementById("c");
  var d = document.getElementById("d");
  var e = document.getElementById("e");
  var f = document.getElementById("f");
  var g = document.getElementById("g");

  // Audio notes
  var aNotes = document.getElementById("aNotes");
  var bNotes = document.getElementById("bNotes");
  var cNotes = document.getElementById("cNotes");
  var dNotes = document.getElementById("dNotes");
  var eNotes = document.getElementById("eNotes");
  var fNotes = document.getElementById("fNotes");
  var gNotes = document.getElementById("gNotes");

  // Functions for memory game and no-game animations
  function playMusic(li, note, color, firstcolor){
    li.addEventListener('mouseover', function(){
      note.currentTime = 0;
      note.play();
      li.style.background = color;
      li.style.width = "80px";
      li.style.height = "150px";
    })

    li.addEventListener("mouseout", function(){
      li.style.background = firstcolor;
      li.style.width = "80px";
      li.style.height = "80px";
    })
  }
	
	playMusic(a, aNotes, "red", "rgba(255, 0, 0, 0.2)");
  playMusic(b, bNotes, "blue", "rgba(0, 0, 255, 0.2)");
  playMusic(c, cNotes, "brown", "rgba(165, 42, 42, 0.2)");
  playMusic(d, dNotes, "white", "rgba(255, 255, 255, 0.2)");
  playMusic(e, eNotes, "green", "rgba(0, 128, 0, 0.2)");
  playMusic(f, fNotes, "orange", "rgba(255, 165, 0, 0.2)");
  playMusic(g, gNotes, "purple", "rgba(128, 0, 128, 0.2)");
}