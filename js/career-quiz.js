document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        // Your existing questions here
        {
            question: "01- What type of projects do you enjoy working on?",
            choices: ["Researching and analyzing information", "Building or fixing something with my hands", "Leading a team or planning events", "Expressing myself creatively through art, music, or design"]
        },
        {
            question: "02- When working on something new, how do you approach it?",
            choices: ["I like to study all the details and understand the theory behind it.", "I prefer hands-on learning by doing it myself.", "I get people together to brainstorm and discuss.", "I experiment creatively to come up with new ideas."]
        },
        {
            question: "03- What type of work environment do you see yourself in?",
            choices: ["An office or lab where I can research and solve problems.", "IA workshop or field where I can work with my hands", "A fast-paced team environment where I can interact with others.", "A creative studio or space where I can express myself freely"]
        },
        {
            question: "04- Which of the following best describes your leadership style?",
            choices: ["I lead through knowledge and making informed decisions.", "I lead by demonstrating practical skills and getting things done.", " I lead by bringing people together and fostering teamwork.", "I lead by inspiring creativity and innovation in others."]
        },
        {
            question: "05- What's your favorite type of extracurricular activity?",
            choices: ["Science fairs, coding, or robotics clubs.", " Hands-on clubs like woodworking or auto mechanics.", "Student council, debate, or social clubs", "Creative clubs like music, drama, or art."]
        },
        {
            question: "06- What drives you when setting long-term career goals?",
            choices: ["A desire to solve complex problems and innovate.", " A focus on mastering practical skills and applying them directly.", "A passion for making a difference in peopleâ€™s lives or communities.", "A need to create and express myself in unique ways."]
        },
        {
            question: "07- How do you handle working on a large, ongoing project?",
            choices: ["AI break it down into smaller, logical tasks and plan it thoroughly.", " I work on it step by step, focusing on getting the job done.", "I involve others and communicate often to make sure we're on track.", "I stay flexible and adapt the project as new ideas come up."]
        },
        {
            question: "08- Which of these tasks sounds the most fulfilling?",
            choices: ["Designing a complex system or solving a scientific problem", " Building something from scratch or fixing machinery", "Organizing a large event or helping others reach their goals", "Creating an original piece of art or designing a new product"]
        },
        {
            question: "09- What are you most passionate about?",
            choices: ["Discovering how things work and solving intellectual challenges.", " Working with tools and hands-on projects.", "Leading people, teams, or making a social impact.", "Expressing ideas through creative outlets."]
        },
        {
            question: "10- What type of career would make you feel most successful?",
            choices: ["A career where I can innovate, research, and solve problems.", " A career where I can use practical skills to build or fix things.", "A career where I can lead others and make a positive difference.", "A career where I can create and inspire through artistic expression."]
        },
    ];

    let currentQuestionIndex = 0;
    let userResponses = []; // Array to capture user answers
    const questionContainer = document.getElementById('question-container');
    const nextBtn = document.getElementById('next-btn');

    // Load the first question
    loadQuestion();

    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionContainer.innerHTML = `
            <div class="question">${currentQuestion.question}</div>
            <div class="choices">
                ${currentQuestion.choices.map((choice, index) => `
                    <div class="choice" data-index="${index}">${choice}</div>
                `).join('')}
            </div>
        `;

        const choices = document.querySelectorAll('.choice');
        choices.forEach(choice => {
            choice.addEventListener('click', function () {
                choices.forEach(c => c.classList.remove('selected'));
                this.classList.add('selected');
                userResponses[currentQuestionIndex] = this.getAttribute('data-index'); // Store user's selection
                nextBtn.disabled = false; // Enable the "Next" button
            });
        });

        nextBtn.disabled = true; // Disable the "Next" button until a choice is selected
    }

    nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
            if (currentQuestionIndex === questions.length - 1) {
                nextBtn.textContent = 'Submit';
            }
        } else {
            alert("Career Quiz Complete! Redirecting to Dashboard...");

            // Store responses in localStorage for the dashboard to access later
            localStorage.setItem('careerQuizResults', JSON.stringify(userResponses));

            // Redirect to the dashboard
            location.href = 'dashboard.html';
        }
    });
});
