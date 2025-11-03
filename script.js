// Массив карточек с вопросами и ответами
const cards = [
    { question: "Столица Франции?", answer: "Париж" },
    { question: "Сколько будет 2+2?", answer: "4" },
    { question: "Какой газ необходим для дыхания?", answer: "Кислород" },
    { question: "Самая большая планета в Солнечной системе?", answer: "Юпитер" },
    { question: "Сколько дней в году?", answer: "365" },
    { question: "Кто написал 'Война и мир'?", answer: "Лев Толстой" },
    { question: "Какой элемент обозначается символом O?", answer: "Кислород" },
    { question: "Сколько цветов в радуге?", answer: "7" }
];

// Инициализация состояния приложения
let gameState = {
    greenCards: [...cards], // Все карточки начинают в зеленой колоде
    blueCards: [],
    yellowCards: [],
    activeCard: null,
    activeCardField: null // Поле, откуда была взята активная карточка
};

// DOM элементы
const greenField = document.getElementById('greenField');
const blueField = document.getElementById('blueField');
const yellowField = document.getElementById('yellowField');
const centerArea = document.getElementById('centerArea');
const activeCardElement = document.getElementById('activeCard');
const cardQuestion = document.getElementById('cardQuestion');
const cardAnswer = document.getElementById('cardAnswer');

// Функция для обновления отображения колод
function updateFieldDisplays() {
    updateFieldDisplay('greenCards', gameState.greenCards, 'greenCards');
    updateFieldDisplay('blueCards', gameState.blueCards, 'blueCards');
    updateFieldDisplay('yellowCards', gameState.yellowCards, 'yellowCards');
}

// Функция для обновления отображения одной колоды
function updateFieldDisplay(fieldId, cardsArray, fieldArrayName) {
    const container = document.getElementById(fieldId);
    container.innerHTML = '';
    
    cardsArray.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        
        // Добавляем класс zoomed для уменьшения карточек при большом количестве
        if (cardsArray.length > 10) {
            cardElement.classList.add('zoomed');
        }
        
        cardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <p>${card.question}</p>
                </div>
                <div class="card-back">
                    <p>${card.answer}</p>
                </div>
            </div>
        `;
        
        // Добавляем обработчик клика для выбора конкретной карточки
        cardElement.addEventListener('click', function(e) {
            e.stopPropagation(); // Предотвращаем всплытие события
            selectCardFromField(fieldArrayName, index);
        });
        
        container.appendChild(cardElement);
    });
    
    // Обновляем счетчик карточек
    updateCardCounts();
}
// Функция для выбора карточки из поля по индексу
function selectCardFromField(fieldArrayName, index) {
    // Если уже есть активная карточка, ничего не делаем
    if (gameState.activeCard !== null) return;
    
    const fieldArray = gameState[fieldArrayName];
    
    if (index >= 0 && index < fieldArray.length) {
        const card = fieldArray.splice(index, 1)[0]; // Удаляем карточку из поля
        
        gameState.activeCard = card;
        gameState.activeCardField = fieldArrayName;
        
        // Обновляем отображение центральной карточки
        cardQuestion.textContent = gameState.activeCard.question;
        cardAnswer.textContent = gameState.activeCard.answer;
        activeCardElement.style.display = 'block';
        
        // Убираем перевернутость карточки
        activeCardElement.classList.remove('flipped');
        
        // Add down-strelka class to all arrows (same behavior as moveCardToCenter)
        const upStrelkaElements = document.getElementsByClassName('up-strelka');
        for (let i = 0; i < upStrelkaElements.length; i++) {
            upStrelkaElements[i].classList.add('down-strelka');
        }
        
        // Обновляем отображение полей
        updateFieldDisplays();
    }
}

// Функция для перемещения карточки в центр (не используется теперь, т.к. карточки берутся по клику)
// Оставляем для совместимости с обработчиками кликов по полям
function moveCardToCenter(field, fieldArrayName) {
    // Если уже есть активная карточка, ничего не делаем
    if (gameState.activeCard !== null) return;
    
    // Получаем случайную карточку из указанного поля
    if (gameState[fieldArrayName].length > 0) {
        const randomIndex = Math.floor(Math.random() * gameState[fieldArrayName].length);
        const card = gameState[fieldArrayName].splice(randomIndex, 1)[0]; // Берем случайную карточку
        
        gameState.activeCard = card;
        gameState.activeCardField = fieldArrayName;
        
        // Обновляем отображение центральной карточки
        cardQuestion.textContent = gameState.activeCard.question;
        cardAnswer.textContent = gameState.activeCard.answer;
        activeCardElement.style.display = 'block';
        
        // Убираем перевернутость карточки
        activeCardElement.classList.remove('flipped');
        
        // Обновляем отображение полей
        updateFieldDisplays();
    }

    // Get all elements with the class 'up-strelka' and add 'down-strelka' class to each
    // The CSS is designed so that down-strelka overrides up-strelka due to declaration order
    const upStrelkaElements = document.getElementsByClassName('up-strelka');
    for (let i = 0; i < upStrelkaElements.length; i++) {
        upStrelkaElements[i].classList.add('down-strelka');
    }
}


// Функция для перемещения активной карточки в поле
function moveActiveCardToField(fieldArrayName) {
    if (gameState.activeCard === null) return;
    
    // Добавляем активную карточку в указанное поле
    gameState[fieldArrayName].push(gameState.activeCard);
    
    // Очищаем активную карточку
    gameState.activeCard = null;
    gameState.activeCardField = null;
    
    // Скрываем центральную карточку
    activeCardElement.style.display = 'none';
    
    // Remove down-strelka class from all arrows when moving card back to any field
    const upStrelkaElements = document.getElementsByClassName('up-strelka');
    for (let i = 0; i < upStrelkaElements.length; i++) {
        upStrelkaElements[i].classList.remove('down-strelka');
    }
    
    // Обновляем отображение полей
    updateFieldDisplays();
}

// Обработчики кликов по полям
greenField.addEventListener('click', () => {
    if (gameState.activeCard === null) {
        moveCardToCenter('greenField', 'greenCards');
    } else {
        moveActiveCardToField('greenCards');
    }
});
document.getElementById('greenFieldStr').addEventListener('click', () => {
    if (gameState.activeCard === null) {
        moveCardToCenter('greenField', 'greenCards');
    } else {
        moveActiveCardToField('greenCards');
    }
});

blueField.addEventListener('click', () => {
    if (gameState.activeCard === null) {
        moveCardToCenter('blueField', 'blueCards');
    } else {
        moveActiveCardToField('blueCards');
    }
});
document.getElementById('blueFieldStr').addEventListener('click', () => {
    if (gameState.activeCard === null) {
        moveCardToCenter('blueField', 'blueCards');
    } else {
        moveActiveCardToField('blueCards');
    }
});

yellowField.addEventListener('click', () => {
    if (gameState.activeCard === null) {
        moveCardToCenter('yellowField', 'yellowCards');
    } else {
        moveActiveCardToField('yellowCards');
    }
});
document.getElementById('yellowFieldStr').addEventListener('click', () => {
    if (gameState.activeCard === null) {
        moveCardToCenter('yellowField', 'yellowCards');
    } else {
        moveActiveCardToField('yellowCards');
    }
});
// Обработчик клика по активной карточке для переворота
activeCardElement.addEventListener('click', () => {
    if (gameState.activeCard !== null) {
        activeCardElement.classList.toggle('flipped');
    }
});
// Функция для обновления счетчиков карточек
function updateCardCounts() {
    document.getElementById('greenCount').textContent = gameState.greenCards.length;
    document.getElementById('blueCount').textContent = gameState.blueCards.length;
    document.getElementById('yellowCount').textContent = gameState.yellowCards.length;
}

// Инициализация отображения
updateFieldDisplays();
updateCardCounts();

// Обработчики для кнопки "Загрузить свои" и модального окна
const loadOwnBtn = document.getElementById('loadOwnBtn');
const modal = document.getElementById('loadOwnModal');
const closeBtn = document.querySelector('.close');
const saveQuestionsBtn = document.getElementById('saveQuestionsBtn');
const questionsInput = document.getElementById('questionsInput');

// Открытие модального окна
loadOwnBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Закрытие модального окна
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие модального окна при клике вне его области
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Сохранение вопросов и ответов
saveQuestionsBtn.addEventListener('click', () => {
    const inputText = questionsInput.value.trim();
    if (inputText) {
        // Разбиваем текст на строки
        const lines = inputText.split('\n');
        const newCards = [];
        
        lines.forEach(line => {
            const parts = line.split(';');
            if (parts.length === 2) {
                const question = parts[0].trim();
                const answer = parts[1].trim();
                if (question && answer) {
                    newCards.push({ question, answer });
                }
            }
        });
        
        // Заменяем массив cards новыми данными
        if (newCards.length > 0) {
            // Обновляем глобальный массив cards
            cards.length = 0;
            newCards.forEach(card => cards.push(card));
            
            // Обновляем gameState, чтобы все карточки были в зеленой колоде
            gameState.greenCards = [...cards];
            gameState.blueCards = [];
            gameState.yellowCards = [];
            gameState.activeCard = null;
            
            // Скрываем активную карточку, если она была
            activeCardElement.style.display = 'none';
            
            // Обновляем отображение
            updateFieldDisplays();
            updateCardCounts();
        }
        
        // Закрываем модальное окно
        modal.style.display = 'none';
        
        // Очищаем поле ввода
        questionsInput.value = '';
    }
});
