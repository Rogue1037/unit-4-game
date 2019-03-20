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

    

   

    $('<div/>', {
        id: 'ackbar',
        class: name,  
        title: 'Ackbar'
    }).appendTo('chars');

    console.log($);
   
});
















