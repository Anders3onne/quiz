function check(){

    var A1 = document.quiz.A1.value;
    var A2 = document.quiz.A2.value;
    var A3 = document.quiz.A3.value;
    var A4 = document.quiz.A4.value;
    var A5 = document.quiz.A5.value;
    var A6 = document.quiz.A6.value;
    var A7 = document.quiz.A7.value;
    var A8 = document.quiz.A8.value;
    var A9 = document.quiz.A9.value;
    var A10 = document.quiz.A10.value;
    var A11 = document.quiz.A11.value;
    var count=0;

        if (A1 == "b") {        
          count+=25;
        }
        if (A2 == "c"){
          count+=25;
        }
        if (A3 == "a"){
          count+=25;
        }
        if (A4 == "a"){
          count+=25;
        }
        if (A5 == "b"){
            count+=25;
          }
        if (A6 == "a") {    
                count+=25;
          }
        if (A7 == "a"){
            count+=25;
          }
        if (A8 == "b"){
            count+=25;
          }
        if (A9== "a"){
            count+=25;
          }
        if (A10 == "b"){
              count+=25;
            }
        if (q11 == "a"){
                count+=25;
              }
        if (q12 == "c"){
                  count+=25;
                }
                

    document.getElementById("after_submit").style.visibility ="visible";
  
    document.getElementById("number_count").innerHTML = "You got " +count + "%.";
  
    $("#button").hide();
    $("#quiz").hide();
    $("#number_count").show();
    event.preventDefault();
}; 