document.addEventListener('DOMContentLoaded', () => {
    // Simulated stored results (for now, we’ll hard-code these)
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

    // Display the results on the Dashboard
    const selfAssessmentResultsDiv = document.getElementById('self-assessment-results');
    selfAssessmentResultsDiv.innerHTML = `
        <ul>
            <li>Top Skill: ${selfAssessmentResults.skill1}</li>
            <li>Second Skill: ${selfAssessmentResults.skill2}</li>
            <li>Third Skill: ${selfAssessmentResults.skill3}</li>
        </ul>
    `;

    const careerQuizResultsDiv = document.getElementById('career-quiz-results');
    careerQuizResultsDiv.innerHTML = `
        <ul>
            <li>Recommended Job 1: ${careerQuizResults.job1}</li>
            <li>Recommended Job 2: ${careerQuizResults.job2}</li>
            <li>Recommended Job 3: ${careerQuizResults.job3}</li>
        </ul>
    `;

    // "Create Roadmap" button handler
    const createRoadmapBtn = document.getElementById('create-roadmap-btn');
    createRoadmapBtn.addEventListener('click', () => {
        // Redirect to Roadmap page
        alert("Generating Roadmap... Redirecting!");

        // Update progress to 100% when roadmap is created
        //updateProgress(100);

        location.href = 'roadmap.html';
    });
});
