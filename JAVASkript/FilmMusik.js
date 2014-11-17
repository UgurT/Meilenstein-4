	function checkFormular(){
	
			var Fehlermeldung = "Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben";
			var allZeichen="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var buchstaben="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            var zahlen="0123456789";

            //Überprüfung von filmtitel in film.html
            for (var i=0; i<document.Formular.filmtitel.value.length; i++) {
				if (allZeichen.indexOf(document.Formular.filmtitel.value.charAt(i)) == -1) {
					alert(Fehlermeldung);
					document.Formular.filmtitel.focus();
					return false;
				}
			}
			//Überprüfung von albumititel in music.htmlt
			for (var i=0; i<document.Formular.albumtitel.value.length; i++) {
				if (allZeichen.indexOf(document.Formular.albumtitel.value.charAt(i)) == -1) {
					alert(Fehlermeldung);
					document.Formular.albumtitel.focus();
					return false;
				}
			}
			//Überprüfung von Interpreter in music.html
			for (var i=0; i<document.Formular.interpreter.value.length; i++) {
				if (buchstaben.indexOf(document.Formular.interpreter.value.charAt(i)) == -1) {
					alert(Fehlermeldung);
					document.Formular.interpreter.focus();
					return false;
				}
			}
			//Überprüfung von regie und drehbuch in film.html
			for (var i=0; i<document.Formular.regie.value.length; i++) {
				if (buchstaben.indexOf(document.Formular.regie.value.charAt(i)) == -1) {
					alert(Fehlermeldung);
					document.Formular.regie.focus();
					return false;
				}
			}
			for (var i=0; i<document.Formular.drehbuch.value.length; i++) {
				if (buchstaben.indexOf(document.Formular.drehbuch.value.charAt(i)) == -1) {
					alert(Fehlermeldung);
					document.Formular.drehbuch.focus();
					return false;
				}
			}
            // Überprüfung von erscheinungsjahr
			for (var i=0; i<document.Formular.musicerscheinungsjahr.value.length; i++) {
				if (zahlen.indexOf(document.Formular.musicerscheinungsjahr.value.charAt(i)) == -1) {
					alert(Fehlermeldung);
					document.Formular.musicerscheinungsjahr.focus();
					return false;
				}
			}
			//Überprüfung von songs und schauspieler in film.html und music.html
			for (var i=0; i<document.Formular.schauspieler.value.length; i++) {
				if (buchstaben.indexOf(document.Formular.schauspieler.value.charAt(i)) == -1) {
					alert(Fehlermeldung);
					document.Formular.schauspieler.focus();
					return false;
				}
			}
			for (var i=0; i<document.Formular.songs.value.length; i++) {
				if (buchstaben.indexOf(document.Formular.songs.value.charAt(i)) == -1) {
					alert(Fehlermeldung);
					document.Formular.songs.focus();
					return false;
				}
			}
			
	}