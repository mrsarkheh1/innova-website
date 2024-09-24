document.addEventListener('DOMContentLoaded', () => {
    // Check if the create-roadmap-btn exists before attaching the event listener
    const createRoadmapBtn = document.getElementById('create-roadmap-btn');

    if (createRoadmapBtn) {
        createRoadmapBtn.addEventListener('click', () => {
            alert("Generating Roadmap... Redirecting!");
            location.href = 'roadmap.html'; // Redirect to roadmap page
        });
    } else {
        console.error('Element with ID "create-roadmap-btn" not found in DOM.');
    }

    // Dynamically load self-assessment and career quiz results here
    const selfAssessmentResultsDiv = document.getElementById('self-assessment-results');
    const careerQuizResultsDiv = document.getElementById('career-quiz-results');

    if (selfAssessmentResultsDiv && careerQuizResultsDiv) {
        // For testing, let's use some mock data; replace this with real data logic
        const selfAssessmentResults = {
            skill1: "Communication",
            skill2: "Problem Solving",
            skill3: "Creativity"
        };

        const careerQuizResults = {
            job1: "Software Developer",
            job2: "Data Analyst",
            job3: "Project Manager"
        };

        // Inject self-assessment results
        selfAssessmentResultsDiv.innerHTML = `
            <ul>
                <li>Top Skill: ${selfAssessmentResults.skill1}</li>
                <li>Second Skill: ${selfAssessmentResults.skill2}</li>
                <li>Third Skill: ${selfAssessmentResults.skill3}</li>
            </ul>
        `;

        // Inject career quiz results
        careerQuizResultsDiv.innerHTML = `
            <ul>
                <li>Recommended Job 1: ${careerQuizResults.job1}</li>
                <li>Recommended Job 2: ${careerQuizResults.job2}</li>
                <li>Recommended Job 3: ${careerQuizResults.job3}</li>
            </ul>
        `;
    } else {
        console.error('Results elements not found in DOM.');
    }
});
