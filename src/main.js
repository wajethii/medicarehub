// Simulated Strapi CMS content
const strapiData = {
    features: [
        {
            id: 1,
            title: "Patient Management",
            description: "Streamline patient registration, medical history tracking, and record management with our intuitive interface.",
            icon: "user-injured"
        },
        {
            id: 2,
            title: "Appointment Scheduling",
            description: "Efficiently manage appointments with automated scheduling that reduces no-shows and optimizes resources.",
            icon: "calendar-check"
        },
        {
            id: 3,
            title: "Electronic Health Records",
            description: "Comprehensive EHR system that centralizes patient information for better care coordination.",
            icon: "file-medical"
        },
        {
            id: 4,
            title: "Billing & Insurance",
            description: "Simplify medical billing and insurance claims processing with our integrated financial system.",
            icon: "file-invoice-dollar"
        },
        {
            id: 5,
            title: "Pharmacy Management",
            description: "Track medication inventory, manage prescriptions, and automate reordering processes.",
            icon: "pills"
        },
        {
            id: 6,
            title: "Analytics Dashboard",
            description: "Gain valuable insights into hospital operations with comprehensive analytics and reporting.",
            icon: "chart-bar"
        }
    ],
    testimonials: [
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            role: "Medical Director, City General Hospital",
            content: "MediCareHub has revolutionized how we manage patient care. The EHR system is intuitive and has reduced our documentation time by 40%. Our staff is more efficient, and patient satisfaction scores have significantly improved.",
            rating: 5
        },
        {
            id: 2,
            name: "Michael Thompson",
            role: "Administrator, Regional Medical Center",
            content: "The billing module alone has paid for itself. We've reduced claim denials by 65% and accelerated our reimbursement cycle. The analytics dashboard gives us insights we never had before.",
            rating: 5
        }
    ]
};

// Function to load features from Strapi
function loadFeatures() {
    const container = document.getElementById('features-container');
    container.innerHTML = '';
    
    strapiData.features.forEach(feature => {
        const featureElement = document.createElement('div');
        featureElement.className = 'feature-card rounded-xl p-6 fade-in';
        featureElement.innerHTML = `
            <div class="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <i class="fas fa-${feature.icon} text-primary-600 text-xl"></i>
            </div>
            <h3 class="font-heading text-xl font-semibold mb-3">${feature.title}</h3>
            <p class="text-gray-600">${feature.description}</p>
        `;
        container.appendChild(featureElement);
    });
}

// Function to load testimonials from Strapi
function loadTestimonials() {
    const container = document.getElementById('testimonials-container');
    container.innerHTML = '';
    
    strapiData.testimonials.forEach(testimonial => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = 'testimonial-card rounded-xl p-8 fade-in';
        testimonialElement.innerHTML = `
            <div class="flex items-center mb-6">
                <div class="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                    <i class="fas fa-user-md text-gray-600 text-xl"></i>
                </div>
                <div>
                    <h4 class="font-heading font-semibold text-lg">${testimonial.name}</h4>
                    <p class="text-gray-600">${testimonial.role}</p>
                </div>
            </div>
            <div class="text-gray-700 mb-6">
                <div class="flex text-yellow-400 mb-4">
                    ${'<i class="fas fa-star"></i>'.repeat(testimonial.rating)}
                </div>
                <p class="italic">"${testimonial.content}"</p>
            </div>
        `;
        container.appendChild(testimonialElement);
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Load Strapi content
    loadFeatures();
    loadTestimonials();
    
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission
    const demoForm = document.getElementById('demo-form');
    demoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const hospital = document.getElementById('hospital').value;
        
        if (!name || !email || !hospital) {
            alert('Please fill in all fields');
            return;
        }
        
        // Simulate form submission
        alert('Thank you! We will contact you shortly to schedule your demo.');
        demoForm.reset();
    });
});