// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');

const numbersRef = document.querySelector("#value");
let counterValue = 0;

decrementRef.addEventListener("click", decrement);
incrementRef.addEventListener("click", increment);

function decrement() {
  counterValue -= 1;
  updateCurrentValue();
}
function increment() {
  counterValue += 1;
  updateCurrentValue();
}

function updateCurrentValue() {
  numbersRef.textContent = counterValue;
}
