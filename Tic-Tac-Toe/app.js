let boxes=document.querySelectorAll(".box");
//2 players: X and O
let turnO=true;
let winnerMSG=document.querySelector(".winner-msg");
let newGame=document.querySelector(".new-btn");
let resetGame=document.querySelector(".reset");
let winner=null;


let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
boxes.forEach(box => {
    box.addEventListener("click", () => {
        console.log("button is clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();

    });
});
const checkWinner= () => {
    for(let pattern of winPatterns){
        let t1=boxes[pattern[0]].innerText;
        let t2=boxes[pattern[1]].innerText;
        let t3=boxes[pattern[2]].innerText;
        if(t1!="" && t2!="" && t3!=""){
            if(t1==t2 && t2==t3){
                console.log("winner is",t1);
                winner=t1;
                winnerMSG.innerText=`Congratulations!!Winner is ${winner}`
                winnerMSG.style.display="block";
                newGame.style.display="block";
            }
        }
    }
};
const restart=() =>{
    boxes.forEach(box =>{
       box.innerText="";
       box.disabled=false;
    });
};
const newgame=() =>{
    boxes.forEach(box =>{
       box.innerText="";
       box.disabled=false;
       winnerMSG.style.display="none";
       newGame.style.display="none";
    });
};
newGame.addEventListener("click",newgame);
resetGame.addEventListener("click",restart);
