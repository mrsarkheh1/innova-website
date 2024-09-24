document.addEventListener('DOMContentLoaded', () => {
    // Capture self-assessment data and career quiz data dynamically
    let selfAssessmentResponses = [];
    let careerQuizResponses = [];

    // Placeholder for logic (This would capture user responses dynamically)
    // Example responses for now
    selfAssessmentResponses = ['A', 'B', 'C', 'D', 'A']; // Replace with dynamic data
    careerQuizResponses = ['A', 'C', 'A', 'D', 'B']; // Replace with dynamic data

    // Scoring guide for categories
    const scoringGuide = {
        A: 'STEM',
        B: 'Trades/Hands-on Skills',
        C: 'Leadership/Social Impact',
        D: 'Creative Arts'
    };

    // Function to tally scores based on responses
    function tallyScores(responses) {
        const scores = {
            STEM: 0,
            'Trades/Hands-on Skills': 0,
            'Leadership/Social Impact': 0,
            'Creative Arts': 0
        };

        responses.forEach(response => {
            if (scoringGuide[response]) {
                scores[scoringGuide[response]]++;
            }
        });

        return scores;
    }

    // When self-assessment is completed, redirect to Career Quiz
    const completeSelfAssessmentBtn = document.getElementById('complete-self-assessment-btn');
    completeSelfAssessmentBtn.addEventListener('click', () => {
        // Redirect to career quiz page
        location.href = 'career-quiz.html';
    });

    // After completing the career quiz, tally the scores and display results
    const completeCareerQuizBtn = document.getElementById('complete-career-quiz-btn');
    completeCareerQuizBtn.addEventListener('click', () => {
        // Tally the scores from both the self-assessment and career quiz
        const selfAssessmentScores = tallyScores(selfAssessmentResponses);
        const careerQuizScores = tallyScores(careerQuizResponses);

        // Combine scores from both tests
        const combinedScores = {
            STEM: selfAssessmentScores.STEM + careerQuizScores.STEM,
            'Trades/Hands-on Skills': selfAssessmentScores['Trades/Hands-on Skills'] + careerQuizScores['Trades/Hands-on Skills'],
            'Leadership/Social Impact': selfAssessmentScores['Leadership/Social Impact'] + careerQuizScores['Leadership/Social Impact'],
            'Creative Arts': selfAssessmentScores['Creative Arts'] + careerQuizScores['Creative Arts']
        };

        // Sort the scores and get the top skills
        const sortedScores = Object.entries(combinedScores).sort((a, b) => b[1] - a[1]);
        
        // Logic: If only one skill has the highest score, show that. If two skills are tied, show both.
        let topSkillsMessage = '';
        if (sortedScores[0][1] > sortedScores[1][1]) {
            topSkillsMessage = `Your strongest skill is ${sortedScores[0][0]} (${sortedScores[0][1]} points).`;
        } else {
            topSkillsMessage = `Your top skills are ${sortedScores[0][0]} and ${sortedScores[1][0]}, both with ${sortedScores[0][1]} points.`;
        }

        // Display results after career quiz is finished
        const resultsDiv = document.getElementById('quiz-results');
        resultsDiv.innerHTML = `
            <h3>Your Career Interests</h3>
            <p>${topSkillsMessage}</p>
            <p>Based on your self-assessment and career quiz, these are the strongest areas where you are likely to excel.</p>
        `;
    });
});
