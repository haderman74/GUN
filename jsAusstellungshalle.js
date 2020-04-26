function calc() 
	{
	//Kosten für Platzmiete
	var tmpKostenPlatzmiete = 0;
	var tmpFlaechePlatzmiete = 0;
	tmpFlaechePlatzmiete = getRadioCheckedValue('Standtiefe') * $('Standlaenge').value;
	if (tmpFlaechePlatzmiete < 21)
		{
		tmpKostenPlatzmiete = tmpFlaechePlatzmiete * 32;
		$('KostenPlatzmiete').value = Runden2Dezimal(tmpKostenPlatzmiete);
		}
	else
		{
		tmpKostenPlatzmiete = tmpFlaechePlatzmiete * 28;
		$('KostenPlatzmiete').value = Runden2Dezimal(tmpKostenPlatzmiete);
		}
	//Kosten für Strom
		var tmpKostenStrom = 0;
		tmpKostenStrom = getRadioCheckedValue('Strompauschale') * 40;
		$('KostenStrom').value = Runden2Dezimal(tmpKostenStrom);
	//Kosten für Transparent
		var tmpKostenTransparent = 0;
		tmpKostenTransparent = $('LaufmeterTransparent').value * 10;
		$('KostenTransparent').value = Runden2Dezimal(tmpKostenTransparent);
	//Kosten für Werbeeinschaltung
		var tmpEinschaltung = 0;
		var tmpWerbeabgabe = 0;
		var tmpKostenWerbeeinschaltung = 0;
		var tmpWerbekostenpflichtbeitrag = 0;
		var tmpNachlassTransparent = 0;
		tmpEinschaltung = parseFloat(getRadioCheckedValue('Werbeeinschaltung'));
		tmpWerbeabgabe = parseFloat(tmpEinschaltung * 5 / 100);
		tmpKostenWerbeeinschaltung = tmpWerbeabgabe + tmpEinschaltung;
		$('Einschaltung').value = Runden2Dezimal(tmpEinschaltung);
		$('Werbeabgabe').value = Runden2Dezimal(tmpWerbeabgabe);
		$('KostenWerbeeinschaltung').value = Runden2Dezimal(tmpKostenWerbeeinschaltung);
		if (tmpEinschaltung == 0)
			{
			tmpWerbekostenpflichtbeitrag = 60;
			$('Werbekostenpflichtbeitrag').value = Runden2Dezimal(tmpWerbekostenpflichtbeitrag);
			tmpNachlassTransparent = 0;
			$('NachlassTransparent').value = Runden2Dezimal(tmpNachlassTransparent);
			}
		else
			{
			tmpWerbekostenpflichtbeitrag = 0;
			$('Werbekostenpflichtbeitrag').value = Runden2Dezimal(tmpWerbekostenpflichtbeitrag);
			if (tmpKostenTransparent > 50)
				{
				tmpNachlassTransparent = -50;
				$('NachlassTransparent').value = Runden2Dezimal(tmpNachlassTransparent);
				}
			else
				{
				tmpNachlassTransparent = tmpKostenTransparent * -1;
				$('NachlassTransparent').value = Runden2Dezimal(tmpNachlassTransparent);	
				}
			}
	//Gesamtkosten ermitteln
		var tmpKostenGesamtohne = 0;
		var tmpMehrwertsteuer = 0;
		var tmpKostenGesamt = 0;
		tmpKostenGesamtohne = tmpKostenPlatzmiete + tmpKostenStrom + tmpKostenTransparent + tmpWerbekostenpflichtbeitrag + tmpNachlassTransparent + tmpKostenWerbeeinschaltung;
		tmpMehrwertsteuer = tmpKostenGesamtohne * 20 / 100;
		tmpKostenGesamt = tmpKostenGesamtohne + tmpMehrwertsteuer;
		$('KostenGesamtohne').value = Runden2Dezimal(tmpKostenGesamtohne);
		$('Mehrwertsteuer').value = Runden2Dezimal(tmpMehrwertsteuer);
		$('KostenGesamt').value = Runden2Dezimal(tmpKostenGesamt);
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