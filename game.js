jelly.addEventListener('click', function(event) {
    if (bonusMode) {
        // Увеличиваем счет на 10 в бонусном режиме
        score += 10;

        // Перемещаем желе в новую позицию только в бонусном режиме
        moveJelly();
    } else {
        // Увеличиваем счет на 1 в обычном режиме
        score++;
    }

    // Обновляем счетчик
    scoreDisplay.textContent = 'ZHELE: ' + score;

    // Проверяем, достигнут ли уровень
    if (score >= level * levelUpScore) {
        level++;
        levelDisplay.textContent = 'Уровень: ' + level;
    }

    // Обновляем прогресс
    const progress = (score % levelUpScore) / levelUpScore * 100; // Процент заполнения
    progressBar.style.width = progress + '%';

    // Обновляем информацию о следующем уровне
    updateNextLevelDisplay();

    // Проигрываем звук
    tapSound.currentTime = 0; // Сбрасываем время для повторного воспроизведения
    tapSound.play();

    // Добавляем эффект свечения
    jelly.style.boxShadow = '0 0 30px rgba(76, 175, 80, 1)'; // Яркое зеленое свечение

    // Создание сообщения
    const message = document.createElement('div');
    message.className = 'message';
    message.textContent = bonusMode ? '+10' : '+1';
    message.style.left = event.clientX + 'px';
    message.style.top = event.clientY + 'px';
    document.body.appendChild(message);

    // Плавное движение вверх и исчезновение сообщения
    setTimeout(() => {
        message.style.transform = 'translateY(-50px)'; // Поднимаем сообщение вверх
        message.style.opacity = '0'; // Убираем видимость
    }, 10); // Задержка для анимации

    // Удаляем сообщение через 1 секунду
    setTimeout(() => {
        document.body.removeChild(message);
    }, 1000);

    // Анимация нажатия
    jelly.style.transform = 'scale(0.9)';
    setTimeout(() => {
        jelly.style.transform = 'scale(1)';
        jelly.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)'; // Восстанавливаем тень
    }, 100);
    
    // Добавляем эффект яркости на экран
    document.body.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; // Добавляем белый цвет
    setTimeout(() => {
        document.body.style.backgroundColor = ''; // Убираем эффект
    }, 100); // Задержка, чтобы эффект не задерживался
});
