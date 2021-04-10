//declare all variables
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var quizQuestion = document.getElementById("quizQuestion");
var quizImg = document.getElementById("quizImg");
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");
var scoreBlock = document.getElementById("scoreBlock");
var scoreMessage = document.getElementById("scoreMessage");
var quizAgain = document.getElementById("quizAgain");
var choices = document.getElementById("choices");
var choiceResponse = document.getElementById("choiceResponse");
var score = 0;

//questions function so our getQuestion function later can get the right value from array

let questions = [{
    question: "Different types of arrays with regard to beam pointing are: ",
    
    choiceA: "Broadside",
    choiceB: "End fire",
    choiceC: "Collinear",
    choiceD: "All of the above",
    correctAnswer: "D"
}, {
    question: "Phase difference in broad side is ",
    
    choiceA: "α = 90",
    choiceB: "α = 180",
    choiceC: "α = 270",
    choiceD: "α = 0",
    correctAnswer: "D"
}, {
    question: "What is the wavelength of Super high frequency (SHF) especially used in Radar & satellite communication?",
    
    choiceA: "1 m – 10 m",
    choiceB: "1 cm – 10 cm",
    choiceC: "10 cm – 1 m",
    choiceD: "0.1 cm – 1 cm",
    correctAnswer: "B"
}, {
    question: "What is the possible range of height for the occurrence of sporadic E-region with respect to normal E-region?",
    
    choiceA: "20 km – 50 km",
    choiceB: "45 km – 85 km",
    choiceC: "90 km – 130 km",
    choiceD: "140 km – 200 km",
    correctAnswer: "C"
}, {
    question: " At which angles does the front to back ratio specify an antenna gain?",
    
    choiceA: "0° & 180°",
    choiceB: "90° & 180°",
    choiceC: "180° & 270°",
    choiceD: "180° & 360°",
    correctAnswer: "A"
}, {
    question: "The radiating pattern of single element multiplied by the array factor simply gives the __________",
    
    choiceA: "Pattern multiplication",
    choiceB: "Normalized array factor",
    choiceC: "Beamwidth of the array",
    choiceD: "Field strength of the array",
    correctAnswer: "A"
}, {
    question: "Which of the following statement about antenna array is false?",
    
    choiceA: "Field pattern is the product of individual elements in array",
    choiceB: "Field pattern is the sum of individual elements in array",
    choiceC: "Resultant field is the vector superposition of the fields from individual elements in array",
    choiceD: "High directivity can be achieved for long distance communications",
    correctAnswer: "B"
}, {
    question: "The knowledge of which parameter is sufficient for deriving the time varying electromagnetic field?",
    
    choiceA: "Electric field intensity",
    choiceB: "Magnetic field intensity",
    choiceC: "Current density",
    choiceD: "Power density",
    correctAnswer: "C"
}, {
    question: "Which waveform plays a crucial role in determining the radiation pattern of the dipole/wire antennas?",
    
    choiceA: "Current",
    choiceB: "Voltage",
    choiceC: "Frequency",
    choiceD: "Phase",
    correctAnswer: "A"
}, {
    question: "According to the directivity of a small loop, which value of ‘θ’ contributes to achieve the maximum value of radiation intensity (Umax)?",
    
    choiceA: "0°",
    choiceB: "90°",
    choiceC: "180°",
    choiceD: "270°",
    correctAnswer: "B"
}, ];


var questionIndex = 0;


// getQuestion function

function getQuestion() {

    choiceResponse.style.display = "none";
    let q = questions[questionIndex];
    quizQuestion.innerHTML = "<p>Question " +(questionIndex+1) + ": " + q.question + "</p>";
    // quizImg.innerHTML = "<img src=" + q.imgSrc + ">";
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;
    choices.style.display = "block";
}


// start quiz

function beginQuiz() {
    start.style.display ="none";
    getQuestion();
    quiz.style.display = "block";
}

// show score function

function showScore() {
    quiz.style.display = "none";
    scoreBlock.style.display = "block";
    scoreBlock.innerHTML = "<p> You scored " + score + " out of 10!</p>";

    if (score < 4) {
        scoreMessage.innerHTML = "<p>Not so good! Time for some revision.</p>";
    }
    else if (score < 8) {
        scoreMessage.innerHTML = "<p>Pretty good! But still room for improvement.</p>"
    }
    else {
        scoreMessage.innerHTML = "<p>Great work! You really know the concepts!!</p>"
    }
    scoreMessage.style.display = "block";
    quizAgain.style.display = "block";
}


//function to check if answer is correct

function check(answer) {
    if (questionIndex < questions.length - 1) {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correct!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
        else {
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Incorrect! Option " + questions[questionIndex-1].correctAnswer +  " was the correct answer. </p>";
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
    }
    else {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correct!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
        else {
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Incorrect!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
    }
}

function restartQuiz() {
    start.style.display = "block";
    scoreBlock.style.display = "none";
    scoreMessage.style.display = "none";
    quizAgain.style.display = "none";
    score = 0;
    questionIndex = 0;
}
