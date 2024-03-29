let progress_Dom = document.getElementById("progressId");
let Next_button_Dom = document.getElementById("button_Id");
let Question_numbe_Dom = document.getElementById("Ques-numbe_id");
const countDownDom = document.getElementById("timer-Display");
let counter_image_dom = document.getElementById("counter-id");
let countdownSound_dom = document.getElementById("countdownSound");
let bell_ring_sound_dom = document.getElementById("bell-ring-sound");
let last_10_seconds_dom = document.getElementById("last-10-seconds");
let Question_display_Dom = document.getElementById("the-Question_id-display");
let options_display_Dom =document.getElementsByTagName("label");
let allbuttons_global_dom =document.querySelectorAll(".btn-global");
let labels_dom = document.getElementsByTagName('label');
let scoreResultButton_dom = document.querySelector('#score-link');
let button_score_dom = document.querySelector('#show-score');
// ===========================Variables=======================================
let score = 0;
let totalQuestions = 16;
let currentQuestion = 0;
// =============================Data Objects=====================================

let data = [
    {
            question: "What does the 'transition' property in CSS control?",
            options: [
                "Animation",
                "Transformation",
                "Interaction",
                "Styling"
            ],
            correctAnswer:"Animation"
    },
    {
            question: "What does the 'outline' property in CSS control?",
            options: [
                "Padding",
                "Visibility",
                "Focus",
                "Border"
            ],
            correctAnswer:"Border"
    },
    {
            question: "What does the 'box-sizing' property in CSS control?",
            options: [
                "Content",
                "Layout",
                "Sizing",
                "Margins"
            ],
            correctAnswer:"Sizing"

    },
    {
            question: " What does the 'display' property in CSS control?",
            options: [
                "Visibility",
                "Flexibility",
                "Layout",
                "Positioning"
            ],
            correctAnswer:"Layout"
    },
    {
            question: "What does HTML stand for?",
            options: [
                "HyperText Markup Language",
                "High Tech Markup Language",
                "Hyperlink and Text Markup",
                "HyperTransfer Markup"
            ],
            correctAnswer:"HyperText Markup Language"

    },
     {
            question: "What is the main purpose of a constructor in object-oriented programming?",
            options: [
                "To destroy objects",
                "To create objects",
                "To override methods",
                "To manage data types"
            ],
            correctAnswer:"To create objects"

    },
    {
            question: "What is the difference between '==' and '===' operators in JavaScript?",
            options: [
                "'==' compares values, '===' types too.",
                "'==' values & types, '===' values.",
                "No difference, both same.",
                "'==' values, '===' values & types."
            ],
            correctAnswer:"'==' compares values, '===' types too."

    },
    {
            question: "Which tag is used to create a line break in HTML?",
            options: ["br","lb","break","linebreak"],
            correctAnswer:"br"

    },      
    {
            question: "Our father __ dinner for us every day.",
            options: ["cook", "coocked", "cooks", "cooking"],
            correctAnswer:"cooks"
    },
    {
            question: "These cars __ beautiful, but the price __ too high.",
            options: ["is-is", "is-are", "are-are", "are-is"],
            correctAnswer:"are-is"
    },
    {
            question: "Mr Kelley __ to church every Sunday.",
            options: ["go", "going", "goes", "goed"],
            correctAnswer:"goes"
    },
    {
            question: "An hour ago, our train __ at platform 6.",
            options: ["arrive", "arriving", "arrived", "arrivd"],
            correctAnswer:"arrived"

    },
    {
            question: "A bat and a ball together cost $1.10. The bat costs $1 more than the ball. How much does the ball cost?",
            options: ["$0.10", "$0.05", "$1.00", "$0.90"],
            correctAnswer:"$0.10"
    },
    {
            question: "How many months have 28 days?",
            options: ["Only February", "All 12 months", "Only January", "None, it's a trick question"],
            correctAnswer:"Only February"

    },
    {
            question: "If you divide 30 by half and then add ten, what do you get?",
            options: ["5", "20", "25", "70"],
            correctAnswer:"25"
    },
    {
            question: "A farmer has 15 cows. All but 8 die. How many are left?",
            options: ["7", "15", "8", "0"],
            correctAnswer:"7"
    }
]

// ====================steps==============================================
Timer();
Next_button_Dom.addEventListener('click',next_button_logic);
disableNextButton();
// ====================steps==============================================


let labelsArray = Array.from(labels_dom);
labelsArray.forEach(function(label) {
    label.addEventListener('click', function() {
        label.style.backgroundColor ='#1DAC00';
        label.style.color ='white';
        let selectedAnswer = label.innerText;
        let correctAnswer = data[currentQuestion].correctAnswer;
        console.log(label.innerText);
        console.log(currentQuestion);
        if (selectedAnswer === correctAnswer) {
            score++;
            console.log('Correct! Score:', score);
        } else {
            console.log('Incorrect');
            // You can add code here for incorrect answers
        }

        disableOptions(); // Disable options after choosing an answer

        // enableNextButton();//enable the next button

    });
});

// ============================main functions======================================


function answer_Button(button){
    checkAnswer(button);
}

function next_button_logic()
{
    PrintQuestion();
    Q_Num_changer();
    progess_Bar();
    showScore();
    enableOptions(); // Enable options after clicking Next button
    resetOptionsBackground();

}

// =======================divided function===========================================

// Function to disable all options
function disableOptions()
 {
    enableNextButton();
     labelsArray.forEach(function(label) {
         label.style.pointerEvents = 'none'; // Disable pointer events
         
        })
    };
    
    // Function to enable all options
    function enableOptions() {
        disableNextButton();
        labelsArray.forEach(function(label) {
            label.style.pointerEvents = 'auto'; // Enable pointer events
    });
}

// Function to reset background color of all options
function resetOptionsBackground() {
    labelsArray.forEach(function(label) {
        label.style.backgroundColor = '#E1E9E8';
        label.style.color ='black';

    });
}


function enableNextButton() {
    Next_button_Dom.style.backgroundColor ='#5ceb3f'
    // Enable the Next button
    Next_button_Dom.disabled = false;
}

function disableNextButton(){
    Next_button_Dom.style.backgroundColor ='grey'
    Next_button_Dom.disabled = true;

}




function Q_Num_changer()
{
    let nextNum = parseInt(Question_numbe_Dom.innerHTML) + 1;
    if(nextNum <= 16)
    {
        Question_numbe_Dom.innerHTML = nextNum;
    }
    else{
        nextNum =16;
    }
}


function progess_Bar(){
    let current_Width = parseFloat(progress_Dom.style.width) || 0;//return fallback 0 if the width:inherit or insitial
    let new_width = `${current_Width + 6.25}%`; //set 6.25% for every question
    progress_Dom.style.width = new_width;  // update the width 
    // logic 'change the question number
    
}



function Timer()
{
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
        document.addEventListener('click', function() {
            countdownSound_dom.play();
        });
          


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
}




function PrintQuestion() {
    let question = data[currentQuestion];
    Question_display_Dom.innerText = question.question;

    for (let i = 0; i < options_display_Dom.length; i++) {
        options_display_Dom[i].innerHTML = question.options[i];
    }

}





function showScore() 
{
    // Check if we have reached the end of the questions
    if (currentQuestion < totalQuestions - 1) {
        currentQuestion++; // Move to the next question
        PrintQuestion(); // Update the UI with the next question
    } else 
    {
        // Quiz completed, show score or do something else
        alert("Quiz completed! Your score is: " + score);
        enableScoreButton();
    }
}


function showResult() {
    let win = 'Congratulation.html';
    let lose = 'lose.html';

    if (score >= 10) {
        scoreResultButton_dom.setAttribute('href', win);
    } else {
        scoreResultButton_dom.setAttribute('href', lose);
    }
}


function enableScoreButton() {
    button_score_dom.style.visibility = 'visible';
    showResult();
}