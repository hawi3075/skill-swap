// 1. Wait for the DOM (the HTML) to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // 2. Select the buttons
    const ctaButton = document.getElementById('ctaBtn');
    const loginButton = document.getElementById('loginBtn');

    // 3. Add an event listener for the Hero button
    ctaButton.addEventListener('click', () => {
        const userSkill = prompt("What skill can you teach today? (e.g. Guitar, Coding, Cooking)");
        
        if (userSkill) {
            alert(`Awesome! We'll look for people who want to learn ${userSkill}.`);
        }
    });

    // 4. Add a simple console log to make sure it's working
    console.log("SkillSwap script is active!");
});