document.addEventListener('DOMContentLoaded', () => {
    const skillsGrid = document.getElementById('skills-grid');

    // Data: In a real app, this would come from a database
    const skillSwaps = [
        { title: "French Lessons", provider: "Marc", exchange: "Coding" },
        { title: "UX Design", provider: "Julia", exchange: "Gardening" },
        { title: "Fixing Bicycles", provider: "Sam", exchange: "Guitar" },
        { title: "Baking Bread", provider: "Elena", exchange: "Photography" },
        { title: "Yoga Basics", provider: "Mira", exchange: "Spanish" },
        { title: "Math Tutoring", provider: "David", exchange: "Cooking" }
    ];

    // Function to create cards and add them to the page
    skillSwaps.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('skill-card');
        
        card.innerHTML = `
            <h3>${item.title}</h3>
            <p><strong>Shared by:</strong> ${item.provider}</p>
            <p><strong>Looking for:</strong> ${item.exchange}</p>
        `;
        
        skillsGrid.appendChild(card);
    });

    // Alert for the main button
    document.getElementById('ctaBtn').addEventListener('click', () => {
        alert("Welcome to the community! Join now to start swapping.");
    });
});