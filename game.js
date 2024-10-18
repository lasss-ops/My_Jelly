let score = 0;
let gameStarted = false;

// Функция для начала игры
function startGame() {
    gameStarted = true;
    document.getElementById("popup").classList.add("hidden");
    document.getElementById("score").innerText = `ZHELE: ${score}`;
}

// Обработчик клика по крысе
document.getElementById("rat").addEventListener("click", function() {
    if (gameStarted) {
        score++; // Увеличиваем счет
        document.getElementById("score").innerText = `ZHELE: ${score}`; // Обновляем счет
    }
});

// Обработчик клика по кнопке "ИГРАТЬ"
document.getElementById("start-button").addEventListener("click", startGame);

// Отображаем поп-ап при загрузке страницы
window.onload = function() {
    document.getElementById("popup").classList.remove("hidden");
};
