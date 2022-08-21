/*TESTING
var x=window.prompt("enter your name");
console.log(x);
Testing*/
console.log("EXTERNAL");

/* Part 2 Functions */
function createInput() {

  var input = document.createElement("INPUT");
  input.setAttribute("type", "text");
  input.setAttribute("value", "Created Input Tag!!!");
  input.setAttribute("id", "part2_input");
  input.style.marginLeft = "35%";
  input.style.marginTop = "1%";
  input.style.marginBottom = "1%";
  input.style.display = "inline";

  var button = document.getElementById("create_input");
  button.style.display = "none";

  var button = document.getElementById("remove_input");
  button.style.display = "inline";

  document.getElementById("input_tag").appendChild(input);

  var button = document.getElementById("print_input");
  button.style.display = "inline";

  console.log("Successfully created Input Tag");

}


function printInput() {

  var input_text = document.getElementById("part2_input").value;

  var para = document.getElementById("para2");

  var button = document.getElementById("print_input");
  button.style.display = "none";

  var button = document.getElementById("reset_input");
  button.style.display = "inline";

  para.innerHTML = input_text;

  console.log("Successfully Printed the content of the Input Tag");

}

function resetInput() {

  var button = document.getElementById("reset_input");
  button.style.display = "none";

  var button = document.getElementById("print_input");
  button.style.display = "inline";

  var para = document.getElementById("para2");
  para.innerHTML = "";

  var input = document.getElementById("part2_input");
  input.value = "";

  console.log("Successfully resetted the content of the Input Tag");

}

function removeInput() {

  var button = document.getElementById("create_input");
  button.style.display = "inline";

  var button = document.getElementById("remove_input");
  button.style.display = "none";

  var button = document.getElementById("reset_input");
  button.style.display = "none";

  var button = document.getElementById("print_input");
  button.style.display = "none";

  var para = document.getElementById("para2");
  para.innerHTML = "";

  var input_tag_element = document.getElementById("part2_input");
  input_tag_element.remove();

  console.log("Successfully removed the content of the Input Tag and the Input Tag itself");

}
// end part 2 functions

/* part 3 functions */

function greetName(){

  var user_name=document.getElementById("greet_name").value;

  window.alert("Hello "+user_name+", Please Believe in yourself..!");

  console.log("Successfully finished Greeting");

}

//end part 3 functions

/* part 4 functions */

function showDate(){

  var para=document.getElementById("para4");
  var date=Date();
  para.innerHTML=date;

  console.log("Successfully shown Date and Time");

}

//end part 4 functions

/* part 5 functions */

function checkAnswer(ans_num){

  var answers=[12,111,561,561];
  var answer='answer'+ans_num;
  var result='result'+ans_num;
  var ans_num=Number(ans_num);
  var user_answer=document.getElementById(answer).value;

  if ( user_answer == answers[ans_num-1] ) {

    var t_result=result+'T';

    var decision=document.getElementById(t_result);
    decision.style.display="inline";

    var f_result=result+'F';

    var decision=document.getElementById(f_result);
    decision.style.display="none";

  } else {

    var f_result=result+'F';

    var decision=document.getElementById(f_result);
    decision.style.display="inline";

    var t_result=result+'T';

    var decision=document.getElementById(t_result);
    decision.style.display="none";

  }

  console.log("Successfully Checked the Answer and has shown the Result");

}

// end part 5 functions

/* part 6 functions */

function greetName2(){

  var user_name =  window.prompt("Enter your name ");

    window.alert("Once again Hello!!! "+user_name+", Please Believe in yourself..!");

  console.log("Successfully finished Greeting using Prompt");

}

//end part 6 functions
