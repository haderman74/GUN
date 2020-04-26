function calc() 
	{
	//Kosten für Platzmiete
		var tmpKostenPlatzmiete = 0;
		tmpKostenPlatzmiete = parseFloat(getRadioCheckedValue('Platzmiete'));
		document.getElementById('KostenPlatzmiete').value = Runden2Dezimal(tmpKostenPlatzmiete);
	//Kosten für Strom
		var tmpKostenStrom = 0;
		tmpKostenStrom = getRadioCheckedValue('Strompauschale') * 40;
		document.getElementById('KostenStrom').value = Runden2Dezimal(tmpKostenStrom);
	//Kosten für Transparent
		var tmpKostenTransparent = 0;
		tmpKostenTransparent = document.getElementById('LaufmeterTransparent').value * 10;
		document.getElementById('KostenTransparent').value = Runden2Dezimal(tmpKostenTransparent);
	//Kosten für Werbeeinschaltung
		var tmpEinschaltung = 0;
		var tmpWerbeabgabe = 0;
		var tmpKostenWerbeeinschaltung = 0;
		var tmpWerbekostenpflichtbeitrag = 0;
		var tmpNachlassTransparent = 0;
		tmpEinschaltung = parseFloat(getRadioCheckedValue('Werbeeinschaltung'))/100;
		tmpEinschaltungWert = parseFloat(getRadioCheckedValue('Werbeeinschaltung'));
		tmpWerbeabgabe = parseFloat(tmpEinschaltung * 5 / 100);
		tmpKostenWerbeeinschaltung = tmpWerbeabgabe + tmpEinschaltung;
		tmpWerbeabgabeMwSt = parseFloat(tmpKostenWerbeeinschaltung * 20 / 100);
		tmpKostenWerbeeinschaltungMwSt = tmpWerbeabgabeMwSt + tmpKostenWerbeeinschaltung;
		document.getElementById('Einschaltung').value = Runden2Dezimal(tmpEinschaltung);
		document.getElementById('Werbeabgabe').value = Runden2Dezimal(tmpWerbeabgabe);
		document.getElementById('KostenWerbeeinschaltung').value = Runden2Dezimal(tmpKostenWerbeeinschaltung);
		document.getElementById('MwSt').value = Runden2Dezimal(tmpWerbeabgabeMwSt);
		document.getElementById('KostenWerbeeinschaltungMwSt').value = Runden2Dezimal(tmpKostenWerbeeinschaltungMwSt);
		if (tmpEinschaltung == 0)
			{
			tmpWerbekostenpflichtbeitrag = 70;
			document.getElementById('Werbekostenpflichtbeitrag').value = Runden2Dezimal(tmpWerbekostenpflichtbeitrag);
			tmpNachlassTransparent = 0;
			document.getElementById('NachlassTransparent').value = Runden2Dezimal(tmpNachlassTransparent);
			}
		else
			{
			tmpWerbekostenpflichtbeitrag = 0;
			document.getElementById('Werbekostenpflichtbeitrag').value = Runden2Dezimal(tmpWerbekostenpflichtbeitrag);
			if (tmpKostenTransparent > 50)
				{
				tmpNachlassTransparent = -50;
				document.getElementById('NachlassTransparent').value = Runden2Dezimal(tmpNachlassTransparent);
				}
			else
				{
				tmpNachlassTransparent = tmpKostenTransparent * -1;
				document.getElementById('NachlassTransparent').value = Runden2Dezimal(tmpNachlassTransparent);	
				}
			//Andruck der Art der Werbeeinschaltung
			if (tmpEinschaltungWert == 15000)
				{
				tmpEinschaltungArt = "1/16 Seite";
				document.getElementById('EinschaltungArt').value = tmpEinschaltungArt;
				}
			else if (tmpEinschaltungWert == 24190)
				{
				tmpEinschaltungArt = "1/8 Seite";
				document.getElementById('EinschaltungArt').value = tmpEinschaltungArt;
				}
			else if (tmpEinschaltungWert == 48380)
				{
				tmpEinschaltungArt = "1/4 Seite";
				document.getElementById('EinschaltungArt').value = tmpEinschaltungArt;
				}
			else if (tmpEinschaltungWert == 96770)
				{
				tmpEinschaltungArt = "1/2 Seite";
				document.getElementById('EinschaltungArt').value = tmpEinschaltungArt;
				}
			else if (tmpEinschaltungWert == 193540)
				{
				tmpEinschaltungArt = "1 Seite";
				document.getElementById('EinschaltungArt').value = tmpEinschaltungArt;
				}
			}
	//Gesamtkosten ermitteln
		var tmpKostenGesamt = 0;
		tmpKostenGesamt = tmpKostenPlatzmiete + tmpKostenStrom + tmpKostenTransparent + tmpWerbekostenpflichtbeitrag + tmpNachlassTransparent;
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