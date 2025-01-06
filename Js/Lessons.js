// Lessons.js

let score = 0;

function toggleTest() {
    const testSection = document.getElementById('test');
    const testButton = document.getElementById('testButton');
    if (testSection.style.display === 'block') {
        testSection.style.display = 'none';
        testButton.textContent = 'Пройти тест';
    } else {
        testSection.style.display = 'block';
        testButton.textContent = 'Закрыть тест';
        resetTest(); // Сброс теста при открытии
    }
}

function selectAnswer(element) {
    // Убираем выделение у всех ответов в текущем вопросе
    const answers = element.parentNode.querySelectorAll('.answer');
    answers.forEach(answer => answer.classList.remove('selected'));
    // Добавляем выделение выбранному ответу
    element.classList.add('selected');
}

function showResults() {
    score = 0;
    const questions = document.querySelectorAll('.question');
    let allAnswered = true;

    // Проверяем, на все ли вопросы даны ответы
    questions.forEach(question => {
        const selected = question.querySelector('.answer.selected');
        if (!selected) {
            allAnswered = false;
        }
    });

    if (!allAnswered) {
        document.getElementById("test-result").innerHTML =
            '<span class="result red">Пожалуйста, ответьте на все вопросы!</span>';
        return;
    }

    function toggleRecommendations() {
        const recommendations = document.querySelector('.recommendations');
        recommendations.classList.toggle('open');
    }

    // Подсчет правильных ответов
    questions.forEach(question => {
        const selected = question.querySelector('.answer.selected');
        const correct = selected.getAttribute('data-correct');
        if (correct === 'true') {
            score++;
        }
    });

    let resultText = '';
    if (score === questions.length) {
        resultText = '<span class="result green">🎉 Отлично! Ты правильно ответил на все вопросы!</span>';
    } else if (score >= questions.length / 2) {
        resultText = '<span class="result orange">😌 Хорошо! Ты ответил правильно на половину вопросов!</span>';
    } else {
        resultText = '<span class="result red">😕 Попробуй снова!</span>';
    }

    document.getElementById("test-result").innerHTML = resultText;
}

function resetTest() {
    score = 0;
    const answers = document.querySelectorAll('.answer');
    answers.forEach(answer => answer.classList.remove('selected'));
    document.getElementById("test-result").innerHTML = '';
}