//Start section//
let start = document.querySelector("#start");
let main = document.querySelector(".main");
//Guide section
let guide = document.querySelector("#guide");
let exit = document.querySelector("#exit");
let continueBtn = document.querySelector("#continue");

//Quiz Section//
let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");

//Question section//
let questionNo = document.querySelector("#questionNo");
let questionText = document.querySelector("#questionText");

//Mutliple choices//
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

//Correct and next button//
let nextQuestion = document.querySelector("#nextQuestion");
let total_Correct = document.getElementById('total_Correct');

//Result section//
let result = document.querySelector("#result");
let quit = document.querySelector("#quit");
let startAgain = document.querySelector("#startAgain");
let totalAttempt = document.querySelector(".totalAttempt");
let right = document.querySelector(".right");
let totalWrong = document.querySelector(".totalWrong");
let percentage = document.querySelector(".percentage");
let totalScore = document.querySelector(".totalScore");

//Get all h4 from Quiz(MCQ)//
let choice_que = document.querySelectorAll(".choice_que");

let index = 0;
let timer = 0;
let interval = 0;
//total points//
let correct = 0 ;
let attempt =0;
attempt++;

//store answer value//
let UserAns = undefined;

//What happens when start button is clicked//
start.addEventListener("click" , ()=>{
    start.style.display = "none";
    main.style.display = "none";
    guide.style.display = "block";
});

//What happens when exit button is clicked//
exit.addEventListener("click" , ()=>{
    start.style.display = "block";
    main.style.display = "block";
    guide.style.display = "none";
});

//Creating Timer//
let countDown = ()=>{
   if(timer === 60) {
    clearInterval(interval);
    nextQuestion.click();
   }
   else{
    timer++;
    time.innerText = timer;

   }
}
 //setInterval(countDown, 1000);

let loadData = ()=>{
    questionNo.innerText = index + 1 + ".";
    questionText.innerText = MCQS[index].question;
    option1.innerText = MCQS[index].choice1;
    option2.innerText = MCQS[index].choice2;
    option3.innerText = MCQS[index].choice3;
    option4.innerText = MCQS[index].choice4;

    timer = 0;
}
loadData();

//What happens when continue button is clicked//
continueBtn.addEventListener("click" , ()=>{
    start.style.display = "none";
    main.style.display = "none";
    guide.style.display = "none";
    quiz.style.display = "block";

    interval =  setInterval(countDown, 1000);
    loadData();

    //Remove all active classes when continue button is clicked//
    choice_que.forEach(removeActive =>{
        removeActive.classList.remove("active");

     })
     total_Correct.innerHTML = `${correct = 0} Out of ${MCQS.length} Questions`;
});

choice_que.forEach( (choices,choiceNo) =>{
    choices.addEventListener("click" , ()=>{
        choices.classList.add("active");
        //check answer//
        if(choiceNo === MCQS[index].answer){
            correct++;
        }
        else{
            correct += 0;
        }
        //stop counter//
        clearInterval(interval);

        //disable all options when user select an option//
        for(i = 0; i <=3; i++){
            choice_que[i].classList.add("disabled");
        }
    })
});


//What happens when next button is clicked//
nextQuestion.addEventListener("click" , () =>{
    if(index !== MCQS.length - 1){
        index++;
        choice_que.forEach(removeActive =>{
            removeActive.classList.remove("active"); 
    })
    loadData();

    total_Correct.style.display = "block";
    total_Correct.innerHTML = `${correct} Out of ${MCQS.length} Questions`;
    clearInterval(interval);
    interval = setInterval(countDown , 1000);
}
else{
    index = 0;

    //when Quiz complete show result//
    clearInterval(interval);
    quiz.style.display = "none";
    result.style.display = "block";
    totalAttempt.innerHTML = attempt;
    right.innerHTML = correct;
    totalWrong.innerHTML = attempt - correct;
    const percent = (correct/MCQS.length)*100;
    percentage.innerHTML = percent.toFixed() + "%";
    totalScore.innerHTML = correct + "/" + MCQS.length;
   
}
for(i = 0; i <= 3; i++){
    choice_que[i].classList.remove("disabled");
}
});

//What happens when quit button is clicked//
quit.addEventListener("click" , ()=>{
    start.style.display = "block";
    main.style.display = "block";
    guide.style.display = "none";
    result.style.display = "none";
});
//What happens when start again button is clicked//
startAgain.addEventListener("click" , ()=>{
    start.style.display = "none";
    main.style.display = "none";
    guide.style.display = "none";
    result.style.display = "none";
    quiz.style.display = "block";
});