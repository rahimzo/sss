// Create and inject navbar
const navbarHTML = `
    <header>
        <nav>
            <a href="index.html" class="logo">Pista Bikes UK</a>
            <ul class="nav-links" id="navLinks">
                <li><a href="index.html" class="nav-link">Home</a></li>
                <li><a href="about.html" class="nav-link">About Us</a></li>
                <li><a href="bikes.html" class="nav-link">Bikes & Products</a></li>
                <li><a href="services.html" class="nav-link">Service & Workshop</a></li>
                <li><a href="contact.html" class="nav-link">Contact</a></li>
            </ul>
            <div class="menu-toggle" id="menuToggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>
`;

// Inject navbar into container
document.getElementById('navbar-container').innerHTML = navbarHTML;

// Mobile menu toggle functionality
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Highlight active page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinksElements = document.querySelectorAll('.nav-link');

navLinksElements.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
    }
});