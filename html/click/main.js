let ableToPlay = false; // This will become true on timer end
let clicks = 0;

function load(){
	clicks = 0;
}

function start(){
	// On second 0
	ableToPlay = true;
	document.getElementById("start").style.display = 'none';
	document.getElementById("main").style.display = 'inline';
	end();
	
	// Countdown
	setInterval(() => {
		let truecd = parseInt(document.getElementById("total").innerHTML);
		if(truecd === 0 || isNaN(truecd)) return document.getElementById("total").innerHTML = `<b>Refresh to restart!</b><br>Average: ${clicks/10} CPS`;
		document.getElementById("total").innerHTML = `${truecd - 1} seconds left`;
	}, 1000)
}

function score(){
	if(ableToPlay === false) return;
	
	// Increment score on click
	clicks++;
  let cc = parseInt(document.getElementById("score").innerHTML);
  document.getElementById("score").innerHTML = cc+1;
}

function end(){
  setTimeout(() => {
	  ableToPlay = false;
    document.getElementById("scores").style.display = "inline";
    document.getElementById("total").innerHTML = document.getElementById("score").innerHTML
    document.getElementById("main_btn").style.display = "none";
  }, 10000)
}
