// JavaScript Document
/******** Auswertungsfunktion ********/
function auswerten() {
	$("#example-widget-container").load("auswertung.html");
	$(document).ready(function() { 		
		$(".Link_Platz1_N").html("Testweihnachtsmarkt");
	});
	zurueck();
	
}

function zurueck() {
	var csv = 'Aachener Weihnachtsmarkt;;x;x;;x;;;;;http://www.aachenweihnachtsmarkt.de/\nAltstadt-Weihnachtsmarkt Hannover;;x;;x;;x;;x;x;https://www.hannover.de/Veranstaltungs%C2%ADkalender/M%C3%A4rkte/Weihnachtsmarkt-Hannover\nAugsburger Christkindlesmarkt;;x;;x;;x;x;x;;http://www.augsburgerchristkindlesmarkt.com/\n';
	var allTextLines = [];
	allTextLines = csv.split(/\r\n|\n/);
	var fldHeading = [];
	var weihnachtsmärkte = new Array();
	
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
		weihnachtsmärkte[index]["Anzahl"] = 3;
		weihnachtsmärkte[index]["Bewertung"] = "";
	}



	$(".Link_Platz1_N").html(weihnachtsmärkte[0]["Name"]);
	$(".Link_Platz2_N").html(weihnachtsmärkte[1]["Name"]);
	$(".Link_Platz3_N").html(weihnachtsmärkte[2]["Name"]);
	$(".Link_Platz4_N").html("Testweihnachtsmarkt");
	$(".Link_Platz5_N").html("Testweihnachtsmarkt");
	$(".Link_Platz1_N").attr('href',weihnachtsmärkte[0]["Url"]);
	$(".Link_Platz2_N").attr('href',"http://www.google.de");
	$(".Link_Platz3_N").attr('href',"http://www.google.de");
	$(".Link_Platz4_N").attr('href',"http://www.google.de");
	$(".Link_Platz5_N").attr('href',"http://www.google.de");	
	$(".Link_Platz1_I").attr('href',weihnachtsmärkte[0]["Url"]);
	$(".Link_Platz2_I").attr('href',"www.google.de");
	$(".Link_Platz3_I").attr('href',"www.google.de");
	$(".Link_Platz4_I").attr('href',"www.google.de");
	$(".Link_Platz5_I").attr('href',"www.google.de");
	$(".Bild_Platz1").attr('src',weihnachtsmärkte[0]["Bild_Link"]);
	$(".Prozente_Platz1").html(weihnachtsmärkte[0]["Bewertung"]);
	/*window.history.back();*/
}

