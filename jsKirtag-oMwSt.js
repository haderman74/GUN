function calc() 
	{
	var tmpKostenPlatzmiete = 0;
	var tmpKostenStrom = 0;
	var tmpKostenGesamt = 0;
	var tmpStandlaenge = document.getElementById("Standlaenge").value
	if (tmpStandlaenge < 6)
		{
		tmpKostenPlatzmiete = getRadioCheckedValue('Dauer') * 30;
		document.getElementById('KostenPlatzmiete').value = Runden2Dezimal(tmpKostenPlatzmiete);
		}
	else
		{
		tmpKostenPlatzmiete = getRadioCheckedValue("Dauer") * tmpStandlaenge * 5;
		document.getElementById('KostenPlatzmiete').value = Runden2Dezimal(tmpKostenPlatzmiete);
		}
	//Gesamtkosten ermitteln
		var tmpKostenGesamt = 0;
		tmpKostenGesamt = tmpKostenPlatzmiete;
		document.getElementById('KostenGesamt').value = Runden2Dezimal(tmpKostenGesamt);
	}
function getRadioCheckedValue(radio_name) {
	var oRadio = document.forms[0].elements[radio_name];
	for (var i = 0; i < oRadio.length; i++) {
		if (oRadio[i].checked) {
			return oRadio[i].value;
		}
	}
	return '';
}
function Runden2Dezimal(x) { 
	Ergebnis = Math.round(x * 100) / 100 ; 
	return Ergebnis; 
}