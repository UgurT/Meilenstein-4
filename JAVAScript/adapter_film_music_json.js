function adapter(){
attributeFilm();
attributeMusic();
document.getElementById('rightside');
}

function switchTableFilm() {
    document.getElementById('leftside');
    document.getElementById('rightside');
    document.getElementById('tableMusic');
    document.getElementById('tableFilm');
}
function switchTableMusic() {
    document.getElementById('leftside');
    document.getElementById('rightside');
    document.getElementById('tableMusic');
    document.getElementById('tableFilm');
}

function attributeFilm(){
    var filme = filme["data"];
    var myTable = document.getElementById('tableFilm');
    // add all the table heads first
    addAttribute(filme,myTable);
    // get all the keys
    var attribute = getHeads(filme);
    // loop through the list and add the value of keys
    for (var k=0;k<filme.length;k++){
        var tr= document.createElement('tr').cloneNode(false);
        // loop through the keys
        for(var i = 0;	i<attribute.length;i++){
            var td = document.createElement('td').cloneNode(false);
            if(i==1){
                td.className="title";
            }
            // get the value of the key and add them
            td.appendChild(document.createTextNode(filme[k][heads[i]]));
            tr.appendChild(td);
        }
        myTable.appendChild(tr);
    }
}
function attributeMusic(){
    var alben = music["data"];
    // get table element from html
    var myTable = document.getElementById('tableMusic');
    // add all the table heads first
    addAttribute(alben,myTable);
    // get all the keys
    var attribute = getHeads(alben);
    // loop through the list and add the value of keys
    for (var k=0;k<alben.length;k++){
        var tr= document.createElement('tr').cloneNode(false);
        // loop through the keys
        for(var i = 0;	i<attribute.length;i++){
            var td = document.createElement('td').cloneNode(false);
            // get the value of the key and add themi
            if(i==1){
                td.className="title";
            }
            td.appendChild(document.createTextNode(alben[k][heads[i]]));
            tr.appendChild(td);
        }
        myTable.appendChild(tr);
    }
    myTable.style.display = "none";

    // musictable should be invisible at first
}

// create the table heads and append them to the table
function addAttribute(data,table){
    var tr= document.createElement('tr').cloneNode(false);
    var heads = getHeads(data);
    for(var i = 0;	i<heads.length;i++){
        var th = document.createElement('th').cloneNode(false);
        th.appendChild(document.createTextNode(heads[i]));
        tr.appendChild(th);
    }
    table.appendChild(tr);
}
// get all the property keys from JSON data
function getAttribute(data){
    // heads are going to be returned as array
    var heads = new Array();
    // look into one entity in data and collect heads
    var item= data[0];
    for(var key in item){
        heads.push(key);
    }
    return heads;
}

/*
function filmTabelle(){
				
                favfilm.open("GET", "film_json.js", false);
                favfilm.send(null);
				// film data
				var filmData = JS.parse(favfilm.responseText);
                jsFilm = filmData.Filmfavoriten;
                filmArray = jsonFilm[0];
                // tables that should be filled
                var tableFilm = document.getElementById("tableFilm");
                // create film table
                for(var i = 1; i <= Object.keys(filmArray).length; i++) {
                    // get current film
                    var currentFilm = filmArray[i];
                    // get data for film
                    var title = currentFilm['Filmtitel'];
                    var regie = currentFilm['Regie'];
                    var autor = currentFilm['Drehbuch']
                    var year = currentFilm['Erscheinungsjahr']
                    var genre = currentFilm['Genre'];
                    // add table row with film data
                    var row = tableFilm.insertRow(i);
                    // add cells for data
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                    // fill data
                    cell1.innerHTML = title;
                    cell2.innerHTML = regie;
                    cell3.innerHTML = autor;
                    cell4.innerHTML = year;
                    cell5.innerHTML = genre;
                }
function musikTabelle(){

				favmusic.open("GET", "music_json.js", false);
                favmusic.send(null);
				// music data
				var musicData = JS.parse(favmusic.responseText);
                jsMusic = musicData.Musikfavoriten;
                songArray = jsonMusic[0];
				// tables that should be filled
				var tableMusic = document.getElementById("tableMusic");
				// create music table
                for(var i = 1; i <= Object.keys(songArray).length; i++) {
                    // get current song
                    var currentSong = songArray[i];
                    // get data for song
                    var interpreter = currentSong['interpreter'];
                    var title = currentSong['title'];
                    var year = currentSong['year'];
                    var genre = currentSong['genre'];
                    // add table row with song data
                    var row = tableMusic.insertRow(i);
                    // add cells for data
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    // fill data
                    cell1.innerHTML = interpreter;
                    cell2.innerHTML = title;
                    cell3.innerHTML = year;
                    cell4.innerHTML = genre;
                }

    */