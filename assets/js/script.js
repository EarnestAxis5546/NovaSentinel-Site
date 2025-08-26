// Replit-inspired JS with particles, smooth scrolling, and i18n. GitHub: https://github.com/EarnestAxis5546

document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling for Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            window.location.href = href;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Fade-in Animation for Sections
    const fadeInElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeInElements.forEach(el => observer.observe(el));

    // Contact Form Validation
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');

            // Reset errors
            nameError.style.display = 'none';
            emailError.style.display = 'none';
            messageError.style.display = 'none';

            if (!name) {
                nameError.textContent = translations[document.body.dataset.lang]['form-name-error'] || 'Name is required';
                nameError.style.display = 'block';
                isValid = false;
            }

            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                emailError.textContent = translations[document.body.dataset.lang]['form-email-error'] || 'Valid email is required';
                emailError.style.display = 'block';
                isValid = false;
            }

            if (!message) {
                messageError.textContent = translations[document.body.dataset.lang]['form-message-error'] || 'Message is required';
                messageError.style.display = 'block';
                isValid = false;
            }

            if (isValid) {
                alert(translations[document.body.dataset.lang]['form-success'] || 'Message sent! (Placeholder: Use Formspree or backend for actual submission.)');
                form.reset();
            }
        });
    }

    // Particle Animation for Hero Section
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = canvas.parentElement.offsetHeight;

        const particles = [];
        const particleCount = 100;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.size > 0.2) this.size -= 0.01;
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                ctx.fillStyle = 'rgba(107, 91, 149, 0.5)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animateParticles);
        }

        animateParticles();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        });
    }

    // Multilingual Support
    const translations = {
        en: {
            'nav-home': 'Home',
            'nav-about-project': 'About Project',
            'nav-about-me': 'About Me',
            'nav-docs': 'Docs',
            'nav-contact': 'Contact',
            'hero-title': 'NovaSentinel',
            'hero-tagline': 'Your Ultimate Anti-DDoS Fortress',
            'cta-github': 'View on GitHub',
            'cta-docs': 'Read Docs',
            'description': 'NovaSentinel is a high-performance Anti-DDoS system built in C# on Arch Linux, designed to protect servers and cloud infrastructure from distributed denial-of-service attacks with minimal latency and maximum uptime.',
            'features-title': 'Key Features',
            'feature-1': 'Real-time Threat Detection',
            'feature-2': 'Multithreaded Packet Analysis',
            'feature-3': 'Advanced Mitigation Algorithms',
            'feature-4': 'Lightweight & Scalable',
            'feature-5': 'Enterprise-Grade Security',
            'about-title': 'About NovaSentinel',
            'about-description': 'NovaSentinel is a state-of-the-art Anti-DDoS system built in C# on Arch Linux, engineered for unparalleled server protection with real-time monitoring and mitigation.',
            'architecture-title': 'Architecture',
            'architecture-description': 'A layered system with ingress traffic filtering, anomaly detection, and response orchestration, powered by C# for multithreaded efficiency.',
            'csharp-title': 'C# Integration',
            'csharp-description': 'Leverages .NET for cross-platform compatibility and high-performance networking, optimized for low-latency packet processing.',
            'techstack-title': 'Tech Stack',
            'techstack-redis': 'Redis: Real-time caching',
            'techstack-envoy': 'Envoy: Traffic management proxy',
            'techstack-ebpf': 'eBPF: Kernel-level packet filtering',
            'techstack-robusttoolbox': 'RobustToolbox: Custom security utilities',
            'techstack-csharp': 'C# / .NET: Core logic',
            'techstack-arch': 'Arch Linux: Host environment',
            'schematic-title': 'Schematic Diagram',
            'about-me-title': 'About Me',
            'name-label': 'Name:',
            'bio-label': 'Bio:',
            'bio-text': 'Dedicated software developer with 5+ years mastering C-family languages, building secure, high-performance solutions on Arch Linux. Passionate about fortifying digital infrastructure.',
            'experience-label': 'Experience:',
            'experience-text': '5+ years in low-level programming and server security, specializing in Anti-DDoS systems.',
            'contacts-title': 'Contacts',
            'email-label': 'Email:',
            'github-label': 'GitHub:',
            'linkedin-label': 'LinkedIn:',
            'portfolio-title': 'Portfolio / Social Links',
            'portfolio-github': 'GitHub Portfolio',
            'portfolio-x': 'X (Twitter)',
            'docs-title': 'Documentation',
            'doc-readme': 'README',
            'doc-license': 'LICENSE',
            'doc-contributing': 'CONTRIBUTING',
            'snippets-title': 'Sample Code Snippets',
            'csharp-snippet-title': 'C# Example (Packet Analysis)',
            'config-snippet-title': 'Config Example (JSON Config)',
            'contact-title': 'Contact Us',
            'form-name': 'Name:',
            'form-email': 'Email:',
            'form-message': 'Message:',
            'form-submit': 'Send Message',
            'form-name-error': 'Name is required',
            'form-email-error': 'Valid email is required',
            'form-message-error': 'Message is required',
            'form-success': 'Message sent! (Placeholder: Use Formspree or backend for actual submission.)',
            'location-title': 'Location',
            'location-text': 'Sweden, Stockholm',
            'map-placeholder': 'Map Placeholder (Insert embed code for actual map)',
            'footer Rights': 'All rights reserved.',
            'social-github': 'GitHub',
            'social-linkedin': 'LinkedIn',
            'social-x': 'X'
        },
        sv: {
            'nav-home': 'Hem',
            'nav-about-project': 'Om projektet',
            'nav-about-me': 'Om mig',
            'nav-docs': 'Dokumentation',
            'nav-contact': 'Kontakt',
            'hero-title': 'NovaSentinel',
            'hero-tagline': 'Din ultimata Anti-DDoS-fästning',
            'cta-github': 'Visa på GitHub',
            'cta-docs': 'Läs dokumentation',
            'description': 'NovaSentinel är ett högpresterande Anti-DDoS-system byggt i C# på Arch Linux, designat för att skydda servrar och molninfrastruktur från distribuerade överbelastningsattacker med minimal latens och maximal drifttid.',
            'features-title': 'Nyckelfunktioner',
            'feature-1': 'Realtidshotdetektering',
            'feature-2': 'Multitrådad paketanalys',
            'feature-3': 'Avancerade mitigeringalgoritmer',
            'feature-4': 'Lättviktig och skalbar',
            'feature-5': 'Företagsklassad säkerhet',
            'about-title': 'Om NovaSentinel',
            'about-description': 'NovaSentinel är ett toppmodernt Anti-DDoS-system byggt i C# på Arch Linux, konstruerat för oöverträffat serverskydd med realtidsövervakning och mitigering.',
            'architecture-title': 'Arkitektur',
            'architecture-description': 'Ett skiktat system med filtrering av inkommande trafik, anomalidetektering och responsorkestrering, drivet av C# för multitrådad effektivitet.',
            'csharp-title': 'C#-integration',
            'csharp-description': 'Utnyttjar .NET för plattformsoberoende kompatibilitet och högpresterande nätverk, optimerat för låg latens i paketbehandling.',
            'techstack-title': 'Teknikstack',
            'techstack-redis': 'Redis: Realtidscachning',
            'techstack-envoy': 'Envoy: Proxy för trafikhantering',
            'techstack-ebpf': 'eBPF: Paketfiltrering på kärnnivå',
            'techstack-robusttoolbox': 'RobustToolbox: Anpassade säkerhetsverktyg',
            'techstack-csharp': 'C# / .NET: Kärnlogik',
            'techstack-arch': 'Arch Linux: Värdmiljö',
            'schematic-title': 'Schematiskt diagram',
            'about-me-title': 'Om mig',
            'name-label': 'Namn:',
            'bio-label': 'Bio:',
            'bio-text': 'Engagerad mjukvaruutvecklare med över 5 års erfarenhet av C-familjens språk, bygger säkra, högpresterande lösningar på Arch Linux. Passionerad för att stärka digital infrastruktur.',
            'experience-label': 'Erfarenhet:',
            'experience-text': 'Över 5 år inom lågnivåprogrammering och serversäkerhet, specialiserad på Anti-DDoS-system.',
            'contacts-title': 'Kontakter',
            'email-label': 'E-post:',
            'github-label': 'GitHub:',
            'linkedin-label': 'LinkedIn:',
            'portfolio-title': 'Portfölj / Sociala länkar',
            'portfolio-github': 'GitHub-portfölj',
            'portfolio-x': 'X (Twitter)',
            'docs-title': 'Dokumentation',
            'doc-readme': 'README',
            'doc-license': 'LICENS',
            'doc-contributing': 'BIDRAG',
            'snippets-title': 'Kodexempel',
            'csharp-snippet-title': 'C#-exempel (Paketanalys)',
            'config-snippet-title': 'Konfigurationsexempel (JSON-konfig)',
            'contact-title': 'Kontakta oss',
            'form-name': 'Namn:',
            'form-email': 'E-post:',
            'form-message': 'Meddelande:',
            'form-submit': 'Skicka meddelande',
            'form-name-error': 'Namn krävs',
            'form-email-error': 'Giltig e-post krävs',
            'form-message-error': 'Meddelande krävs',
            'form-success': 'Meddelande skickat! (Platshållare: Använd Formspree eller backend för faktisk sändning.)',
            'location-title': 'Plats',
            'location-text': 'Sverige, Stockholm',
            'map-placeholder': 'Kartplatshållare (Infoga inbäddningskod för faktisk karta)',
            'footer Rights': 'Alla rättigheter förbehållna.',
            'social-github': 'GitHub',
            'social-linkedin': 'LinkedIn',
            'social-x': 'X'
        }
    };

    // Language Toggle
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            const lang = this.value;
            document.body.dataset.lang = lang;
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.dataset.i18n;
                element.textContent = translations[lang][key] || element.textContent;
            });
        });
    }
});