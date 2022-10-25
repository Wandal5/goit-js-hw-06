const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryName = category.querySelector("h2").innerHTML;
  const elementsNumber = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}\nElements: ${elementsNumber}`);
});
