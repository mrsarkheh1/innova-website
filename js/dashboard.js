document.addEventListener('DOMContentLoaded', () => {
    // Retrieve results from localStorage
    const selfAssessmentResults = JSON.parse(localStorage.getItem('selfAssessmentResults')) || [];
    const careerQuizResults = JSON.parse(localStorage.getItem('careerQuizResults')) || [];

    // Check if both results exist
    if (selfAssessmentResults.length && careerQuizResults.length) {
        // Mock scoring logic
        const scoringGuide = {
            0: 'STEM',
            1: 'Trades/Hands-on Skills',
            2: 'Leadership/Social Impact',
            3: 'Creative Arts'
        };

        // Calculate the scores
        function tallyScores(responses) {
            const scores = {
                STEM: 0,
                'Trades/Hands-on Skills': 0,
                'Leadership/Social Impact': 0,
                'Creative Arts': 0
            };

            responses.forEach(responseIndex => {
                const category = scoringGuide[responseIndex];
                if (category) {
                    scores[category]++;
                }
            });

            return scores;
        }

        const selfAssessmentScores = tallyScores(selfAssessmentResults);
        const careerQuizScores = tallyScores(careerQuizResults);

        // Combine the results
        const combinedScores = {
            STEM: selfAssessmentScores.STEM + careerQuizScores.STEM,
            'Trades/Hands-on Skills': selfAssessmentScores['Trades/Hands-on Skills'] + careerQuizScores['Trades/Hands-on Skills'],
            'Leadership/Social Impact': selfAssessmentScores['Leadership/Social Impact'] + careerQuizScores['Leadership/Social Impact'],
            'Creative Arts': selfAssessmentScores['Creative Arts'] + careerQuizScores['Creative Arts']
        };

        // Find top categories
        const sortedScores = Object.entries(combinedScores).sort((a, b) => b[1] - a[1]);

        // Display only the top 1 or 2 categories
        const topCategories = sortedScores[0][1] === sortedScores[1][1] ? [sortedScores[0], sortedScores[1]] : [sortedScores[0]];

        // Display results
        const selfAssessmentResultsDiv = document.getElementById('self-assessment-results');
        const careerQuizResultsDiv = document.getElementById('career-quiz-results');

        selfAssessmentResultsDiv.innerHTML = `
            <h3>Your Top Skill(s) Based on Self-Assessment:</h3>
            <ul>
                ${topCategories.map(category => `<li>${category[0]} (${category[1]} points)</li>`).join('')}
            </ul>
        `;

        careerQuizResultsDiv.innerHTML = `
            <h3>Your Top Career Interest(s) Based on Career Quiz:</h3>
            <ul>
                ${topCategories.map(category => `<li>${category[0]} (${category[1]} points)</li>`).join('')}
            </ul>
        `;
    } else {
        // No results found
        alert("No results found. Please complete the Self-Assessment and Career Quiz.");
    }

    // Create Roadmap button handler
    const createRoadmapBtn = document.getElementById('create-roadmap-btn');
    if (createRoadmapBtn) {
        createRoadmapBtn.addEventListener('click', () => {
            alert("Generating Roadmap... Redirecting!");
            location.href = 'roadmap.html'; // Redirect to roadmap page
        });
    }
});
