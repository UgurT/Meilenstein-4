/**
 * Created by Ugur on 17.11.2014.
 */
function checkFilmFormular(){

    var Fehlermeldung = "Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben";
    var allZeichen="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzäüöÄÜÖß0123456789";
    var buchstaben="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzäüöÄÜÖß ";
    var zahlen="0123456789";

    //Überprüfung von filmtitel in film.html
    if (document.Formular.filmtitel.value == "") {
        alert(Fehlermeldung);
        document.Formular.filmtitel.focus();
		document.Formular.filmtitel.style.border ="2px solid red";
		return false;
    }
    for (var i=0; i<document.Formular.filmtitel.value.length; i++) {
        if (allZeichen.indexOf(document.Formular.filmtitel.value.charAt(i)) == -1) {
            alert(Fehlermeldung);
            document.Formular.filmtitel.focus();
			document.Formular.filmtitel.style.border ="2px solid red";
            return false;
        }
    }
    //Überprüfung von regie und drehbuch in film.html
    if (document.Formular.regie.value == "") {
        alert(Fehlermeldung);
        document.Formular.regie.focus();
		document.Formular.regie.style.border ="2px solid red";
        return false;
    }
    var pattern = /\ /g;
    var result = pattern.test(document.Formular.regie.value );
    if (result == false) {
        alert(Fehlermeldung);
        document.Formular.regie.focus();
				document.Formular.regie.style.border ="2px solid red";

        return false;
    }

    for (var i = 0; i < document.Formular.regie.value.length; i++) {
        if (buchstaben.indexOf(document.Formular.regie.value.charAt(i)) == -1) {
            alert(Fehlermeldung);
            document.Formular.regie.focus();
			document.Formular.regie.style.border ="2px solid red";
            return false;
        }
    }
    if (document.Formular.drehbuch.value == "") {
        alert(Fehlermeldung);
        document.Formular.drehbuch.focus();
		document.Formular.drehbuch.style.border ="2px solid red";
        return false;
    }
    var pattern = /\ /g;
    var result = pattern.test(document.Formular.drehbuch.value );
    if (result == false) {
        alert(Fehlermeldung);
        document.Formular.drehbuch.focus();
		document.Formular.drehbuch.style.border ="2px solid red";
        return false;
    }
    for (var i=0; i<document.Formular.drehbuch.value.length; i++) {
        if (buchstaben.indexOf(document.Formular.drehbuch.value.charAt(i)) == -1) {
            alert(Fehlermeldung);
            document.Formular.drehbuch.focus();
				document.Formular.drehbuch.style.border ="2px solid red";
            return false;
        }
    }
    //Überprüfung schauspieler in film.html und music.html
    for (var i=0; i<document.Formular.schauspieler.value.length; i++) {
        if (buchstaben.indexOf(document.Formular.schauspieler.value.charAt(i)) == -1) {
            alert(Fehlermeldung);
            document.Formular.schauspieler.focus();
			document.Formular.schauspieler.style.border ="2px solid red";
            return false;
        }
    }
    // Überprüfung von erscheinungsjahr
    if (document.Formular.filmerscheinungsjahr.value == "") {
        alert(Fehlermeldung);
        document.Formular.filmerscheinungsjahr.focus();
		document.Formular.filmerscheinungsjahr.style.border ="2px solid red";
        return false;
    }
    if (document.Formular.filmerscheinungsjahr.value > 2014) {
        alert(Fehlermeldung);
        document.Formular.filmerscheinungsjahr.focus();
		document.Formular.filmerscheinungsjahr.style.border ="2px solid red";
        return false;
    }
    for (var i=0; i<document.Formular.filmerscheinungsjahr.value.length; i++) {
        if (zahlen.indexOf(document.Formular.filmerscheinungsjahr.value.charAt(i)) == -1) {
            alert(Fehlermeldung);
            document.Formular.filmerscheinungsjahr.focus();
			document.Formular.filmerscheinungsjahr.style.border ="2px solid red";
            return false;
        }
    }
}