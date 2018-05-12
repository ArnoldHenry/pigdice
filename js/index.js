var max = 100;
var player1 = [];
var player2 = [];
var sum = 0;
var sum2 = 0;

function rolldice(){

  var output = '',
        me = Math.floor(Math.random()*6);
        output = "&#x268" + me + "; ";
        document.getElementById('players').innerHTML = output;
        $("p#players").css({"text-align":"center","font-weight":"thin","color":"#7F84C5","font-size":"7em"});
        summation = (me+1);
        // alert(me);
        if (summation == 1) {
          document.getElementById('roll2').disabled = false;
          document.getElementById('roll').disabled = true;
          alert("Sorry, no points for you :(");
        }else{
          document.getElementById('roll').disabled = false;
          player1.push(summation);
          $("#playerone").append(summation+"<br>");
          for (var index = 0; index < player1.length; index++) {

            sum += player1[index];

            document.getElementById("sumplayerone").innerHTML = sum;
            player1 = [];

          }
        }

}
function rolldice2(){

  var output = '',
        me = Math.floor(Math.random()*6);
        output = "&#x268" + me + "; ";
        document.getElementById('players').innerHTML = output;
        summation = (me+1);
        // alert(me);
        if (summation == 1) {
          document.getElementById('roll').disabled = false;
          document.getElementById('roll2').disabled = true;
          alert("Nothing to push");
        }else{
          document.getElementById('roll2').disabled = false;
          player2.push(summation);
          $("#playertwo").append(summation+"<br>");
          for (var index = 0; index < player2.length; index++) {

            sum2 += player2[index];

            document.getElementById("sumplayertwo").innerHTML = sum2;
            player2 = [];

          }
        }

}
