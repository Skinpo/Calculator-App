let result = document.getElementById("input");

let calcu = function(number){
    result.value = result.value + number;
}

let Result = function(){
    try{
        result.value=eval(result.value);
    }
    catch(err){
        alert("Enter the valid input");
    }
}

function clr(){
    result.value = " 0"
}

function del(){
    result.value = result.value.slice(0,-1);
}