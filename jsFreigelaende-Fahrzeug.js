function calc() 
	{
	//Kosten f�r Platzmiete
		var tmpKostenPlatzmiete = 1600;
		$('KostenPlatzmiete').value = Runden2Dezimal(tmpKostenPlatzmiete);
	//Kosten f�r Strom
		var tmpKostenStrom = 0;
		tmpKostenStrom = getRadioCheckedValue('Strompauschale') * 40;
		$('KostenStrom').value = Runden2Dezimal(tmpKostenStrom);
	//Kosten f�r Wasser
		var tmpKostenWasser = 0;
		tmpKostenWasser = getRadioCheckedValue('Wasserpauschale') * 30;
		$('KostenWasser').value = Runden2Dezimal(tmpKostenWasser);
	//Kosten f�r Zelt f�r B�hne
		var tmpKostenZelt = 0;
		tmpKostenZelt = $('ZeltfuerBuehne').value * 280;
		$('KostenZelt').value = Runden2Dezimal(tmpKostenZelt);
	//Kosten f�r Teppich
		var tmpKostenTeppich = 0;
		tmpKostenTeppich = $('Teppich').value * 280;
		$('KostenTeppich').value = Runden2Dezimal(tmpKostenTeppich);
	//Kosten f�r Transparentbefestigung
		var tmpKostenTransparentbefestigung = 0;
		tmpKostenTransparentbefestigung = $('Transparentbefestigung').value * 180;
		$('KostenTransparentbefestigung').value = Runden2Dezimal(tmpKostenTransparentbefestigung);
	//Kosten f�r Transparentbefestigung inkl. Beleuchtung
		var tmpKostenTransparentbefestigungBeleuchtung = 0;
		tmpKostenTransparentbefestigungBeleuchtung = $('TransparentbefestigungBeleuchtung').value * 280;
		$('KostenTransparentbefestigungBeleuchtung').value = Runden2Dezimal(tmpKostenTransparentbefestigungBeleuchtung);
	//Kosten f�r Transparent
		var tmpKostenTransparent = 0;
		tmpKostenTransparent = $('LaufmeterTransparent').value * 10;
		$('KostenTransparent').value = Runden2Dezimal(tmpKostenTransparent);
	//Kosten f�r Werbeeinschaltung
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
		tmpKostenGesamtohne = tmpKostenPlatzmiete + tmpKostenStrom + tmpKostenWasser + tmpKostenZelt + tmpKostenTeppich + tmpKostenTransparentbefestigung + tmpKostenTransparentbefestigungBeleuchtung + tmpKostenTransparent + tmpWerbekostenpflichtbeitrag + tmpNachlassTransparent + tmpKostenWerbeeinschaltung;
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