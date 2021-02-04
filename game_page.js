var player_1_name= localStorage.getItem("player_1_name");
var player_2_name= localStorage.getItem("player_2_name");
document.getElementById("player1_name").innerHTML=player_1_name;
document.getElementById("player2_name").innerHTML=player_2_name;
var player_1_score=0;
var player_2_score=0;
document.getElementById("player1_score").innerHTML=player_1_score;
document.getElementById("player2_score").innerHTML=player_2_score;
var question_turn= player_1_name;
var answer_turn= player_2_name;
document.getElementById("question_player").innerHTML=question_turn;
document.getElementById("answer_player").innerHTML=answer_turn;
function send(){
 get_word= document.getElementById("question_input").value;
 word=get_word.toLowerCase();
 console.log(word);
 var first_letter=word.charAt(1);
 console.log(first_letter);
 var middle_letter=Math.floor(word.length/2);
 middle_letter=word.charAt(middle_letter);
 console.log(middle_letter);
 var last_letter=word.charAt(word.length-1);
 console.log(last_letter);
 var remove_first_letter=word.replace(first_letter,"_");
 var remove_middle_letter=remove_first_letter.replace(middle_letter,"_");
 var remove_last_letter=remove_middle_letter.replace(last_letter,"_");
 console.log(remove_last_letter);
 document.getElementById("question_input").value="";
 document.getElementById("output").innerHTML="<h3>"+remove_last_letter+"</h3><br>";
 document.getElementById("output").innerHTML+="<input id='answer_input'><br><br>";
 document.getElementById("output").innerHTML+="<button class='btn btn-success' onclick='check()'>Check!</button>";
}
function check(){
    var get_answer=document.getElementById("answer_input").value;
    answer=get_answer.toLowerCase();
    console.log(answer);
    if (answer==word){
        if (answer_turn==player_1_name){
            player_1_score=player_1_score+1;
            document.getElementById("player1_score").innerHTML=player_1_score;
            question_turn=player_1_name;
            answer_turn=player_2_name;
            document.getElementById("question_player").innerHTML=question_turn;
            document.getElementById("answer_player").innerHTML=answer_turn;
        }
        else if (answer_turn==player_2_name){
            player_2_score=player_2_score+1;
            document.getElementById("player2_score").innerHTML=player_2_score;
            question_turn=player_2_name;
            answer_turn=player_1_name;
            document.getElementById("question_player").innerHTML=question_turn;
            document.getElementById("answer_player").innerHTML=answer_turn;
        }
    }
    if (answer!=word){
        if (answer_turn=player_1_name){
            question_turn=player_1_name;
            answer_turn=player_2_name;
            document.getElementById("question_player").innerHTML=question_turn;
            document.getElementById("answer_player").innerHTML=answer_turn;
        }
        else if(answer_turn==player_2_name){
            question_turn=player_2_name;
            answer_turn=player_1_name;
            document.getElementById("question_player").innerHTML=question_turn;
            document.getElementById("answer_player").innerHTML=answer_turn;
        }
    }
    document.getElementById("output").innerHTML="";
}