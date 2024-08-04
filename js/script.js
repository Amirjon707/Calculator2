const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');
const theme = document.querySelector('.theme');
const themeIcon = document.querySelector('.themeIcon');

let expression = '';

// Обработчик события для кнопок калькулятора
buttons.forEach(button => {
    button.addEventListener('click', function () {
        const buttonId = button.id;
        const buttonText = button.innerHTML;

        if (buttonId === 'clear') {
            display.innerHTML = '';
            expression = '';
        } else if (buttonId === 'backspace') {
            display.innerHTML = display.innerHTML.slice(0, -1);
            expression = expression.slice(0, -1);
        } else if (buttonId === 'equal') {
            try {
                display.innerHTML = eval(expression);
            } catch {
                display.innerHTML = 'Error';
            }
        } else {
            display.innerHTML += buttonText;
            // Заменяем символы для корректного выражения
            expression += buttonId === '*' ? '*' : buttonId === '/' ? '/' : buttonId;
        }
    });
});

// Обработчик события для переключения темы
theme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeIcon.classList.toggle('fa-moon');
    themeIcon.classList.toggle('fa-sun');
});
