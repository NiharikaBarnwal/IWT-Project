// examscript.js
const questions = [
    {
        question: "What do plants need to grow?",
        options: ["Water", "Chocolate", "Milk", "Juice"],
        answer: 0
    },
    {
        question: "Which planet do we live on?",
        options: ["Mars", "Earth", "Jupiter", "Venus"],
        answer: 1
    },
    {
        question: "What shape is the sun?",
        options: ["Square", "Triangle", "Round", "Rectangle"],
        answer: 2
    },
    {
        question: "What animal says 'Woof'?",
        options: ["Cat", "Dog", "Bird", "Fish"],
        answer: 1
    },
    {
        question: "Which part of a plant is usually underground?",
        options: ["Leaf", "Flower", "Root", "Fruit"],
        answer: 2
    },
    {
        question: "What color is the sky on a clear day?",
        options: ["Blue", "Red", "Green", "Yellow"],
        answer: 0
    },
    {
        question: "Which is an insect?",
        options: ["Dog", "Cat", "Butterfly", "Horse"],
        answer: 2
    },
    {
        question: "What do we use to see things?",
        options: ["Ears", "Nose", "Eyes", "Mouth"],
        answer: 2
    },
    {
        question: "What is the freezing point of water?",
        options: ["0°C", "100°C", "50°C", "25°C"],
        answer: 0
    },
    {
        question: "Which is a fruit?",
        options: ["Carrot", "Potato", "Banana", "Spinach"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswers = Array(questions.length).fill(null);

function loadQuestion() {
    const questionContainer = document.getElementById("quiz-container");
    const currentQ = questions[currentQuestion];

    questionContainer.innerHTML = `
        <div class="question">${currentQ.question}</div>
        <ul class="options">
            ${currentQ.options.map((option, index) => `
                <li>
                    <label>
                        <input type="radio" name="option" value="${index}" ${selectedAnswers[currentQuestion] === index ? 'checked' : ''}>
                        ${option}
                    </label>
                </li>
            `).join('')}
        </ul>
    `;

    document.getElementById("current-question").innerText = `Question: ${currentQuestion + 1}/${questions.length}`;
    updateQuestionList();
}

function updateQuestionList() {
    const questionList = document.getElementById("question-list");
    questionList.innerHTML = questions.map((_, index) => `
        <li class="${index === currentQuestion ? 'active' : ''}">${index + 1}</li>
    `).join('');
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        selectedAnswers[currentQuestion] = parseInt(selectedOption.value);
        if (selectedAnswers[currentQuestion] === questions[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    } else {
        alert("Please select an option before proceeding.");
    }
}

function showResults() {
    const questionContainer = document.getElementById("quiz-container");
    questionContainer.innerHTML = `
        <h2>Your Score: ${score} / ${questions.length}</h2>
        <a href="quiz.html"><button id="retake">Retake Exam</button></a>
        <a href="home_2.html"><button id="go-home">Go Home</button></a>
    `;
    document.getElementById("next-btn").style.display = "none";
}

window.onload = loadQuestion;