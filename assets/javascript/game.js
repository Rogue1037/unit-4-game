$(document).ready(function(){
    var characters = {
        "ackbar": {
            name: "Ackbar",
            health: 90,
            attack: 6,
            imageUrl : "assets/images/ackbar.jpg",
            counter : 10,
            special: 24

        },
        "phatTrooper": {
            name: "PhatTrooper",
            health: 100,
            attack: 4,
            imageUrl: "assets/images/phattrooper.jpg",
            counter : 12,
            special: 36
        },
        "chewie": {
            name: "Chewie",
            health: 110,
            attack: 10,
            imageUrl: "assets/images/cartoon_Chewie.jpg",
            counter: 14,
            special: 46,
        },
        "jediATAT": {
            name: "JediATAT",
            health: 120,
            attack: 14,
            imageUrl: "assets/images/jedi_ATAT.gif",
            counter: 16,
            special: 50

        }
    };
    console.log(characters);

    var characterOne = function(character, renderArea) {
        var charDiv = $("<div class='character' data-name='" + character.name + "'>");
        var charName = $("<div class='character-name'>").text(character.name);
        var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);
        var charHealth = $("div class='character-health'>").text(character.health);
        charDiv.append(charName).append(charImage).append(charHealth);
        $(renderArea).append(charDiv);
        

    }
    console.log(characterOne);

    var renderCharacters = function(charObj, areaRender) {
        if (areaRender === ".characterSelection"){
            $(areaRender).empty();
            for (var key in charObj) {
                if(charObj.hasOwnProperty(key)) {
                    renderOne(charObj[key], areaRender);
                }

            }
        }
    }
renderCharacters(characters, ".characterSelection");
   
});
















