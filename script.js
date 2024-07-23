function getRandomchoise(){
    let randomchoise=Math.floor(Math.random() * 3 + 1);
    return randomchoise;
}

function getComputerChoice(){
    let random =getRandomchoise();
    if(random===1){
        computerchoice="rock";
    }
    else if(random==2){
        computerchoice='paper'
    }
    else{
        computerchoice ="scissor"
    }
    return computerchoice;
}


document.querySelector('#rock').addEventListener('click' ,()=>{
    let computerText =getComputerChoice();
    let result;
    document.querySelector('.your-choice').innerText='you chose rock !!'
    document.querySelector(".computer-choice").innerHTML=`computer choose ${computerText}`
    if(computerText=='rock'){
        result='tie'
    }
    else if( computerText=='paper'){
        result='i loss'
    }
    else{
        result='i won'
    }
    document.querySelector('.win').innerHTML=`and the result is ${result}`
})

document.querySelector('.paper').addEventListener('click',()=>{ let computerText =getComputerChoice();
    let result;
    document.querySelector('.your-choice').innerText='you chose paper !!'
    document.querySelector(".computer-choice").innerHTML=`computer choose ${computerText}`
    if(computerText=='rock'){
        result='i win'
    }
    else if( computerText=='paper'){
        result='tie'
    }
    else{
        result='i loss'
    }
    document.querySelector('.win').innerHTML=`and the result is ${result}`

})


document.querySelector('.scissor').addEventListener('click',()=>{
    let computerText =getComputerChoice();
    let result;
    document.querySelector('.your-choice').innerText='Scissor !!'
    document.querySelector(".computer-choice").innerHTML=`computer choose ${computerText}`
    if(computerText=='rock'){
        result='i loss'
    }
    else if( computerText=='paper'){
        result='i won'
    }
    else{
        result='tie'
    }
    document.querySelector('.win').innerHTML=`and the result is ${result}`

})