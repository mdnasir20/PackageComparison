function comparePackages() {
	var texts = Number(document.getElementById("textMessages").value);
	
	var calls = Number(document.getElementById("callTime").value);
	
	var allincl = 29.90;
	
	var specialPackeg = ((texts * 0.069) + (calls * 0.069) + 19.90);
	
	if (specialPackeg < allincl) {
		answr = "The Special package (" + specialPackeg.toFixed(2) + ") is cheaper than the All-inclusive package (29.90)"
	} else {
		answr = "The All-inclusive package (29.90) is cheaper than the Special package (" + specialPackeg.toFixed(2) + ")";
	}
	document.getElementById("answer").innerHTML = answr;
	
}