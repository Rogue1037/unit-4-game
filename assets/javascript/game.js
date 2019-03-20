$document.ready(function(){

var options = {
    phatTrooper: {
        health: 100,
        attack: 4,
        counter: 12,
        specialAttack: 24,
    },

    ackbar : {
        health: 90,
        attack: 6,
        counter: 10,
        specialAttack: 32,
    },

    chewie : {
        health: 110,
        attack: 10,
        counter: 12,
        specialAttack: 42,
    },

    jediATAT : {
        health: 120,
        attack: 8,
        counter: 14,
        specialAttack: 50,

    },

}

var userCharacter;
var enemyCharacter;
var player;
var computer;
var enemyCount;
var playerHP;
var enemyHP;
var playerAttack;
var playerName;
var opponetName;
var arr;
var element;


function startGame(){
    userCharacter = false;
    enemyCharacter = false;
    player = "";
    computer = "";
    enemyCount = 3;
    element = document.getElementsByClassName("choice");
    arr = jQuery.makeArray(element);
    $(".charChoice").css({"background" : "crimson"});
    $("ackbar").text(options.ackbar.health);
    $("phatTrooper").text(options.phatTrooper.health);
    $("chewie").text(options.chewie.health);
    $("jediATAT").text(options.jediATAT.health);
    $("#enemyArena").empty();




}

initializeGame();

$("choice").on("click", function(){

    if (userCharacter === false && enemyCharacter === false){
        player = options[$(this).data("gg-type")];
        playerName = $(this).data("gg-type");
        $(this).appendTo("#charArena");
        $("#chars > .charchoice").appendTo(#enemies)
    }
})

})








