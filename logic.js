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


/******************************************************************/


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
            button_answer_1_DOM.value = '-1';
            button_answer_2_DOM.value = '-1';
            button_answer_3_DOM.value = '-1';
            button_answer_4_DOM.value = '1';

          break;
        case 1 :
            the_Question_id_display_Dom.innerHTML =`${Data.Tech_Questions[1].question}`;
            label_1_Dom.innerHTML =`${Data.Tech_Questions[1].answers[0]}`;
            label_2_Dom.innerHTML =`${Data.Tech_Questions[1].answers[1]}`;
            label_3_Dom.innerHTML =`${Data.Tech_Questions[1].answers[2]}`;
            label_4_Dom.innerHTML =`${Data.Tech_Questions[1].answers[3]}`;
            //====set up the values (question2)
            button_answer_1_DOM.value = '-1';
            button_answer_2_DOM.value = '-1';
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
            button_answer_1_DOM.value = '-166';
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
            //====set up the values (question8)
            button_answer_1_DOM.value = '-100';
            button_answer_2_DOM.value = '-100';
            button_answer_3_DOM.value = '-100';
            button_answer_4_DOM.value = '1';

            
          break;
        case 9:
            the_Question_id_display_Dom.innerHTML =`${Data.English_Questions[1].question}`;
            label_1_Dom.innerHTML =`${Data.English_Questions[1].answers[0]}`;
            label_2_Dom.innerHTML =`${Data.English_Questions[1].answers[1]}`;
            label_3_Dom.innerHTML =`${Data.English_Questions[1].answers[2]}`;
            label_4_Dom.innerHTML =`${Data.English_Questions[1].answers[3]}`;

          break;
        case 10 :
            the_Question_id_display_Dom.innerHTML =`${Data.English_Questions[2].question}`;
            label_1_Dom.innerHTML =`${Data.English_Questions[2].answers[0]}`;
            label_2_Dom.innerHTML =`${Data.English_Questions[2].answers[1]}`;
            label_3_Dom.innerHTML =`${Data.English_Questions[2].answers[2]}`;
            label_4_Dom.innerHTML =`${Data.English_Questions[2].answers[3]}`;
          break;
        case 11 :
            the_Question_id_display_Dom.innerHTML =`${Data.English_Questions[3].question}`;
            label_1_Dom.innerHTML =`${Data.English_Questions[3].answers[0]}`;
            label_2_Dom.innerHTML =`${Data.English_Questions[3].answers[1]}`;
            label_3_Dom.innerHTML =`${Data.English_Questions[3].answers[2]}`;
            label_4_Dom.innerHTML =`${Data.English_Questions[3].answers[3]}`;
          break;
        case 12 :
            the_Question_id_display_Dom.innerHTML =`${Data.IQ_Questions[0].question}`;
            label_1_Dom.innerHTML =`${Data.IQ_Questions[0].answers[0]}`;
            label_2_Dom.innerHTML =`${Data.IQ_Questions[0].answers[1]}`;
            label_3_Dom.innerHTML =`${Data.IQ_Questions[0].answers[2]}`;
            label_4_Dom.innerHTML =`${Data.IQ_Questions[0].answers[3]}`;
          break;
        case 13 :
            the_Question_id_display_Dom.innerHTML =`${Data.IQ_Questions[1].question}`;
 
            label_1_Dom.innerHTML =`${Data.IQ_Questions[1].answers[0]}`;
            label_2_Dom.innerHTML =`${Data.IQ_Questions[1].answers[1]}`;
            label_3_Dom.innerHTML =`${Data.IQ_Questions[1].answers[2]}`;
            label_4_Dom.innerHTML =`${Data.IQ_Questions[1].answers[3]}`;
          break;
        case 14 :
            the_Question_id_display_Dom.innerHTML =`${Data.IQ_Questions[2].question}`;
            label_1_Dom.innerHTML =`${Data.IQ_Questions[2].answers[0]}`;
            label_2_Dom.innerHTML =`${Data.IQ_Questions[2].answers[1]}`;
            label_3_Dom.innerHTML =`${Data.IQ_Questions[2].answers[2]}`;
            label_4_Dom.innerHTML =`${Data.IQ_Questions[2].answers[3]}`;
          break;
        case 15 :
            the_Question_id_display_Dom.innerHTML =`${Data.IQ_Questions[3].question}`;
            label_1_Dom.innerHTML =`${Data.IQ_Questions[3].answers[0]}`;
            label_2_Dom.innerHTML =`${Data.IQ_Questions[3].answers[1]}`;
            label_3_Dom.innerHTML =`${Data.IQ_Questions[3].answers[2]}`;
            label_4_Dom.innerHTML =`${Data.IQ_Questions[3].answers[3]}`;
          break;
    }



                                         /********************************************/
//                                                    A N I M A T I O N 

//Progress Bar Logic 
 
let progress_Dom = document.getElementById("progressId"); // DOM by id 

let Actu_width = parseFloat(progress_DOM.style.width) || 0; //return fallback 0 if the width:inherit or insitial
let Nouv_width = `${Actu_width + 6.25}%`
progress_DOM.style.width= Nouv_width; //mise a jour du width 


// logic changer num du Question 

let Question_numbe_Dom = document.getElementById("Ques-numbe_id"); // DOM by id 

let nextNum = parseInt(Question_numbe_Dom.innerHTML) + 1;
if(nextNum <= 16){
    Question_numbe_Dom.innerHTML = nextNum ;
}
else{
    nextNum = 16 ;
}

// Time 
const countDownDom = document.getElementById("timer-Display");
let countdownSound_dom = document.getElementById("countdownSound");
let bell_ring_sound_dom = document.getElementById("bell-ring-sound");
let last_10_seconds_dom = document.getElementById("last-10-seconds");


let colorToggle = true 
let startingMinutes = 1 ;
let time = startingMinutes * 60 // conv en sec

setInterval(updateCounterDown , 1000);

function updateCounterDown(){
    let minutes = Math.floor(time/60);
    let secondes = time % 60;

    secondes = secondes <10 ? "0" + secondes : secondes ;
    countDownDom.innerHTML = `${secondes}`;
    countdownSound_dom.play();
    if(time>0){
        time -- ;
    } else {
        clearInterval();
        countdownSound_dom.pause();
        setTimeout(function(){
            bell_ring_sound_dom.pause();
        },3000)
    }

    // changer la couleur du chrono si time <10 (Toggle red - black)
    if(time <= 10 && time > 0 ){
        last_10_seconds_dom.play();

        setTimeout(function(){last_10_seconds_dom.pause();},10000)
        if(colorToggle){
            countDownDom.style.color = 'red' ; 
            colorToggle = false ;
        }
        else{
            countDownDom.style.color = 'black' ;
            colorToggle = true ;
        }

    } else{
        countDownDom.style.color = 'black' ; 
        colorToggle = true ; 
    }

    // image Rotation conteur 

let counter_image_dom = document.getElementById("counter-id");

counter_image_dom.style.transition = 'transform 58s linear';
counter_image_dom.style.transform = rotate(4000deg); // all 360° 




    

}
