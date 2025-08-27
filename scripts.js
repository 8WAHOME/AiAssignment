// Smooth scroll to services when "Learn More" clicked
document.getElementById("learnMoreBtn").addEventListener("click", function() {
    document.querySelector(".services").scrollIntoView({ behavior: 'smooth' });
});

// Contact Form Submission Simulation
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("formMessage").textContent = "Thank you! Your message has been sent.";
    this.reset();
});

// Dynamic Case Study Addition Example
let caseList = document.getElementById("caseList");
let newCase = document.createElement("li");
newCase.textContent = "DeltaCorp: AI-powered rebranding doubled engagement";
caseList.appendChild(newCase);

// Highlight social posts randomly
let socialPosts = document.querySelectorAll("#socialPosts li");
socialPosts.forEach((post, index) => {
    if(index % 2 === 0){
        post.style.backgroundColor = "#e0f7fa";
    }
});
