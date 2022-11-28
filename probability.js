let quiz2 = [
    {
    question:"An event in the probability that will never be happened is called as -",
    choice1:"Unsure event",
    choice2:"Sure event ",
    choice3:"Possible event ",
    choice4:"Impossible event",
    answer:4,
    },
    {
question:"What will be the value of P(not E) if P(E) = 0.07?",
choice1:"90",
choice2:"007 ",
 choice3:"93 ",
 choice4:"72",
answer:3,
 },
 {
  question:"What will be the probability of getting odd numbers if a dice is thrown?",
  choice1:"1/2",
  choice2:"2 ",
  choice3:"4/2 ",
  choice4:"5/2",
   answer:1,
 },  
 {
    question:"What is the probability of getting a sum as 3 if a dice is thrown?",
    choice1:"2/18",
    choice2:"1/18 ",
    choice3:"4 ",
    choice4:"1/36",
    answer:2,
    },
    {
     question:"The probability of getting two tails when two coins are tossed is -",
     choice1:"1/6",
     choice2:"1/2 ",
     choice3:"1/3 ",
     choice4:"1/4",
     answer:4,
        },
        {
     question:"What is the probability of getting the sum as a prime number if two dice are thrown?",
      choice1:"5/24",
      choice2:"5/12 ",
      choice3:"5/30 ",
      choice4:"1/4",
      answer:2,
            },
         {
 question:"What is the probability of getting atleast one head if three unbiased coins are tossed?",
choice1:"7/8",
choice2:"1/2 ",
choice3:"5/8 ",
choice4:"8/9",
answer:1,
 },
  {
question:"What is the probability of getting 1 and 5 if a dice is thrown once?",
  choice1:"1/6",
 choice2:"1/3 ",
 choice3:"2/3 ",
choice4:"8/9",
  answer:2,
},
 {
 question:"What will be the probability of losing a game if the winning probability is 0.3?",
 choice1:"0.5",
  choice2:"0.6 ",
 choice3:"0.7 ",
choice4 :"0.8",
  answer:3,
},
 {
 question:" If two dice are thrown together, what is the probability of getting an even number on one dice and an odd number on the other dice? ",
 choice1:"1/4",
 choice2:"3/5 ",
choice3:"3/4 ",
 choice4:"1/2",
answer:4,
  },     
];

//Getting all ID element from HTML to Javascript//
let time2 = document.querySelector("#time2");
let quesNo2 = document.querySelector("#quesNo2");
let quesText2 = document.querySelector("#quesText2");
let optionbox2 = document.querySelector("#optionbox2");
let active2 = document.querySelector(".active2");
let disabled2 = document.querySelector(".disabled2");
let optione = document.querySelector("#optione");
let optionf = document.querySelector("#optionf");
let optiong = document.querySelector("#optiong");
let optionh = document.querySelector("#optionh");
let nextQues2 = document.querySelector("#nextQues2");
let choice_que2 = document.querySelectorAll(".choice_que2");
let probBtn = document.querySelector("#log2");
let ques2 = document.querySelector("#questionScreen2");
let score2 = document.querySelector("#scorebox2");
let result2 = document.querySelector("#resultScreen");
let main2 = document.querySelector("#main");
let startAgain2 = document.querySelector("#startagain");
let home2 = document.querySelector("#home");


let index2 = 0;
let timer2 = 0;
let interval2 = 0;
let correct2 = 0;

//For Timer//
let countDown2 = ()=>{
    if(timer2 === 20){
        clearInterval(interval2);
        nextQues2.click();
    }
    else{
        timer2++;
        time2.innerText = timer2;
    }
}
interval2 = setInterval(countDown2,1000);

//For loading Questions//
let loadData2 = ()=>{
    quesNo2.innerText = index2+ 1 + "." ;
    quesText2.innerText = quiz2[index2].question;
    optione.innerText = quiz2[index2].choice1;
    optionf.innerText = quiz2[index2].choice2;
    optiong.innerText = quiz2[index2].choice3;
    optionh.innerText = quiz2[index2].choice4;

    timer2 = 0;
}
loadData2();

//What happens when pipe and cisterns button is clicked//
probBtn.addEventListener("click", ()=>{
  ques2.style.display = "block";
 result2.style.display = "none";
 main2.style.display = "none";

 interval2 = setInterval(countDown2, 1000);
 loadData2();
 choice_que2.forEach(removeActive =>{
    removeActive.classList.remove("active2");

 })
});
//What happens when choice button is clicked//
choice_que2.forEach((choices,choiceNo) =>{
    choices.addEventListener("click" , ()=>{
        choices.classList.add("active2");
        if(choiceNo === quiz2[index2].answer){
             correct2++;
        }
        else{
            correct2 += 0;
        }
        clearInterval(interval2);

        for(i = 0; i<= 3; i++){
            choice_que2[i].classList.add("disabled2");
        }
    })
});

//What happens when next question button is clicked//
nextQues2.addEventListener("click" ,()=>{
    if(index2 !== quiz2.length - 1){
        index2++;
        choice_que2.forEach(removeActive =>{
            removeActive.classList.remove("active2");
        })
        loadData2();
        clearInterval(interval2);
        interval2 = setInterval(countDown2, 1000);
    }
      else{
        index2 = 0;
        clearInterval(interval2);
        ques2.style.display = "none";
        result2.style.display = "block";
      } 
      for(i = 0; i<=3; i++){
        choice_que2[i].classList.remove("disabled2");
      }
});
    
//What happens when start again button is clicked//
startAgain2.addEventListener("click" , () =>{
    ques2.style.display = "block";
    result2.style.display = "none";
});
//What happens when home button is clicked//
home2.addEventListener("click" , () =>{
    main2.style.display = "block";
    result2.style.display = "none";
});

