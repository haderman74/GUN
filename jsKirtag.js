function calc() 
	{
	var tmpKostenPlatzmiete = 0;
	var tmpKostenStrom = 0;
	var tmpKostenGesamt = 0;
	if ($('Standlaenge').value < 6)
		{
		tmpKostenPlatzmiete = getRadioCheckedValue('Dauer') * 35;
		$('KostenPlatzmiete').value = Runden2Dezimal(tmpKostenPlatzmiete);
		}
	else
		{
		tmpKostenPlatzmiete = getRadioCheckedValue("Dauer") * $("Standlaenge").value * 6;
		$('KostenPlatzmiete').value = Runden2Dezimal(tmpKostenPlatzmiete);
		}
	tmpKostenStrom = getRadioCheckedValue('Strompauschale') * 40;
	$('KostenStrom').value = Runden2Dezimal(tmpKostenStrom);
	$('KostenGesamt').value = Runden2Dezimal(tmpKostenPlatzmiete) + Runden2Dezimal(tmpKostenStrom);
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
