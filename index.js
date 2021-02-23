let screen=document.getElementById("input");
var buttons=document.querySelectorAll("#button");
let screenValue="";
document.getElementById("input").readOnly = true;
// change the color of background on refresh
let a=Math.floor(Math.random()*266);
let b=Math.floor(Math.random()*266);
let c=Math.floor(Math.random()*266);

var color1=`rgba(${a},${b},${c},0.5)`

var color2=`rgba(${b},${a},${c},0.5)`
document.body.style.backgroundImage=`linear-gradient(60deg,${color1} 50%,${color2} 50%)`

// change the bgcolor on clicking button change color 
function changeColor(){
var a=Math.floor(Math.random()*266);
var b=Math.floor(Math.random()*266);
var c=Math.floor(Math.random()*266);

var color1=`rgba(${a},${b},${c},0.5)`;
var color2=`rgba(${b},${a},${c},0.5)`;
document.body.style.backgroundImage=`linear-gradient(60deg,${color1} 50%,${color2} 50%)`;
}

for(item of buttons){
    item.addEventListener("click",function(e){
    addAnimation(e.target);
    buttonText=e.target.innerText;
        console.log(buttonText);
        if(buttonText=="x"){
            buttonText="*";
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=="AC"){
            screenValue="";
            screen.value=screenValue;
        }
        else if(buttonText=="C"){
            screenValue=screenValue.slice(0,-1);
            screen.value=screenValue;
             }
      
        else if(buttonText=="="){
            screen.value=eval(screenValue);
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }
    })
}
document.addEventListener("keydown",function(e){

    buttonText=e.key;
    if(buttonText=="*"){
        buttonText="*";
        screenValue+=buttonText;
        screen.value=screenValue;
        
    }
    else if(buttonText=="Enter"||buttonText=="="){
        screen.value=eval(screenValue);
    }
    
    else if(buttonText=="Backspace"){
        screenValue=""
        screen.value=screenValue;
    }
    else if(buttonText>=0 && buttonText<=9){
        screenValue+=buttonText;
        screen.value=screenValue;

    }
    else if(buttonText=="+" ||buttonText=="-" || buttonText=="/" || buttonText=="%" || buttonText==")"|| buttonText=="("){
        screenValue+=buttonText;
        screen.value=screenValue;
    }

    else{
        screen.value=screenValue;
    }
})
function addAnimation(currentkey){
    
    currentkey.classList.add("pressed")

    setTimeout(function(){
        currentkey.classList.remove("pressed"),1000;
    })
}