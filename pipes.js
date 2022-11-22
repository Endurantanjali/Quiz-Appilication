let quiz = [
    {
    question: " Pipes A and B can fill a tank in 5 and 6 hours respectively. Pipe C can empty it in 12 hours. If all the three pipes are opened together, then the tank will be filled in:",
    
     choice1:  "1.76",
     choice2: "2.72",
     choice3: "3.52",
     choice4: "4.5",
     answer:3,
    },

    {
    question: " Two pipes can fill a tank in 20 and 24 minutes respectively and a waste pipe can empty 3 gallons per minute. All the three pipes working together can fill the tank in 15 minutes. The capacity of the tank is:",
    
    choice1:   "60 gallons",
    choice2:   "100 gallons",
    choice3:    "120 gallons",
    choice4:    "180 gallons",
    answer:3,
    },

    {
    question: "A tank is filled in 5 hours by three pipes A, B and C. The pipe C is twice as fast as B and B is twice as fast as A. How much time will pipe A alone take to fill the tank?",
    
    choice1:  "35 hours",
    choice2:   "25 hours",
    choice3:   "20 hours",
    choice4:   "Cannot be determined",
     answer:3,
    },

    {
    question: " Two pipes A and B together can fill a cistern in 4 hours. Had they been opened separately, then B would have taken 6 hours more than A to fill the cistern. How much time will be taken by A to fill the cistern separately?",
    
    choice1:    "12 min",
    choice2:    "15 min",
    choice3:    "25 min",
    choice4:    "50 min",
    answer:1,
    },

    {
     question: "Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively. Both the pipes are opened together but after 4 minutes, pipe A is turned off. What is the total time required to fill the tank?" ,
     
     choice1:  "14 min. 40 sec.",
     choice2:  "12 min. 30 sec.",
     choice3:   "11 min. 45 sec.",
     choice4:   "10 min. 20 sec",
     answer:4,  
    },

    {
    question: "One pipe can fill a tank three times as fast as another pipe. If together the two pipes can fill the tank in 36 minutes, then the slower pipe alone will be able to fill the tank in:",
   
    choice1:    "81 min.",
    choice2:    "108 min.",
    choice3:    "144 min.",
    choice4:    "192 min.",
    answer:3,
    },

    {
    question: " A large tanker can be filled by two pipes A and B in 60 minutes and 40 minutes respectively. How many minutes will it take to fill the tanker from empty state if B is used for half the time and A and B fill it together for the other half?",
    
    choice1:   "15 min",
    choice2:    "20 min",
    choice3:    "27.5 min",
    choice4:    "30 min",
    answer:4,
    },

    {
    question: " A tap can fill a tank in 6 hours. After half the tank is filled, three more similar taps are opened. What is the total time taken to fill the tank completely?",
    
    choice1:    "3 hrs 15 min",
    choice2:    "3 hrs 45 min",
    choice3:    "4 hrs",
    choice4:    "4 hrs 15 min",
    answer:2,
    },

    {
    question: "Three pipes A, B and C can fill a tank in 6 hours. After working at it together for 2 hours, C is closed and A and B can fill the remaining part in 7 hours. The number of hours taken by C alone to fill the tank is:",
    
    choice1:   "10",
    choice2:   "12",
    choice3:   "14" ,
    choice4:   "16",
    answer:3,
    },

    {
        question: " Taps X and Y can fill a tank in 30 and 40 minutes respectively.Tap Z can empty the filled tank in 60 minutes.If all the three taps are kept open for one minute each,how much time will the taps take to fill the tank?",
        
        choice1:    "48min",
        choice2:    "24min",
        choice3:    "72min",
        choice4:    "None of these",
         answer:2,
    },
    
];

//For timer//
let time = document.querySelector("#time");
let quesNo = document.querySelector("#quesNo");
let quesText = document.querySelector("#quesText");
let optionbox = document.querySelector("#optionbox");
let active = document.querySelector(".active");
let disabled = document.querySelector(".disabled");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");
let nextQues = document.querySelector("#nextQues");
let choice_que = document.querySelectorAll(".choice_que");
let pipeBtn = document.querySelector("#log1");
let ques = document.querySelector("#questionScreen");
let score = document.querySelector("#scorebox");
let result = document.querySelector("#resultScreen");
let main = document.querySelector("#main");


let index = 0;
let timer = 0;
let interval = 0;
let correct = 0;

let countDown = ()=>{
    if(timer == 20){
        clearInterval(interval);
        nextQues.click();
    }
    else{
        timer++;
        time.innerText = timer;
    }
}
setInterval(countDown,1500);

let loadData = ()=>{
    quesNo.innerText = index + 1 + "." ;
    quesText.innerText = quiz[index].question;
    option1.innerText = quiz[index].choice1;
    option2.innerText = quiz[index].choice2;
    option3.innerText = quiz[index].choice3;
    option4.innerText = quiz[index].choice4;

     timer = 0;
}
loadData();

pipeBtn.addEventListener("click", ()=>{
  ques.style.display = "block";
  result.style.display = "none";
  main.style.display = "none";

  interval = setInterval(countDown, 1500);
  loadData();
  choice_que.forEach(removeActive =>{
    removeActive.classList.remove("active");
  });
});

choice_que.forEach((choices,choiceNo) =>{
    choices.addEventListener("click" , ()=>{
        choices.classList.add("active");

      

        for(i = 0; i <=3; i++){
            choice_que[i].classList.add("disabled");
        }
        clearInterval(interval);
    });
});

