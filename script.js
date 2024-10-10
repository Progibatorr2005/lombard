document.addEventListener("DOMContentLoaded", function() {
    const navButtons = document.querySelectorAll(".nav-button");

    navButtons.forEach(button => {
        button.addEventListener("click", function() {
            const scrollToId = button.getAttribute("data-scroll-to");
            const section = document.querySelector(scrollToId);

            if (section) {
                // Получаем верхнюю позицию секции и вычитаем 88 пикселей
                const offsetPosition = section.getBoundingClientRect().top + window.pageYOffset - 88;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth" // Плавная прокрутка
                });
            }

            // Удаляем класс активного состояния у всех кнопок и добавляем к нажатой
            navButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
});


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