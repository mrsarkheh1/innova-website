document.addEventListener('DOMContentLoaded', () => {
    const progressBarFill = document.getElementById('progress-fill');

    // Get progress from localStorage (or set to 0 if not present)
    let progress = localStorage.getItem('progress') || 0;
    progress = parseInt(progress);

    // Update the progress bar width based on saved progress
    progressBarFill.style.width = progress + '%';

    // If roadmap is created, make the bar green and 100%
    if (progress === 100) {
        progressBarFill.classList.add('complete'); // Change to green
    }
});

// Function to update progress
function updateProgress(amount) {
    let progress = localStorage.getItem('progress') || 0;
    progress = parseInt(progress) + amount;

    // Save progress in localStorage
    localStorage.setItem('progress', progress);

    // Update the progress bar on the homepage (only if this page is open)
    const progressBarFill = document.getElementById('progress-fill');
    if (progressBarFill) {
        progressBarFill.style.width = progress + '%';

        // If progress reaches 100%, change color to green
        if (progress === 100) {
            progressBarFill.classList.add('complete');
        }
    }
}
