document.addEventListener('DOMContentLoaded', () => {
    // Simulated user responses (replace with dynamic values later)
    const selfAssessmentResponses = ['A', 'B', 'D', 'C', 'A']; // Sample responses
    const careerQuizResponses = ['A', 'C', 'B', 'D', 'B']; // Sample responses

    // Scoring guide based on assessment and quiz answers
    const scoringGuide = {
        A: 'STEM',
        B: 'Trades/Hands-on Skills',
        C: 'Leadership/Social Impact',
        D: 'Creative Arts'
    };

    // Function to tally the responses
    function tallyScores(responses) {
        const scores = {
            STEM: 0,
            'Trades/Hands-on Skills': 0,
            'Leadership/Social Impact': 0,
            'Creative Arts': 0
        };

        // Tally the scores based on the responses
        responses.forEach(response => {
            if (scoringGuide[response]) {
                scores[scoringGuide[response]]++;
            }
        });

        return scores;
    }

    // Calculate the results dynamically
    const selfAssessmentScores = tallyScores(selfAssessmentResponses);
    const careerQuizScores = tallyScores(careerQuizResponses);

    // Combine the results from both tests
    const combinedScores = {
        STEM: selfAssessmentScores.STEM + careerQuizScores.STEM,
        'Trades/Hands-on Skills': selfAssessmentScores['Trades/Hands-on Skills'] + careerQuizScores['Trades/Hands-on Skills'],
        'Leadership/Social Impact': selfAssessmentScores['Leadership/Social Impact'] + careerQuizScores['Leadership/Social Impact'],
        'Creative Arts': selfAssessmentScores['Creative Arts'] + careerQuizScores['Creative Arts']
    };

    // Sort the combined scores to get the top 3 areas of interest
    const topCategories = Object.entries(combinedScores).sort((a, b) => b[1] - a[1]).slice(0, 3);

    // Display the top 3 results on the Dashboard
    const selfAssessmentResultsDiv = document.getElementById('self-assessment-results');
    const careerQuizResultsDiv = document.getElementById('career-quiz-results');

    selfAssessmentResultsDiv.innerHTML = `
        <h3>Top 3 Areas of Interest Based on Your Self-Assessment</h3>
        <ul>
            <li>1st: ${topCategories[0][0]} (${topCategories[0][1]} points)</li>
            <li>2nd: ${topCategories[1][0]} (${topCategories[1][1]} points)</li>
            <li>3rd: ${topCategories[2][0]} (${topCategories[2][1]} points)</li>
        </ul>
    `;

    careerQuizResultsDiv.innerHTML = `
        <h3>Top 3 Areas of Interest Based on Your Career Quiz</h3>
        <ul>
            <li>1st: ${topCategories[0][0]} (${topCategories[0][1]} points)</li>
            <li>2nd: ${topCategories[1][0]} (${topCategories[1][1]} points)</li>
            <li>3rd: ${topCategories[2][0]} (${topCategories[2][1]} points)</li>
        </ul>
    `;

    // "Create Roadmap" button handler
    const createRoadmapBtn = document.getElementById('create-roadmap-btn');
    createRoadmapBtn.addEventListener('click', () => {
        // Redirect to Roadmap page
        alert(`Generating Roadmap for: ${topCategories[0][0]}, ${topCategories[1][0]}, ${topCategories[2][0]}`);

        // Update progress to 100% when roadmap is created
        location.href = 'roadmap.html';
    });
});
