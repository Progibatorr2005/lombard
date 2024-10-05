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