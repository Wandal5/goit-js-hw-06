const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const arr = [];
 
for (let i = 0; i < ingredients.length; i += 1) {
  const newItem = document.createElement("li");
  newItem.textContent = ingredients[i];
  newItem.classList.add("item");
  console.log(newItem);
  arr.push(newItem);
}
list.append(...arr);

// const arr = [];
// for (let i = 0; i < 1; i += 1) {
//   const li = document.createElement('li');
//   arr.push(li);
//   console.log(arr);
// }

// let vegetables = document.getElementsByClassName('vegetables')[0]


// let user = (param1, param2) => {
//     for (const user of param2) {
//       let li = document.createElement('li')
//       li.innerText = user
      
//       param1.append(li)
//     }
// }
// user(vegetables, ingredients)

// let sector = document.querySelector('#sector');

// for (let i = 1; i <= 6; i++) {
// 	let li = document.createElement('li');
// 	li.innerHTML = i;
// 	parent.appendChild(li);
// }
