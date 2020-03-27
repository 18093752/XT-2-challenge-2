var datumTijd = new Date();
var uren = datumTijd.getHours();
var minuten = datumTijd.getMinutes();
/* Boolean versnelt de tijd. Als de var true is, wordt ie versnelt */
var snel = false;

function update() {
	if(snel){
		minuten++;
		if(minuten > 59){
			minuten = 0;
			uren++			
		}
		if(uren > 23){
			uren = 0;
		}
	}
	else{
		datumTijd = new Date();
		uren = datumTijd.getHours();
		minuten = datumTijd.getMinutes();
	}


document.getElementById('tijdstip').innerHTML = String(uren).padStart(2,'0') + ':' + String(minuten).padStart(2,'0');

// nacht
if(uren < 6){
	document.getElementById('container').className ='kleurnacht';
	document.getElementById('stilstaande-cirkel').className ='kleurnacht';
	document.getElementById('bewegende-cirkel').className ='kleurnacht'; 
}

// ochtend
else if(uren >=6 && uren < 12){
	document.getElementById('container').className ='kleurochtend'; 
	document.getElementById('stilstaande-cirkel').className ='kleurochtend';
	document.getElementById('bewegende-cirkel').className ='kleurochtend'; 
}

// middag
else if(uren >= 12 && uren < 18){
	document.getElementById('container').className ='kleurmiddag'; 
	document.getElementById('stilstaande-cirkel').className ='kleurmiddag';
	document.getElementById('bewegende-cirkel').className ='kleurmiddag'; 
}				

// avond
else {
	document.getElementById('container').className ='kleuravond'; 
	document.getElementById('stilstaande-cirkel').className ='kleuravond';
	document.getElementById('bewegende-cirkel').className ='kleuravond'; 	
}

}

function start() {
	update();
	var interval = setInterval(update, 1000);
}

function versnelTijd(){
	snel = document.getElementById('checkbox').checked;
	console.log(snel);
}
