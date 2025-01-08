// Инициализация VK Bridge
vkBridge.send('VKWebAppInit');

// Массив слайдов для попапа
const slides = [
    "Привет! Рад, что ты с нами. Этот курс — первый шаг к пониманию финансов. Вместе разберёмся, как управлять деньгами и сделать твои финансовые решения более уверенными. Готов?",
    "Шесть курсов — это твоя база для освоения финансов. Каждый урок откроет новые горизонты. Не переживай, всё поэтапно и понятно. Ты справишься!",
    "Если что-то непонятно, ориентируйся по смайликам.<br>💡 — Это подсказка или полезная информация.<br>💬 — Это твои возможности задать вопросы и оставить комментарии.<br>🔄 — Обновления и изменения в контенте, которые помогут тебе быть в курсе новинок."
];

let currentSlide = 0;
const textElement = document.getElementById('popup-text');
const indicators = document.querySelectorAll('.popup-indicators span');

// Обработчик для кнопки "Следующий слайд"
document.getElementById('next-slide').onclick = function() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlide();
    }
};

// Обработчик для кнопки "Предыдущий слайд"
document.getElementById('prev-slide').onclick = function() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
};

// Обработчик для кнопки закрытия попапа
document.getElementById('close-popup').onclick = function() {
    document.getElementById('popup').classList.remove('active');
};

// Функция обновления слайда
function updateSlide() {
    textElement.innerHTML = slides[currentSlide];
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

// Отображение попапа при загрузке страницы
window.onload = function() {
    document.getElementById('popup').classList.add('active');
};

// Обработка клика по области за пределами поп-апа для закрытия
document.getElementById('popup').addEventListener('click', function(event) {
    // Проверяем, что клик был за пределами поп-апа, если да — закрываем
    if (event.target === document.getElementById('popup')) {
        document.getElementById('popup').classList.remove('active');
    }
});

// Обработка наведения на курсы
const courses = document.querySelectorAll('.course');
courses.forEach(course => {
    // Обработка наведения мыши
    course.addEventListener('mouseenter', () => {
        course.classList.add('active');
    });
    
    // Обработка ухода мыши
    course.addEventListener('mouseleave', () => {
        course.classList.remove('active');
    });
});
