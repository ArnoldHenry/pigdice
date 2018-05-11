document.querySelector('input[type=button]').addEventListener('click', function(){
  rolldice();
});

function rolldice(){
  var max = 100;
  var addnumbers = [];
  var sum = 0;
  var output = '',
        me = Math.floor(Math.random()*6);
        output = "&#x268" + me + "; ";
        document.getElementById('players').innerHTML = output;
        sumation = (me + 1);

        if (sumation == 1) {
          document.getElementById('roll').disabled = true;

        }else{
          document.getElementById('roll').disabled = false;
          addnumbers.push(sumation);
          for (var i = 0; i < addnumbers.length; i++) {
            var gh = sum += addnumbers[i]
          }
          $("#playerone").append(sumation+"<br>");
          alert(gh);
        }

}

function check(){

  }
$()
