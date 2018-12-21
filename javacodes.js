function check(){

    var qnOne = document.quiz.qnOne.value;
    var qnTwo = document.quiz.qnTwo.value;
    var qnThree = document.quiz.qnThree.value;
    var qnFour = document.quiz.qnFour.value;
    var qnFive = document.quiz.qnFive.value;
    var qnSix = document.quiz.qnSix.value;
    var qnSeven = document.quiz.qnSeven.value;
    var qnEight = document.quiz.qnEight.value;
    var qnNine = document.quiz.qnNine.value;
    var qnTen = document.quiz.qnTen.value;
    var qnEleven = document.quiz.qnEleven.value;
    var count=0;

        if (qnOne == "b") {        
          count+=1;
        }
        if (qnTwo == "c"){
          count+=1;
        }
        if (qnThree == "a"){
          count+=1;
        }
        if (qnFour == "a"){
          count+=1;
        }
        if (qnFive == "b"){
            count+=1;
          }
        if (qnSix == "a") {    
                count+=1;
          }
        if (qnSeven == "a"){
            count+=1;
          }
        if (qnEight == "b"){
            count+=1;
          }
        if (qnNine== "a"){
            count+=1;
          }
        if (qnTen == "b"){
              count+=1;
            }
        if (qnEleven == "a"){
                count+=1;
              }


    document.getElementById("after_submit").style.visibility ="visible";
  
    document.getElementById("number_count").innerHTML = "You got " + count + "/11.";
  
    $("#button").hide();
    $("#quiz").hide();
    $("#number_count").show();
    event.preventDefault();
}; 