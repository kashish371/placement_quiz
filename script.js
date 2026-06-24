let currentQuestion = 0;
let userAnswers = [];
let reviewQuestions = [];
let answeredQuestions = [];

let timeLeft = 3000; // 45 minutes
let timerInterval;

// Initialize Quiz
loadQuestion();
createPalette();
startTimer();

// ================= TIMER =================

function startTimer() {

    timerInterval = setInterval(() => {

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        document.getElementById("timer").innerText =
            `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        timeLeft--;

        if (timeLeft < 0) {

            clearInterval(timerInterval);

            alert("Time Over! Test Submitted Automatically.");

            showResult(true);

        }

    }, 1000);

}

// ================= LOAD QUESTION =================

function loadQuestion() {

    const q = questions[currentQuestion];

    document.getElementById("question").innerText =
        `${currentQuestion + 1}. ${q.question}`;

    const optionsDiv =
        document.getElementById("options");

    optionsDiv.innerHTML = "";

    q.options.forEach(option => {

        const btn =
            document.createElement("div");

        btn.classList.add("option");

        btn.innerText = option;

        btn.onclick = () =>
            selectAnswer(option);

        optionsDiv.appendChild(btn);

    });

    restoreSelectedAnswer();

    updatePalette();

}

// ================= SELECT ANSWER =================

function selectAnswer(selectedOption) {

    userAnswers[currentQuestion] =
        selectedOption;

    answeredQuestions[currentQuestion] =
        true;

    restoreSelectedAnswer();

    updatePalette();

}

// ================= RESTORE ANSWER =================

function restoreSelectedAnswer() {

    const selected =
        userAnswers[currentQuestion];

    document.querySelectorAll(".option")
        .forEach(option => {

            option.style.background = "#eee";
            option.style.color = "black";

            if (option.innerText === selected) {

                option.style.background =
                    "#2196F3";

                option.style.color =
                    "white";

            }

        });

}

// ================= NAVIGATION =================

function nextQuestion() {

    if (currentQuestion <
        questions.length - 1) {

        currentQuestion++;

        loadQuestion();

    }

}

function prevQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();

    }

}

function skipQuestion() {

    nextQuestion();

}

// ================= REVIEW =================

function markForReview() {

    reviewQuestions[currentQuestion] = true;

    updatePalette();

}

// ================= PALETTE =================

function createPalette() {

    const palette =
        document.getElementById("palette");

    palette.innerHTML = "";

    questions.forEach((q, index) => {

        const btn =
            document.createElement("button");

        btn.innerText = index + 1;

        btn.classList.add("palette-btn");

        btn.onclick = () => {

            currentQuestion = index;

            loadQuestion();

        };

        palette.appendChild(btn);

    });

}

function updatePalette() {

    const buttons =
        document.querySelectorAll(".palette-btn");

    buttons.forEach((btn, index) => {

        btn.className = "palette-btn";

        if (index === currentQuestion) {

            btn.classList.add("current");

        }
        else if (reviewQuestions[index]) {

            btn.classList.add("review");

        }
        else if (answeredQuestions[index]) {

            btn.classList.add("answered");

        }

    });

}

// ================= SUBMIT TEST =================

function showResult(autoSubmit = false) {

    if (!autoSubmit) {

        let attempted =
            userAnswers.filter(
                answer => answer !== undefined
            ).length;

        let notAttempted =
            questions.length - attempted;

        let confirmSubmit = confirm(
`Submit Test?

Attempted Questions: ${attempted}
Not Attempted Questions: ${notAttempted}

Once submitted, the test cannot be resumed.`
        );

        if (!confirmSubmit)
            return;

    }

    clearInterval(timerInterval);

    let score = 0;

    questions.forEach((q, index) => {

        if (
            userAnswers[index] === q.answer
        ) {
            score++;
        }

    });

    document.querySelector(".container")
        .classList.add("hidden");

    document.getElementById("resultPage")
        .classList.remove("hidden");

    document.getElementById("finalScore")
        .innerHTML =
        `Final Score: ${score}/${questions.length}`;

    let reviewHTML = "";

    questions.forEach((q, index) => {

        reviewHTML += `

        <div class="review-card">

            <h3>
                Question ${index + 1}
            </h3>

            <p>
                <b>Question:</b>
                ${q.question}
            </p>

            <p>
                <b>Your Answer:</b>
                ${userAnswers[index] || "Not Attempted"}
            </p>

            <p>
                <b>Correct Answer:</b>
                ${q.answer}
            </p>

            <p>
                <b>Solution:</b>
                ${q.solution}
            </p>

        </div>

        `;

    });

    document.getElementById("review")
        .innerHTML = reviewHTML;

}