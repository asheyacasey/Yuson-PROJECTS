var operateCheck = prompt("Enter enter a number between 1-4\n 1- Addition\n 2- Subtraction\n 3- Multiplication\n 4- Division");
if (operateCheck == "1" || operateCheck == "2" || operateCheck == "3" || operateCheck == "4" )
 {
   calc();
 } 
 else alert("input is invalid");
  
function calc(){
 var numA, numB, numResult;
getnumA();
getnumB();
doCalc(); 
setnumResult();

function getnumA(){
     numA = prompt("Please enter first number: ");
            return Number(numA);
        }
function getnumB(){
            numB = prompt("Please enter second number: ");
            return Number(numB);
        }

function doCalc(){
        if(operateCheck == "1")
        {
        numResult = Number(numA) + Number(numB);
        } 
        else if(operateCheck == "2"){
            numResult = Number(numA) - Number(numB);
        }
        else if(operateCheck == "3"){
            numResult = Number(numA) * Number(numB);
        }
        else
        {
            numResult = Number(numA) / Number(numB);
        }
        return Number(numResult);
    }

        function setnumResult(){
                    prompt("Result = " + numResult);
                }
            }            