document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", function() {
            const isActive = item.classList.contains("active");

            // Close all open items
            faqItems.forEach(i => {
                i.classList.remove("active");
                i.querySelector(".faq-answer").style.maxHeight = null;
                i.querySelector(".faq-icon").textContent = "+";
            });

            // Toggle the clicked item
            if (!isActive) {
                item.classList.add("active");
                const answer = item.querySelector(".faq-answer");
                answer.style.maxHeight = answer.scrollHeight + "px";
                item.querySelector(".faq-icon").textContent = "×"; // Change to cross
            }
        });
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const navButtons = document.querySelectorAll(".nav-button");

    navButtons.forEach(button => {
        button.addEventListener("click", function() {
            const scrollToId = button.getAttribute("data-scroll-to");
            const section = document.querySelector(scrollToId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }

            // Remove active class from all buttons and add to the clicked button
            navButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

    window.addEventListener("scroll", function() {
        let currentSection = "";

        document.querySelectorAll(".section").forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                currentSection = section.getAttribute("id");
            }
        });

        navButtons.forEach(button => {
            button.classList.remove("active");
            if (button.getAttribute("data-scroll-to") === `#${currentSection}`) {
                button.classList.add("active");
            }
        });
    });
});
