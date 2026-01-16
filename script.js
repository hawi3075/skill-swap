
document.addEventListener('DOMContentLoaded', () => {
    const skillsGrid = document.getElementById('skills-grid');
    const searchInput = document.getElementById('searchInput');
    const skillForm = document.getElementById('skillForm');

    // --- THE "BACKEND" (LocalStorage) ---
    // This line tries to get 'savedSkills' from the browser memory
    let skillSwaps = JSON.parse(localStorage.getItem('savedSkills')) || [
        { title: "French Lessons", provider: "Marc", exchange: "Coding" },
        { title: "UX Design", provider: "Julia", exchange: "Gardening" },
        { title: "Fixing Bicycles", provider: "Sam", exchange: "Guitar" }
    ];

    // --- FUNCTION: Save to "Database" ---
    function saveToLocal() {
        localStorage.setItem('savedSkills', JSON.stringify(skillSwaps));
    }

    // --- FUNCTION: Render Cards ---
    function renderSkills(filter = "") {
        if(!skillsGrid) return; // Prevent errors on other pages
        skillsGrid.innerHTML = "";
        
        const filtered = skillSwaps.filter(item => 
            item.title.toLowerCase().includes(filter.toLowerCase())
        );

        filtered.forEach(item => {
            const card = document.createElement('div');
            card.className = 'skill-card';
            card.innerHTML = `
                <h3>${item.title}</h3>
                <p><strong>By:</strong> ${item.provider}</p>
                <p><strong>Wants:</strong> ${item.exchange}</p>
            `;
            skillsGrid.appendChild(card);
        });
    }

    // --- SEARCH LOGIC ---
    if(searchInput) {
        searchInput.addEventListener('input', (e) => renderSkills(e.target.value));
    }

    // --- FORM SUBMISSION (POSTing Data) ---
    if(skillForm) {
        skillForm.onsubmit = (e) => {
            e.preventDefault();
            const newSkill = {
                title: document.getElementById('title').value,
                provider: document.getElementById('provider').value,
                exchange: document.getElementById('exchange').value
            };
            
            skillSwaps.push(newSkill); // Add to local array
            saveToLocal();             // Update the "Database"
            renderSkills();            // Refresh UI
            skillForm.reset();
            document.getElementById('skillModal').style.display = "none";
        };
    }

    renderSkills(); 
});