const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const others = ingredients.map((ingredient) => {
  const liElem = document.createElement("li");
  liElem.textContent = ingredient;
  return liElem;

  console.log(liElem);
});

const ulEl = document.querySelector("ul");

ulEl.append(...others);
console.log(ulEl);
