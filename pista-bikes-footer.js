// Create and inject footer
const footerHTML = `
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h4>Pista Bikes UK</h4>
                <p>Your trusted London bike shop for quality bikes, expert service, and friendly advice.</p>
                <div class="social-links">
                    <a href="https://facebook.com" target="_blank" aria-label="Facebook">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                        </svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" aria-label="Instagram">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                        </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" aria-label="Twitter">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                        </svg>
                    </a>
                </div>
            </div>
            
            <div class="footer-section">
                <h4>Contact Us</h4>
                <p><strong>Address:</strong><br>London, UK</p>
                <p><strong>Phone:</strong> 020 XXXX XXXX</p>
                <p><strong>Email:</strong> info@pistabikes.co.uk</p>
            </div>
            
            <div class="footer-section">
                <h4>Opening Hours</h4>
                <p><strong>Monday - Friday:</strong><br>9:00 AM - 6:00 PM</p>
                <p><strong>Saturday:</strong><br>10:00 AM - 5:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
            </div>
            
            <div class="footer-section">
                <h4>Quick Links</h4>
                <a href="index.html">Home</a>
                <a href="about.html">About Us</a>
                <a href="bikes.html">Bikes & Products</a>
                <a href="services.html">Service & Workshop</a>
                <a href="contact.html">Contact</a>
            </div>
        </div>
        
        <div class="copyright">
            <p>&copy; ${new Date().getFullYear()} Pista Bikes UK. All rights reserved.</p>
        </div>
    </footer>
`;

// Inject footer into container
document.getElementById('footer-container').innerHTML = footerHTML;