function checkAnswer(button, isCorrect) {
    // 1. Reseteamos todos los botones para quitar colores previos
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.classList.remove('correct', 'incorrect');
        btn.disabled = true; // Bloqueamos para que no puedan cambiar respuesta
    });

    const feedback = document.getElementById('feedback');
    feedback.style.display = 'block';

    if (isCorrect) {
        // Si es correcta
        button.classList.add('correct');
        feedback.innerText = "¡Excelente! 🎉 Es el traductor del equipo.";
        feedback.style.backgroundColor = "#d7ffb8";
        feedback.style.color = "#46a302";
        
        // Efecto de sonido (opcional)
        // const audio = new Audio('correct.mp3'); audio.play();
    } else {
        // Si es incorrecta
        button.classList.add('incorrect');
        feedback.innerText = "¡Ups! 😓 Intenta de nuevo recargando la página.";
        feedback.style.backgroundColor = "#ffdfe0";
        feedback.style.color = "#ea2b2b";
        
        // Habilitar recarga rápida
        setTimeout(() => {
             buttons.forEach(btn => btn.disabled = false);
             button.classList.remove('incorrect');
        }, 2000);
    }
}