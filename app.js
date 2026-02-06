let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"]; 
let highscore=0;
let h3=document.querySelector("h3");
let start=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("click",function(){
    if(start==false){
        console.log("Game Started");
        start=true;
        levelup();
    }
});
function levelup(){
    userseq=[];
    level++;
    h2.innerText= `Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randcolor=btns[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    btnflash(randbtn);
}
function check(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length===gameseq.length){
            setTimeout(levelup(),2000);
        }
    }else{
        h2.innerHTML=`Game over <b>Your score is  ${level}</b> <br> press any key to start`;
        if(highscore<level){
            highscore=level;
            h3.innerText=`Highest score is ${highscore}`;
        }
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },600);
}
function usebtnflash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },200);
}
function btnpress(){
    let btn=this;
    usebtnflash(btn);
    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    check(userseq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for (btn of allbtn) {
    btn.addEventListener("click",btnpress);
}
function reset(){
    start=false;
    level=0;
    gameseq=[];
    userseq=[];    

}
