// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const validInput = document.querySelector("#validation-input");
const dataLength = +validInput.dataset.length;

validInput.addEventListener("change", () => {
  if (validInput.value.length === dataLength) {
    updateClass("valid", "invalid");
  } else {
    updateClass("invalid", "valid");
  }
});

function updateClass(addClass, removeClass) {
  validInput.classList.remove(removeClass);
  validInput.classList.add(addClass);
}
