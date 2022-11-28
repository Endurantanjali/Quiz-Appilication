let quiz3 = [
    {
        question:"Age of Umesh will be 4 times the age of Reena in 6 years from today. If ages of Umesh and Mahesh are 7 times and 6 times the age of Reena respectively, what is present age of Umesh?",
        choice1:"64 years",
        choice2:"30 years",
        choice3:"48 years",
        choice4:"42 years",
        answer:4,
    },
    {
        question:"Rohan's age is five times Ajay’s and seven-eighteenth of Meena’s age. The sum of the ages of all three of them is 132 years. How much younger is Ajay to Meena?",
        choice1:"56 years",
        choice2:"83 years",
        choice3:"27 years",
        choice4:"Cannot be determined",
        answer:2,
    },
    {
        question:"The average age of 10 students and their teacher is 15 years. The average age of the first seven students is 15 yr and that of the last three is 11 yr. What is the teacher's age?",
        choice1:"33 years",
        choice2:"30 years",
        choice3:"27 years",
        choice4:"24 years",
        answer:3,
    },
    {
        question:"  Ram and Shyams average age is 65 years. The average age of Ram, Shyam and John is 53 years. What is the age of John?",
        choice1:"29 years",
        choice2:"31 years",
        choice3:" 59 years",
        choice4:"45 years",
        answer:1,
    },
    {
        question:"The present ages of Aman and Nina are 59 and 37 years, respectively. What was the ratio of the ages of Nina and Aman 13 years ago?",
        choice1:" 3:2",
        choice2:"46:25",
        choice3:"12:23",
        choice4:"8:3",
        answer:3,
    },
    {
        question:"Rohan is as much younger than Ajay as he is older than Meena. The sum of ages of Ajay and Meena is 108 years. How old is Rohan?",
        choice1:"32 years",
        choice2:"64 years",
        choice3:" 52 years",
        choice4:"36 years",
        answer:3,
    },
    {
        question:"Average age of a family of 4 members was 19 years, 4 years back. Birth of a new child kept the average age of the family same even today. How old is the child today?",
        choice1:"4 years",
        choice2:"1 year",
        choice3:"2 years",
        choice4:"3 years",
        answer:4,
    },
    {
        question:" 12 years ago, age of P was 3 times the age of Q. After 12 years, ratio of ages of Q to P will be 2:3. What is the present age of P?",
        choice1:"54 years",
        choice2:"36 years",
        choice3:"24 years",
        choice4:"144 years",
        answer:2,
    },
    {
        question:"The present ages of A and B are 42 and 36 years, respectively. After K years, the ratio of ages of B to A will be 15:17.What is value of K?",
        choice1:"9 years",
        choice2:"12 years",
        choice3:" 5 years",
        choice4:" 3 years",
        answer:1,
    },
    {
        question:"A father is 4 times as old as his son. 8 years hence, the ratio of father’s age to the son’s age will be 20:7. What is the sum of their present ages?",
        choice1:"50",
        choice2:" 72",
        choice3:"68",
        choice4:"65",
        answer:4,
    },
];

//Getting all ID element from HTML to Javascript//
let time3 = document.querySelector("#time3");
let quesNo3 = document.querySelector("#quesNo3");
let quesText3 = document.querySelector("#quesText3");
let optionbox3 = document.querySelector("#optionbox3");
let active3 = document.querySelector(".active3");
let disabled3 = document.querySelector(".disabled3");
let optioni = document.querySelector("#optioni");
let optionj = document.querySelector("#optionj");
let optionk = document.querySelector("#optionk");
let optionl = document.querySelector("#optionl");
let nextQues3 = document.querySelector("#nextQues3");
let choice_que3 = document.querySelectorAll(".choice_que3");
let ageBtn = document.querySelector("#log3");
let ques3 = document.querySelector("#questionScreen3");
let score3 = document.querySelector("#scorebox3");
let result3 = document.querySelector("#resultScreen");
let main3 = document.querySelector("#main");
let startAgain3 = document.querySelector("#startagain");
let home3 = document.querySelector("#home");


let index3 = 0;
let timer3 = 0;
let interval3 = 0;
let correct3 = 0;

//For Timer//
let countDown3 = ()=>{
    if(timer3 === 20){
        clearInterval(interval3);
        nextQues3.click();
    }
    else{
        timer3++;
        time3.innerText = timer3;
    }
}
interval3 = setInterval(countDown3,1000);

//For loading Questions//
let loadData3 = ()=>{
    quesNo3.innerText = index3+ 1 + "." ;
    quesText3.innerText = quiz3[index3].question;
    optioni.innerText = quiz3[index3].choice1;
    optionj.innerText = quiz3[index3].choice2;
    optionk.innerText = quiz3[index3].choice3;
    optionl.innerText = quiz3[index3].choice4;

    timer3 = 0;
}
loadData3();

//What happens when pipe and cisterns button is clicked//
ageBtn.addEventListener("click", ()=>{
  ques3.style.display = "block";
 result3.style.display = "none";
 main3.style.display = "none";

 interval3 = setInterval(countDown3, 1000);
 loadData3();
 choice_que2.forEach(removeActive =>{
    removeActive.classList.remove("active3");

 })
});
//What happens when choice button is clicked//
choice_que3.forEach((choices,choiceNo) =>{
    choices.addEventListener("click" , ()=>{
        choices.classList.add("active3");
        if(choiceNo === quiz3[index3].answer){
             correct3++;
        }
        else{
            correct3 += 0;
        }
        clearInterval(interval3);

        for(i = 0; i<= 3; i++){
            choice_que3[i].classList.add("disabled3");
        }
    })
});

//What happens when next question button is clicked//
nextQues3.addEventListener("click" ,()=>{
    if(index3 !== quiz2.length - 1){
        index3++;
        choice_que3.forEach(removeActive =>{
            removeActive.classList.remove("active3");
        })
        loadData3();
        clearInterval(interval3);
        interval3 = setInterval(countDown3, 1000);
    }
      else{
        index3 = 0;
        clearInterval(interval3);
        ques3.style.display = "none";
        result3.style.display = "block";
      } 
      for(i = 0; i<=3; i++){
        choice_que3[i].classList.remove("disabled3");
      }
});
    
//What happens when start again button is clicked//
startAgain3.addEventListener("click" , () =>{
    ques3.style.display = "block";
    result3.style.display = "none";
});
//What happens when home button is clicked//
home3.addEventListener("click" , () =>{
    main3.style.display = "block";
    result3.style.display = "none";
});

