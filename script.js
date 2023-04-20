const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers : [
            { text: "Shark", correct: false},
            { text: "Blue Whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers : [
            { text: "Sahara", correct: true},
            { text: "Thar", correct: false},
            { text: "Gobi", correct: false},
            { text: "Arabian", correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers : [
            { text: "Monaco", correct: false},
            { text: "Russia", correct: false},
            { text: "India", correct: false},
            { text: "Vatican City", correct: true},
        ]
    },
    {
        question: "Which is the longest river in the world?",
        answers : [
            { text: "Nile", correct: true},
            { text: "Amazon", correct: false},
            { text: "Ganga", correct: false},
            { text: "Mekong", correct: false},
        ]
    },
    {
        question: "Which is the tallest animal in the world?",
        answers : [
            { text: "Dog", correct: false},
            { text: "Cat", correct: false},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: true},
        ]
    },
    {
        question: "Which is the deepest ocean in the world?",
        answers : [
            { text: "Atlantic", correct: false},
            { text: "Pacific", correct: true},
            { text: "Indian", correct: false},
            { text: "Arctic", correct: false},
        ]
    },
    {
        question: "Which is the largest planet in the solar system?",
        answers : [
            { text: "Mercury", correct: false},
            { text: "Earth", correct: false},
            { text: "Jupiter", correct: true},
            { text: "Saturn", correct: false},
        ]
    },
    {
        question: "Which is the tallest building in the world?",
        answers : [
            { text: "Taj Mahal", correct: false},
            { text: "Burj Khalifa", correct: true},
            { text: "Learning Tower Of Pisa", correct: false},
            { text: "Eiffel Tower", correct: false},
        ]
    },
    {
        question: "Which is the fastest animal in the world?",
        answers : [
            { text: "Cheetah", correct: true},
            { text: "Dog", correct: false},
            { text: "Lion", correct: false},
            { text: "Tiger", correct: false},
        ]
    },
    {
        question: "Which is the largest bird in the world?",
        answers : [
            { text: "Peacock", correct: false},
            { text: "Pigeon", correct: false},
            { text: "Ostrich", correct: true},
            { text: "Parrot", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
     const button = document.createElement("button");
     button.innerHTML = answer.text;
     button.classList.add("btn");
     answerButtons.appendChild(button);
     if(answer.correct){
        button.dataset.correct = answer.correct;
     }
     button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
   nextButton.style.display = "none";
   while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
   }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
      showQuestion();  
    }else{
        showScore();
    }
 }


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
    handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();