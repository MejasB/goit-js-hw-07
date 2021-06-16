const mainList = document.querySelector("ul");

const categories = mainList.children;
console.log(`В списке ${categories.length} категории`);

[...categories].forEach((li) => {
  const title = li.querySelector("h2");
  console.log(`Категория: ${title.textContent}`);
  const others = li.querySelector("ul");
  const children = others.children;
  console.log(`Кличество элементов : ${children.length}`);
});
