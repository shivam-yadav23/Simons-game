let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let Btns = ["red" , "yellow" , "purple" , "green"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("game has been started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    } , 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    } , 250);
}


function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randInd = Math.floor(Math.random()*4);
    let randCol = Btns[randInd];
    let randbtn = document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function checkAns(ind) {
    
    if(userSeq[ind] === gameSeq[ind]){
        if(gameSeq.length === userSeq.length){
            setTimeout(levelUp , 1000);
        }
    }
    else{
        h2.innerHTML = `Game Over!  Your Score is <b>${level}</b> <br> Press Any key to start the game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress() {
    let btnn = this;
    userFlash(btnn);

    let userCol = btnn.getAttribute("id");
    console.log(userCol);
    userSeq.push(userCol);
    console.log(userSeq);
    setTimeout(function() {
        checkAns(userSeq.length-1);
    },300);    
}

let allBtns = document.querySelectorAll(".btn");
for(let btns of allBtns){
    btns.addEventListener("click" , btnPress);
    console.log(`Added event listener to ${btns.id}`);

}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
