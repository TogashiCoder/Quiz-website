let progress_Dom = document.getElementById("progressId");
let Next_button_Dom = document.getElementById("button_Id");
let Question_numbe_Dom = document.getElementById("Ques-numbe_id");
const countDownDom = document.getElementById("timer-Display");
let counter_image_dom = document.getElementById("counter-id");
let countdownSound_dom = document.getElementById("countdownSound");
let bell_ring_sound_dom = document.getElementById("bell-ring-sound");
let last_10_seconds_dom = document.getElementById("last-10-seconds");
let the_Question_id_display_Dom = document.getElementById("the-Question_id-display");
let label_1_Dom =document.getElementById("label-1");
let label_2_Dom =document.getElementById("label-2");
let label_3_Dom =document.getElementById("label-3");
let label_4_Dom =document.getElementById("label-4");
let button_answer_1_DOM = document.getElementById("Q-answer-1");
let button_answer_2_DOM = document.getElementById("Q-answer-2");
let button_answer_3_DOM = document.getElementById("Q-answer-3");
let button_answer_4_DOM = document.getElementById("Q-answer-4");

// ==================================================================
let result;
// ==================================================================


let Data = 
{
    Tech_Questions: 
    [
        {
            question: "What does the 'transition' property in CSS control?",
            answers: [
                "Animation",
                "Transformation",
                "Interaction",
                "Styling"
            ]
        },
        {
            question: "What does the 'outline' property in CSS control?",
            answers: [
                "Padding",
                "Visibility",
                "Focus",
                "Border"
            ]
        },
        {
            question: "What does the 'box-sizing' property in CSS control?",
            answers: [
                "Content",
                "Layout",
                "Sizing",
                "Margins"
            ]
        },
        {
            question: " What does the 'display' property in CSS control?",
            answers: [
                "Visibility",
                "Flexibility",
                "Layout",
                "Positioning"
            ]
        },
        {
            question: "What does HTML stand for?",
            answers: [
                "HyperText Markup Language",
                "High Tech Markup Language",
                "Hyperlink and Text Markup Language",
                "HyperTransfer Markup Language"
            ]
        },
        {
            question: "What is the main purpose of a constructor in object-oriented programming?",
            answers: [
                "To destroy objects",
                "To create objects",
                "To override methods",
                "To manage data types"
            ]
        },
        {
            question: "What is the difference between '==' and '===' operators in JavaScript?",
            answers: [
                "'==' compares values, '===' types too.",
                "'==' values & types, '===' values.",
                "No difference, both same.",
                "'==' values, '===' values & types."
            ]
        },
        {
            question: "Which tag is used to create a line break in HTML?",
            answers: ["br","lb","break","linebreak"]
        }      
    ],
    English_Questions: [
        {
            question: "Our father __ dinner for us every day.",
            answers: ["cook", "coocked", "cooks", "cooking"]
        },
        {
            question: "These cars __ beautiful, but the price __ too high.",
            answers: ["is-is", "is-are", "are-are", "are-is"]
        },
        {
            question: "Mr Kelley __ to church every Sunday.",
            answers: ["go", "going", "goes", "goed"]
        },
        {
            question: "An hour ago, our train __ at platform 6.",
            answers: ["arrive", "arriving", "arrived", "arrivd"]
        }
    ],
    IQ_Questions: [
        {
            question: "A bat and a ball together cost $1.10. The bat costs $1 more than the ball. How much does the ball cost?",
            answers: ["$0.10", "$0.05", "$1.00", "$0.90"]
        },
        {
            question: "How many months have 28 days?",
            answers: ["Only February", "All 12 months", "Only January", "None, it's a trick question"]
        },
        {
            question: "If you divide 30 by half and then add ten, what do you get?",
            answers: ["5", "20", "25", "70"]
        },
        {
            question: "A farmer has 15 cows. All but 8 die. How many are left?",
            answers: ["7", "15", "8", "0"]
        }
    ]
};


 








let switcher = 0;
Next_button_Dom.addEventListener('click',function(){

    ++switcher;
    switch(switcher)
    {
        case 0:
            the_Question_id_display_Dom.innerHTML =`${Data.Tech_Questions[0].question}`;
            label_1_Dom.innerHTML =`${Data.Tech_Questions[0].answers[0]}`;
            label_2_Dom.innerHTML =`${Data.Tech_Questions[0].answers[1]}`;
            label_3_Dom.innerHTML =`${Data.Tech_Questions[0].answers[2]}`;
            label_4_Dom.innerHTML =`${Data.Tech_Questions[0].answers[3]}`;
            //====set up the values (question1)
            button_answer_1_DOM.value = '1';
            button_answer_2_DOM.value = '-1';
            button_answer_3_DOM.value = '-1';
            button_answer_4_DOM.value = '-1';

          break;
        case 1 :
            the_Question_id_display_Dom.innerHTML =`${Data.Tech_Questions[1].question}`;
            label_1_Dom.innerHTML =`${Data.Tech_Questions[1].answers[0]}`;
            label_2_Dom.innerHTML =`${Data.Tech_Questions[1].answers[1]}`;
            label_3_Dom.innerHTML =`${Data.Tech_Questions[1].answers[2]}`;
            label_4_Dom.innerHTML =`${Data.Tech_Questions[1].answers[3]}`;
            //====set up the values (question2)
            button_answer_1_DOM.value = '-1';
            button_answer_2_DOM.value = '-1';  //box sizing
            button_answer_3_DOM.value = '-1';
            button_answer_4_DOM.value = '1';
          break;
        case 2 :
            the_Question_id_display_Dom.innerHTML =`${Data.Tech_Questions[2].question}`;
            label_1_Dom.innerHTML =`${Data.Tech_Questions[2].answers[0]}`;
            label_2_Dom.innerHTML =`${Data.Tech_Questions[2].answers[1]}`;
            label_3_Dom.innerHTML =`${Data.Tech_Questions[2].answers[2]}`;
            label_4_Dom.innerHTML =`${Data.Tech_Questions[2].answers[3]}`;
            //====set up the values (question3)
            button_answer_1_DOM.value = '-1';
            button_answer_2_DOM.value = '-1';
            button_answer_3_DOM.value = '1';   //display question
            button_answer_4_DOM.value = '-1';
          break;
        case 3 :
            the_Question_id_display_Dom.innerHTML =`${Data.Tech_Questions[3].question}`;
            label_1_Dom.innerHTML =`${Data.Tech_Questions[3].answers[0]}`;
            label_2_Dom.innerHTML =`${Data.Tech_Questions[3].answers[1]}`;
            label_3_Dom.innerHTML =`${Data.Tech_Questions[3].answers[2]}`;
            label_4_Dom.innerHTML =`${Data.Tech_Questions[3].answers[3]}`;
             //====set up the values (question4)
             button_answer_1_DOM.value = '1';   //HYPER TEXT QUESTION
             button_answer_2_DOM.value = '-1';
             button_answer_3_DOM.value = '-1';
             button_answer_4_DOM.value = '-1';
          break;
        case 4 :
            the_Question_id_display_Dom.innerHTML =`${Data.Tech_Questions[4].question}`;
            label_1_Dom.innerHTML =`${Data.Tech_Questions[4].answers[0]}`;
            label_2_Dom.innerHTML =`${Data.Tech_Questions[4].answers[1]}`;
            label_3_Dom.innerHTML =`${Data.Tech_Questions[4].answers[2]}`;
            label_4_Dom.innerHTML =`${Data.Tech_Questions[4].answers[3]}`;
             //====set up the values (question5)
             button_answer_1_DOM.value = '-1';
             button_answer_2_DOM.value = '1';  // object op 
             button_answer_3_DOM.value = '-1';
             button_answer_4_DOM.value = '-1';
          break;
        case 5 :
            the_Question_id_display_Dom.innerHTML =`${Data.Tech_Questions[5].question}`;
            label_1_Dom.innerHTML =`${Data.Tech_Questions[5].answers[0]}`;
            label_2_Dom.innerHTML =`${Data.Tech_Questions[5].answers[1]}`;
            label_3_Dom.innerHTML =`${Data.Tech_Questions[5].answers[2]}`;
            label_4_Dom.innerHTML =`${Data.Tech_Questions[5].answers[3]}`;
            //====set up the values (question6)
            button_answer_1_DOM.value = '1'; // === vs ==
            button_answer_2_DOM.value = '-1';
            button_answer_3_DOM.value = '-1';
            button_answer_4_DOM.value = '-1';
          break;
        case 6 :
            the_Question_id_display_Dom.innerHTML =`${Data.Tech_Questions[6].question}`;
            label_1_Dom.innerHTML =`${Data.Tech_Questions[6].answers[0]}`;
            label_2_Dom.innerHTML =`${Data.Tech_Questions[6].answers[1]}`;
            label_3_Dom.innerHTML =`${Data.Tech_Questions[6].answers[2]}`;
            label_4_Dom.innerHTML =`${Data.Tech_Questions[6].answers[3]}`;
            //====set up the values (question7)
            button_answer_1_DOM.value = '1';        // breaklin <br>
            button_answer_2_DOM.value = '-1';
            button_answer_3_DOM.value = '-1';
            button_answer_4_DOM.value = '-1';
        break;
        case 7 :
            the_Question_id_display_Dom.innerHTML =`${Data.Tech_Questions[7].question}`;
            label_1_Dom.innerHTML =`${Data.Tech_Questions[7].answers[0]}`;
            label_2_Dom.innerHTML =`${Data.Tech_Questions[7].answers[1]}`;
            label_3_Dom.innerHTML =`${Data.Tech_Questions[7].answers[2]}`;
            label_4_Dom.innerHTML =`${Data.Tech_Questions[7].answers[3]}`;
            //====set up the values (question8)
            button_answer_1_DOM.value = '-1';   //cookes
            button_answer_2_DOM.value = '-1';
            button_answer_3_DOM.value = '1';
            button_answer_4_DOM.value = '-1';
          break;
        case 8 :

            the_Question_id_display_Dom.innerHTML =`${Data.English_Questions[0].question}`;
            label_1_Dom.innerHTML =`${Data.English_Questions[0].answers[0]}`;
            label_2_Dom.innerHTML =`${Data.English_Questions[0].answers[1]}`;
            label_3_Dom.innerHTML =`${Data.English_Questions[0].answers[2]}`;
            label_4_Dom.innerHTML =`${Data.English_Questions[0].answers[3]}`;
            //====set up the values (question9)
            button_answer_1_DOM.value = '-1';   //CARS and price
            button_answer_2_DOM.value = '-1';
            button_answer_3_DOM.value = '-1';
            button_answer_4_DOM.value = '1';

            
          break;
        case 9:
            the_Question_id_display_Dom.innerHTML =`${Data.English_Questions[1].question}`;
            label_1_Dom.innerHTML =`${Data.English_Questions[1].answers[0]}`;
            label_2_Dom.innerHTML =`${Data.English_Questions[1].answers[1]}`;
            label_3_Dom.innerHTML =`${Data.English_Questions[1].answers[2]}`;
            label_4_Dom.innerHTML =`${Data.English_Questions[1].answers[3]}`;
            //====set up the values (question10)
            button_answer_1_DOM.value = '-1';   // to church
            button_answer_2_DOM.value = '-1';
            button_answer_3_DOM.value = '1';
            button_answer_4_DOM.value = '-1';

          break;
        case 10 :
            the_Question_id_display_Dom.innerHTML =`${Data.English_Questions[2].question}`;
            label_1_Dom.innerHTML =`${Data.English_Questions[2].answers[0]}`;
            label_2_Dom.innerHTML =`${Data.English_Questions[2].answers[1]}`;
            label_3_Dom.innerHTML =`${Data.English_Questions[2].answers[2]}`;
            label_4_Dom.innerHTML =`${Data.English_Questions[2].answers[3]}`;
             //====set up the values (question11)
             button_answer_1_DOM.value = '-1';   // arrived
             button_answer_2_DOM.value = '-1';
             button_answer_3_DOM.value = '1';
             button_answer_4_DOM.value = '-1';
          break;
        case 11 :
            the_Question_id_display_Dom.innerHTML =`${Data.English_Questions[3].question}`;
            label_1_Dom.innerHTML =`${Data.English_Questions[3].answers[0]}`;
            label_2_Dom.innerHTML =`${Data.English_Questions[3].answers[1]}`;
            label_3_Dom.innerHTML =`${Data.English_Questions[3].answers[2]}`;
            label_4_Dom.innerHTML =`${Data.English_Questions[3].answers[3]}`;
            //====set up the values (question12)
            button_answer_1_DOM.value = '1';   // cost 
            button_answer_2_DOM.value = '-1';
            button_answer_3_DOM.value = '-1';
            button_answer_4_DOM.value = '-1';
          break;
        case 12 :
            the_Question_id_display_Dom.innerHTML =`${Data.IQ_Questions[0].question}`;
            label_1_Dom.innerHTML =`${Data.IQ_Questions[0].answers[0]}`;
            label_2_Dom.innerHTML =`${Data.IQ_Questions[0].answers[1]}`;
            label_3_Dom.innerHTML =`${Data.IQ_Questions[0].answers[2]}`;
            label_4_Dom.innerHTML =`${Data.IQ_Questions[0].answers[3]}`;
             //====set up the values (question13)
             button_answer_1_DOM.value = '1';   // 28 days
             button_answer_2_DOM.value = '-1';
             button_answer_3_DOM.value = '-1';
             button_answer_4_DOM.value = '-1';
          break;
        case 13 :
            the_Question_id_display_Dom.innerHTML =`${Data.IQ_Questions[1].question}`;
            label_1_Dom.innerHTML =`${Data.IQ_Questions[1].answers[0]}`;
            label_2_Dom.innerHTML =`${Data.IQ_Questions[1].answers[1]}`;
            label_3_Dom.innerHTML =`${Data.IQ_Questions[1].answers[2]}`;
            label_4_Dom.innerHTML =`${Data.IQ_Questions[1].answers[3]}`;
             //====set up the values (question14)
             button_answer_1_DOM.value = '-1';   // DIVIDE QUestion
             button_answer_2_DOM.value = '-1';
             button_answer_3_DOM.value = '1';
             button_answer_4_DOM.value = '-1';
          break;
        case 14 :
            the_Question_id_display_Dom.innerHTML =`${Data.IQ_Questions[2].question}`;
            label_1_Dom.innerHTML =`${Data.IQ_Questions[2].answers[0]}`;
            label_2_Dom.innerHTML =`${Data.IQ_Questions[2].answers[1]}`;
            label_3_Dom.innerHTML =`${Data.IQ_Questions[2].answers[2]}`;
            label_4_Dom.innerHTML =`${Data.IQ_Questions[2].answers[3]}`;
            //====set up the values (question15)
            button_answer_1_DOM.value = '1';   // COWS
            button_answer_2_DOM.value = '-1';
            button_answer_3_DOM.value = '-1';
            button_answer_4_DOM.value = '-1';
          break;
        case 15 :
            the_Question_id_display_Dom.innerHTML =`${Data.IQ_Questions[3].question}`;
            label_1_Dom.innerHTML =`${Data.IQ_Questions[3].answers[0]}`;
            label_2_Dom.innerHTML =`${Data.IQ_Questions[3].answers[1]}`;
            label_3_Dom.innerHTML =`${Data.IQ_Questions[3].answers[2]}`;
            label_4_Dom.innerHTML =`${Data.IQ_Questions[3].answers[3]}`;
            //====set up the values (question15)
            button_answer_1_DOM.value = '0';   // COWS
            button_answer_2_DOM.value = '0';
            button_answer_3_DOM.value = '0';
            button_answer_4_DOM.value = '0';
          break;
    }
    
    
    


    //Progress bar logic
    let current_Width = parseFloat(progress_Dom.style.width) || 0;//return fallback 0 if the width:inherit or insitial
    let new_width = `${current_Width + 6.25}%`; //set 6.25% for every question
    progress_Dom.style.width = new_width;  // update the width 

    // logic 'change the question number
    let nextNum = parseInt(Question_numbe_Dom.innerHTML) + 1;
    if(nextNum <= 16)
    {
        Question_numbe_Dom.innerHTML = nextNum;
    }
    else{
        nextNum =16;
    }


    

})





let colorToggle = true
let startingMinutes = 1; // set here the minutes
let time = startingMinutes * 60; // get seconds

setInterval(updateCounterDown, 1000);

function updateCounterDown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    // Add leading zero if seconds is less than 10
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // countDownDom.innerHTML = `${minutes}:${seconds}`;
    countDownDom.innerHTML = `${seconds}`;
    //play counter sound
    countdownSound_dom.play();
    if (time > 0) {
        time--;
    } else {
        // Countdown has reached zero, you can handle this case here
        clearInterval();
        //stop the counter sound effect
        countdownSound_dom.pause();
        //play the second sound effect
        bell_ring_sound_dom.play();
        setTimeout(function(){
            bell_ring_sound_dom.pause();
        },3000)
    }

    //change the color to red when time <= 10
    // Toggle between red and black color every second
    if (time <= 10 && time > 0) {
        //play audio of last 10 second
        last_10_seconds_dom.play();
        //pause it
        setTimeout(function(){last_10_seconds_dom.pause();},10000)
        if (colorToggle) {
            countDownDom.style.color = 'red';
            colorToggle = false;
        } else {
            countDownDom.style.color = 'black';
            colorToggle = true;
        }
    } else {
        // Reset color to black when not in the countdown range
        countDownDom.style.color = 'black';
        colorToggle = true;
    }

    //image counter rotation
    counter_image_dom.style.transition = 'transform 58s linear';
    counter_image_dom.style.transform = 'rotate(4000deg)';
}