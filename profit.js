let quiz1 = [
    {
        question: "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:" ,
        choice1: "15",
        choice2:"16",
        choice3:"18",
        choice4:"25",
        answer:2,
    },
    {
        question: " In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?" ,
        choice1: "30%",
        choice2:"70%",
        choice3:"100%",
        choice4:"250%",
        answer:2,
    },
    {
        question: "A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?" ,
        choice1: "3",
        choice2:"4",
        choice3:"5",
        choice4:"6",
        answer:3,
    },
    {
        question: "The percentage profit earned by selling an article for Rs. 1920 is equal to the percentage loss incurred by selling the same article for Rs. 1280. At what price should the article be sold to make 25% profit?" ,
        choice1: "Rs 2000",
        choice2:"Rs 2200",
        choice3:"Rs 2400",
        choice4:"Data inadequate",
        answer:1,
    },
    {
        question: "A man buys a cycle for Rs. 1400 and sells it at a loss of 15%. What is the selling price of the cycle?" ,
        choice1: "Rs 1090",
        choice2:"Rs 1160",
        choice3:"Rs 1190",
        choice4:"Rs 1202",
        answer:3,
    },
    {
        question: "Sam purchased 20 dozens of toys at the rate of Rs. 375 per dozen. He sold each one of them at the rate of Rs. 33. What was his percentage profit?" ,
        choice1: "3.5",
        choice2:"4.5",
        choice3:"5.6",
        choice4:"6.5",
        answer:3,
    },
    {
        question: "Some articles were bought at 6 articles for Rs. 5 and sold at 5 articles for Rs. 6. Gain percent is:" ,
        choice1: "30%",
        choice2:"40%",
        choice3:"18%",
        choice4:"44%",
        answer:4,
    },
    {
        question: " On selling 17 balls at Rs. 720, there is a loss equal to the cost price of 5 balls. The cost price of a ball is:" ,
        choice1: "Rs 45",
        choice2:"Rs 50",
        choice3:"Rs 55",
        choice4:"Rs 60",
        answer:4,
    },
    {
        question: " When a plot is sold for Rs. 18,700, the owner loses 15%. At what price must that plot be sold in order to gain 15%?" ,
        choice1: "Rs. 21,000",
        choice2:"Rs. 22,500",
        choice3:"Rs. 25,300",
        choice4:"Rs. 25,800",
        answer:3,
    },
    {
        question: "A trader mixes 26 kg of rice at Rs. 20 per kg with 30 kg of rice of other variety at Rs. 36 per kg and sells the mixture at Rs. 30 per kg. His profit percent is:" ,
        choice1: "No profit,no loss",
        choice2:"5%",
        choice3:"18%",
        choice4:"25%",
        answer:2,
    },
];

//Getting all ID element from HTML to Javascript//
let time1 = document.querySelector("#time1");
let quesNo1 = document.querySelector("#quesNo1");
let quesText1 = document.querySelector("#quesText1");
let optionbox1 = document.querySelector("#optionbox1");
let active1 = document.querySelector(".active1");
let disabled1 = document.querySelector(".disabled1");
let optiona = document.querySelector("#optiona");
let optionb = document.querySelector("#optionb");
let optionc = document.querySelector("#optionc");
let optiond = document.querySelector("#optiond");
let nextQues1= document.querySelector("#nextQues1");
let choice_que1 = document.querySelectorAll(".choice_que1");
let profitBtn = document.querySelector("#log4");
let ques1 = document.querySelector("#questionScreen1");
let ques0 = document.querySelector("#questionScreen");
let score1 = document.querySelector("#scorebox1");
let result1 = document.querySelector("#resultScreen");
let main1 = document.querySelector("#main");
let startAgain1 = document.querySelector("#startagain");
let home1 = document.querySelector("#home");


let index1 = 0;
let timer1 = 0;
let interval1 = 0;
let correct1 = 0;

//For Timer//
let countDown1 = ()=>{
    if(timer1 === 20){
        clearInterval(interval1);
        nextQues1.click();
    }
    else{
        timer1++;
        time1.innerText = timer1;
    }
}
interval1 = setInterval(countDown1,1000);

//What happens when pipe and cisterns button is clicked//
profitBtn.addEventListener("click", ()=>{
    ques1.style.display = "block";
    
   result1.style.display = "none";
   main1.style.display = "none";
  
   interval1 = setInterval(countDown1, 1000);
   loadData1();
   choice_que1.forEach(removeActive =>{
      removeActive.classList.remove("active1");
  
   })
  });

//For loading Questions//
let loadData1 = ()=>{
    quesNo1.innerText = index1 + 1 + "." ;
    quesText1.innerText = quiz1[index1].question;
    optiona.innerText = quiz1[index1].choice1;
    optionb.innerText = quiz1[index1].choice2;
    optionc.innerText = quiz1[index1].choice3;
    optiond.innerText = quiz1[index1].choice4;

    timer1 = 0;
}
loadData1();

//What happens when choice button is clicked//
choice_que1.forEach((choices,choiceNo) =>{
    choices.addEventListener("click" , ()=>{
        choices.classList.add("active1");
        if(choiceNo === quiz1[index1].answer){
             correct1++;
        }
        else{
            correct1 += 0;
        }
        clearInterval(interval1);

        for(i = 0; i<= 3; i++){
            choice_que1[i].classList.add("disabled1");
        }
    })
});

//What happens when next question button is clicked//
nextQues1.addEventListener("click" ,()=>{
    if(index1 !== quiz1.length - 1){
        index1++;
        choice_que1.forEach(removeActive =>{
            removeActive.classList.remove("active1");
        })
        loadData1();
        clearInterval(interval1);
        interval1 = setInterval(countDown1, 1000);
    }
      else{
        index1 = 0;
        clearInterval(interval1);
        ques1.style.display = "none";
        result1.style.display = "block";
       
      } 
      for(i = 0; i<=3; i++){
        choice_que1[i].classList.remove("disabled1");
      }
});
    
//What happens when start again button is clicked//
startAgain1.addEventListener("click" , () =>{
    ques1.style.display = "block";
    result1.style.display = "none";
});
//What happens when home button is clicked//
home1.addEventListener("click" , () =>{
    main1.style.display = "block";
    result1.style.display = "none";
});


