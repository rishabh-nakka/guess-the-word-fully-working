var player_1_input;
var player_2_input;
function login(){
    player_1_input=document.getElementById("player_1_input").value;
    player_2_input=document.getElementById("player_2_input").value;
    localStorage.setItem("player_1_name",player_1_input);
    localStorage.setItem("player_2_name",player_2_input);
    window.location="game_page.html";
}