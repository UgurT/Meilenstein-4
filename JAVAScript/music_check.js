/**
 * Created by Ugur on 17.11.2014.
 */
function checkMusicFormular(){

    var Fehlermeldung = "Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben";
    var allZeichen="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzäüöÄÜÖß0123456789";
    var buchstaben="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzäüöÄÜÖß ";
    var zahlen="0123456789";

    //Überprüfung von regie und drehbuch in film.html
    if (document.Formular.interpreter.value == "") {
        alert(Fehlermeldung);
        document.Formular.interpreter.focus();
		document.Formular.interpreter.style.border ="2px solid red";
        return false;
    }
    for (var i = 0; i < document.Formular.interpreter.value.length; i++) {
        if (buchstaben.indexOf(document.Formular.interpreter.value.charAt(i)) == -1) {
            alert(Fehlermeldung);
            document.Formular.interpreter.focus();
			document.Formular.interpreter.style.border ="2px solid red";
            return false;
        }
    }
	//Überprüfung von filmtitel in film.html
    if (document.Formular.albumtitel.value == "") {
        alert(Fehlermeldung);
        document.Formular.albumtitel.focus();
		document.Formular.albumtitel.style.border ="2px solid red";
        return false;
    }
    for (var i=0; i<document.Formular.albumtitel.value.length; i++) {
        if (allZeichen.indexOf(document.Formular.albumtitel.value.charAt(i)) == -1) {
            alert(Fehlermeldung);
            document.Formular.albumtitel.focus();
			document.Formular.albumtitel.style.border ="2px solid red";
            return false;
        }
    }
    //Überprüfung schauspieler in film.html und music.html
    for (var i=0; i<document.Formular.songs.value.length; i++) {
        if (buchstaben.indexOf(document.Formular.songs.value.charAt(i)) == -1) {
            alert(Fehlermeldung);
            document.Formular.songs.focus();
			document.Formular.songs.style.border ="2px solid red";
            return false;
        }
    }
    // Überprüfung von erscheinungsjahr
    if (document.Formular.musicerscheinungsjahr.value == "") {
        alert(Fehlermeldung);
        document.Formular.musicerscheinungsjahr.focus();
		document.Formular.musicerscheinungsjahr.style.border ="2px solid red";
        return false;
    }
    if (document.Formular.musicerscheinungsjahr.value > 2014) {
        alert(Fehlermeldung);
        document.Formular.musicerscheinungsjahr.focus();
		document.Formular.musicerscheinungsjahr.style.border ="2px solid red";
        return false;
    }
    for (var i=0; i<document.Formular.musicerscheinungsjahr.value.length; i++) {
        if (zahlen.indexOf(document.Formular.musicerscheinungsjahr.value.charAt(i)) == -1) {
            alert(Fehlermeldung);
            document.Formular.musicerscheinungsjahr.focus();
			document.Formular.musicerscheinungsjahr.style.border ="2px solid red";
            return false;
        }
    }
}