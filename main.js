function magnitude(){
	var magnitudeInput = document.getElementById('enterMagnitude').value;

	if(magnitudeInput>=8){
		window.alert('Catastrophic');
	}

	else if(magnitudeInput>=7 && magnitudeInput<=7.9){
		window.alert('Major damage');
	}

	else if(magnitudeInput>=6.1 && magnitudeInput<=6.9){
		window.alert('Damage likely');
	}

	else if(magnitudeInput>=5.5 && magnitudeInput<=6.0){
		window.alert('Slight damage');
	}

	else if(magnitudeInput>=2.5 && magnitudeInput<=5.4){
		window.alert('Rare damage');
	}

	else {
		window.alert('Not always felt');
	}

}