// JavaScript Document
/******** Auswertungsfunktion ********/
function auswerten() {
	var ergebnisse = [];
	var i = 0;
	var anzahl = 0;
	$(':checkbox').each(function() {
		if (this.checked)
		{
			//Die Checkbox wurde angehackt
   			anzahl++;
			ergebnisse[i]="x";
		}
		else
		{
			ergebnisse[i]="";
		}
		i++
	});
	if (anzahl>3||anzahl==0)
	{
		alert("Bitte wählen Sie zwischen 1 und 3 Attribute aus um fort zu fahren.");	
	}
	else
	{
		$("#example-widget-container").load("auswertung.html");
		window.setTimeout(werteaus(ergebnisse), 2000);
	}
}

function zurueck() {
	window.history.back();
}

function werteaus(ergebnisse) {
	var csv = 'Aachener Weihnachtsmarkt;http://www.aachenweihnachtsmarkt.de/images/termin_bild1.jpg;x;x;;x;;;;;http://www.aachenweihnachtsmarkt.de/;3\nAltstadt-Weihnachtsmarkt Hannover;https://www.hannover.de/var/storage/images/media/01-data-neu/bilder/hmtg/erlebnispakete/panorama/weihnachtsmarkt-altstadt/6957375-1-ger-DE/Weihnachtsmarkt-Altstadt_image_full.jpg;x;;x;;x;;x;x;https://www.hannover.de/Veranstaltungs%C2%ADkalender/M%C3%A4rkte/Weihnachtsmarkt-Hannover;5\nAugsburger Christkindlesmarkt;http://u.jimdo.com/www62/o/s1032d5ce732ad5af/img/i9054c45fc31b86b0/1374585106/std/image.jpg;x;;x;;x;x;x;;http://www.augsburgerchristkindlesmarkt.com/;5\nBerliner Weihnachtsmarkt am Schloss Charlottenburg;http://www.weihnachteninberlin.de/binaries/asset/image_assets/1035874/source/1321867206/667x500/;;;;x;x;;;;http://www.weihnachteninberlin.de/weihnachtsmaerkte/charlottenburg-wilmersdorf/971607-1323017-weihnachtsmarktschlosscharlottenburg.html;2\nBerliner Weihnachtszeit am Roten Rathaus;http://www.weihnachteninberlin.de/binaries/asset/image_assets/2221557/source/1354613660/667x500/;;;;;x;;;x;http://www.weihnachteninberlin.de/weihnachtsmaerkte/971790-955635-weihnachtsmarktamrotenrathaus.html;2\nDresdner Striezelmarkt;http://www.dresden.de/media/bilder/fotogalerien/striezelmarkt2012/dresdner-striezelmarkt-2012-kreuzkirche-pyramide-02.jpg.scaled/588x392.pm0.bgFFFFFF.jpg;x;;;x;;x;;x;http://www.dresden.de/de/05/02/veranstaltungen/04-Weihnachten-in-Dresden.php?shortcut=Striezelmarkt;4\nErfurter Weihnachtsmarkt;http://erfurt-touristinformation.de/cms/wp-content/gallery/weihnachtsmarkt/Weihnachtsmarkt-Erfurt002.jpg;;;;x;;x;x;;http://erfurt-touristinformation.de/cms/erfurt-tickets-veranstaltung/erfurter-weihnachtsmarkt.html;3\nFrankfurter Weihnachtsmarkt;http://www.frankfurt-tourismus.de/cms/export/system/galleries/tcf/img/bilderpool/Allgemein/5/20457.jpg;x;;;;;;;x;http://www.frankfurt-tourismus.de/cms/tourismussuite/de/messen_frankfurt_veranstaltungen/weihnachtsmarkt_weihnachten_frankfurt.html;2\nHistorischer Weihnachtsmarkt auf dem Hamburger Rathausmarkt;http://www.hamburg.de/contentblob/3156878/data/hamburger-weihnachtsmaerkte-in-der-innenstadt-33).jpg;;;;;x;x;;x;http://www.hamburg.de/weihnachtsmarkt/825530/weihnachtsmarkt-auf-dem-rathausmarkt.html;3\nLeipziger Weihnachtsmarkt;http://www.leipzigerweihnachtsmarkt.de/images/p1.jpg;x;;;;x;x;;x;http://www.leipzig.de/freizeit-kultur-und-tourismus/veranstaltungen-und-termine/eventsingle/calendar/2013/11/26/event/tx_cal_phpicalendar/Leipziger_Weihnachtsmarkt_2013/?tx_cal_controller[page_id]=139&tx_cal_controller[lastview]=view-list|page_id-139|offset-9&cHash=dab750dd4e1d1411f20137ab8a9fcce2;4\nMittelalter-Weihnachtsmarkt Berlin;http://www.firmaris.de/typo3temp/pics/54459669e6.jpg;x;;x;;;;x;;http://www.weihnachteninberlin.de/weihnachtsmaerkte/lichtenberg/1326334-1328116-weihnachtsmarktinkarlshorst.html;3\nMünchner Christkindlmarkt;http://s1.portal.muenchen.de/media/th/bg/winter_weihnachten/weihnachtsmaerkte/bildergalerien/christkindlmarkt_2007/img/01.jpg;x;;;;x;x;;x;http://www.muenchen.de/rathaus/Stadtverwaltung/Referat-fuer-Arbeit-und-Wirtschaft/Tourismusamt/Veranstaltungen/Christkindlmarkt.html;4\nNostalgischer Weihnachtsmarkt Berlin;http://bc03.rp-online.de/polopoly_fs/b-platz-7-nostalgischweihnachtsmarkt-berlb-p-1.510979.1318286478!/httpImage/3333253769.jpg;;;;;x;x;;x;http://www.berliner-weihnacht.de/;3\nNürnberger Christkindlesmarkt;http://images.nordbayern.de/polopoly_fs/1.2225773.1376919395!httpImage/2417402240.jpg_gen/derivatives/1000_320/2417402240.jpg;x;;;x;;;x;;http://www.christkindlesmarkt.de/;3\nWeihnachtsmarkt am Kölner Dom;http://www.koelnerweihnachtsmarkt.com/uploads/pics/Dom_Weihnachtsmarkt_web.jpg;;;;;x;;;x;http://www.koelnerweihnachtsmarkt.com/;2\nWeihnachtsmarkt auf der Wartburg;http://www.eisenach.de/typo3temp/pics/30f4727995.jpg;;;x;;;;x;;http://www.eisenach.de/Weihnachtsmarkt-2013.3315.0.html;2\nWeihnachtswelt Bremerhaven;http://www.bremerhaven.de/medien/287/%28c%29Helmut_Gross__E9320.125198.jpg;;x;;;x;x;;;http://www.bremerhaven.de/meer-erleben/veranstaltungen-tickets/veranstaltungen/weihnachtsmarkt-bremerhaven/weihnachtswelt-am-meer.25919.html;3'
;
	var allTextLines = [];
	allTextLines = csv.split(/\r\n|\n/);
	var fldHeading = [];
	var weihnachtsmärkte = new Array();
	alert("JA");
	//erstmal alles in Array schmeißen
	for (index = 0; index < allTextLines.length; ++index) {
		fldHeading = allTextLines[index].split(';');
		weihnachtsmärkte[index] = new Array();
		weihnachtsmärkte[index]["Name"] = fldHeading[0];
		weihnachtsmärkte[index]["Bild_Link"] = fldHeading[1];
		weihnachtsmärkte[index]["Traditionell"] = fldHeading[2];
		weihnachtsmärkte[index]["Modern"] = fldHeading[3];
		weihnachtsmärkte[index]["Gemütlich"] = fldHeading[4];
		weihnachtsmärkte[index]["Köstlich"] = fldHeading[5];
		weihnachtsmärkte[index]["Überraschend"] = fldHeading[6];
		weihnachtsmärkte[index]["Kinderfreundlich"] = fldHeading[7];
		weihnachtsmärkte[index]["Romantisch"] = fldHeading[8];
		weihnachtsmärkte[index]["Kunsthandwerk"] = fldHeading[9];
		weihnachtsmärkte[index]["Url"] = fldHeading[10];
		weihnachtsmärkte[index]["Anzahl"] = fldHeading[11];
		weihnachtsmärkte[index]["Bewertung"] = 0;
	}
	
	//Schaue welche Übereinstimmungen es gibt 
	for (j = 0; j <allTextLines.length; ++j) {
		if (ergebnisse[0]==weihnachtsmärkte[j]["Traditionell"] && ergebnisse[0]=='x')
		{
			weihnachtsmärkte[j]["Bewertung"] = weihnachtsmärkte[j]["Bewertung"] + 1;
		}
		if (ergebnisse[1]==weihnachtsmärkte[j]["Modern"] && ergebnisse[1]=='x')
		{
			weihnachtsmärkte[j]["Bewertung"] = weihnachtsmärkte[j]["Bewertung"] + 1;
		}
		if (ergebnisse[2]==weihnachtsmärkte[j]["Gemütlich"] && ergebnisse[2]=='x')
		{
			weihnachtsmärkte[j]["Bewertung"] = weihnachtsmärkte[j]["Bewertung"] + 1;
		}
		if (ergebnisse[3]==weihnachtsmärkte[j]["Köstlich"] && ergebnisse[3]=='x')
		{
			weihnachtsmärkte[j]["Bewertung"] = weihnachtsmärkte[j]["Bewertung"] + 1;
		}
		if (ergebnisse[4]==weihnachtsmärkte[j]["Überraschend"] && ergebnisse[4]=='x')
		{
			weihnachtsmärkte[j]["Bewertung"] = weihnachtsmärkte[j]["Bewertung"] + 1;
		}
		if (ergebnisse[5]==weihnachtsmärkte[j]["Kinderfreundlich"] && ergebnisse[5]=='x')
		{
			weihnachtsmärkte[j]["Bewertung"] = weihnachtsmärkte[j]["Bewertung"] + 1;
		}
		if (ergebnisse[6]==weihnachtsmärkte[j]["Romantisch"] && ergebnisse[6]=='x')
		{
			weihnachtsmärkte[j]["Bewertung"] = weihnachtsmärkte[j]["Bewertung"] + 1;
		}
		if (ergebnisse[7]==weihnachtsmärkte[j]["Kunsthandwerk"] && ergebnisse[7]=='x')
		{
			weihnachtsmärkte[j]["Bewertung"] = weihnachtsmärkte[j]["Bewertung"] + 1;
		}
	}
	
	//Beschreibe die Sortierung als Prozentzahl
	for (j = 0; j <allTextLines.length; ++j) {
		weihnachtsmärkte[j]["Bewertung"] = Math.floor(weihnachtsmärkte[j]["Bewertung"]/weihnachtsmärkte[j]["Anzahl"]*100) + "%";
	}
	
	//Sortieren
	weihnachtsmärkte.sort(function(a,b) {
	  // assuming distance is always a valid integer
	  return parseInt(a.Bewertung,10) - parseInt(b.Bewertung,10);
	
	});
	
	//Und wieder umkehren weil wir die andere Suchrichtung brauchen
	weihnachtsmärkte.reverse();

	//Zuweisen zu den verschiedenen Containern
	$(".Link_Platz1_N").html(weihnachtsmärkte[0]["Name"]);
	$(".Link_Platz2_N").html(weihnachtsmärkte[1]["Name"]);
	$(".Link_Platz3_N").html(weihnachtsmärkte[2]["Name"]);
	$(".Link_Platz4_N").html(weihnachtsmärkte[3]["Name"]);
	$(".Link_Platz5_N").html(weihnachtsmärkte[4]["Name"]);
	
	$(".Link_Platz1_N").attr('href',weihnachtsmärkte[0]["Url"]);
	$(".Link_Platz2_N").attr('href',weihnachtsmärkte[1]["Url"]);
	$(".Link_Platz3_N").attr('href',weihnachtsmärkte[2]["Url"]);
	$(".Link_Platz4_N").attr('href',weihnachtsmärkte[3]["Url"]);
	$(".Link_Platz5_N").attr('href',weihnachtsmärkte[4]["Url"]);	
	
	$(".Link_Platz1_I").attr('href',weihnachtsmärkte[0]["Url"]);
	$(".Link_Platz2_I").attr('href',weihnachtsmärkte[1]["Url"]);
	$(".Link_Platz3_I").attr('href',weihnachtsmärkte[2]["Url"]);
	$(".Link_Platz4_I").attr('href',weihnachtsmärkte[3]["Url"]);
	$(".Link_Platz5_I").attr('href',weihnachtsmärkte[4]["Url"]);
	
	$(".Bild_Platz1").attr('src',weihnachtsmärkte[0]["Bild_Link"]);
	$(".Bild_Platz2").attr('src',weihnachtsmärkte[1]["Bild_Link"]);
	$(".Bild_Platz3").attr('src',weihnachtsmärkte[2]["Bild_Link"]);
	$(".Bild_Platz4").attr('src',weihnachtsmärkte[3]["Bild_Link"]);
	$(".Bild_Platz5").attr('src',weihnachtsmärkte[4]["Bild_Link"]);
	
	$(".Prozente_Platz1").html(weihnachtsmärkte[0]["Bewertung"]);
	$(".Prozente_Platz2").html(weihnachtsmärkte[1]["Bewertung"]);
	$(".Prozente_Platz3").html(weihnachtsmärkte[2]["Bewertung"]);
	$(".Prozente_Platz4").html(weihnachtsmärkte[3]["Bewertung"]);
	$(".Prozente_Platz5").html(weihnachtsmärkte[4]["Bewertung"]);
}

