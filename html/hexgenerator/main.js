function generate(){
	let chars = document.getElementById("characters").value;
	let tries = document.getElementById("tries").value;
	let lower = document.getElementById("lowercase");
	let final = document.getElementById("output");
	
	final.value = ""
	
	if(isNaN(chars) || chars > 32 || chars < 1){
		alert("Character number must be a number between 1 and 32.")
	}
	
	const items = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
	const itemsL = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
	
	for (let i = 0; i < tries; i++){
		let current = "";
		let n = 0;
		while (n < chars) {
			if(lower.checked){
				let item = itemsL[Math.floor(Math.random() * itemsL.length)];
				current += item;
			} else {
				let item = items[Math.floor(Math.random() * items.length)];
				current += item;
			}
			n++;
		}
		final.value += `${current}\n`
	}
}
