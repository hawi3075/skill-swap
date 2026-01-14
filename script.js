document.addEventListener('DOMContentLoaded', () => {
    const skillsGrid = document.getElementById('skills-grid');
    const searchInput = document.getElementById('searchInput');
    const modal = document.getElementById('skillModal');
    const skillForm = document.getElementById('skillForm');

    let skillSwaps = [
        { title: "French Lessons", provider: "Marc", exchange: "Coding" },
        { title: "UX Design", provider: "Julia", exchange: "Gardening" },
        { title: "Fixing Bicycles", provider: "Sam", exchange: "Guitar" }
    ];

    // --- FUNCTION: Render Cards ---
    function renderSkills(filter = "") {
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
    searchInput.addEventListener('input', (e) => {
        renderSkills(e.target.value);
    });

    // --- MODAL LOGIC ---
    document.getElementById('openModalBtn').onclick = () => modal.style.display = "block";
    document.querySelector('.close').onclick = () => modal.style.display = "none";

    // --- FORM SUBMISSION ---
    skillForm.onsubmit = (e) => {
        e.preventDefault();
        const newSkill = {
            title: document.getElementById('title').value,
            provider: document.getElementById('provider').value,
            exchange: document.getElementById('exchange').value
        };
        skillSwaps.push(newSkill);
        renderSkills();
        skillForm.reset();
        modal.style.display = "none";
    };

    renderSkills(); // Initial Load
});