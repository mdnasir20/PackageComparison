function checkAge() {
		
		var age = Number(document.getElementById("age").value);
		
		if (age < 18){
			document.getElementById("answer").innerHTML= "Adolescents are not allow to play."
		}
			else{
			document.getElementById("answer").innerHTML= "Old enough to play"
			}
		
}