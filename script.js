const schemes = [
    {
        name: "Khelo India Scheme",
        description: "Promotes sports culture by identifying and supporting talented athletes through scholarships, training, and infrastructure development.",
        link: "https://kheloindia.gov.in",
        type: "central"
    },
    {
        name: "Rural Sports Programme",
        description: "Encourages sports participation in rural areas and organizes competitions at village, district, and state levels.",
        link: "https://yas.nic.in",
        type: "central"
    },
    {
        name: "Fit India Movement",
        description: "Aims to create awareness and promote healthy lifestyles through fitness activities and programs.",
        link: "https://fitindia.gov.in",
        type: "central"
    },
    {
        name: "Mukhyamantri Yuva Swabhiman Yojana (Madhya Pradesh)",
        description: "Focuses on training and supporting youth in sports activities to nurture talent and build careers in sports.",
        link: "https://mpsports.gov.in",
        type: "state"
    },
    {
        name: "Karnataka Kreeda Poshak Yojana",
        description: "Provides financial assistance to young athletes for training, equipment, and participation in competitions.",
        link: "https://karnataka.gov.in",
        type: "state"
    },
    {
        name: "Sahitya Akademi Awards",
        description: "Recognizes and promotes excellence in literary works in Indian languages.",
        link: "http://sahitya-akademi.gov.in",
        type: "central"
    },
    {
        name: "Scheme for Promotion of Culture of Science (SPoCS)",
        description: "Encourages young scientists and researchers by organizing exhibitions, workshops, and competitions.",
        link: "https://dst.gov.in",
        type: "central"
    },
    {
        name: "Kala Utsav",
        description: "Promotes arts in education by organizing competitions in visual and performing arts among students.",
        link: "https://ncert.nic.in",
        type: "central"
    },
    {
        name: "Rajasthan Rural Olympic Games",
        description: "Encourages sports participation at the grassroots level, focusing on rural athletes.",
        link: "https://rajasthan.gov.in",
        type: "state"
    },
    {
        name: "West Bengal Lok Prasar Prakalpa",
        description: "Provides financial support to folk artists to preserve and promote traditional art and culture.",
        link: "https://wb.gov.in",
        type: "state"
    }
];

function populateSchemes() {
    const schemesContainer = document.getElementById('schemes');
    schemesContainer.innerHTML = ''; // Clear existing content
    schemes.forEach(scheme => {
        const schemeItem = document.createElement('div');
        schemeItem.classList.add('scheme-item');
        schemeItem.dataset.type = scheme.type; // Add a custom data attribute for type
        schemeItem.innerHTML = `
            <h3>${scheme.name}</h3>
            <p>${scheme.description}</p>
            <a href="${scheme.link}" target="_blank">Learn More</a>
        `;
        schemesContainer.appendChild(schemeItem);
    });
}

function filterSchemes() {
    const filterValue = document.getElementById('schemeType').value;
    const schemeItems = document.querySelectorAll('.scheme-item');

    schemeItems.forEach(item => {
        const schemeType = item.dataset.type; // Use the data-type attribute
        if (filterValue === 'all' || schemeType === filterValue) {
            item.style.display = ''; // Show matching items
        } else {
            item.style.display = 'none'; // Hide non-matching items
        }
    });
}

window.onload = populateSchemes;

document.addEventListener("scroll", () => {
    const parallax = document.querySelector('.parallax');
    const offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.1 + "px";
});

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}
