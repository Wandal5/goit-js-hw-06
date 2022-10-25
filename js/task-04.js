// let counterValue = 0;
// const btnPlus = document.querySelector('[data-action="increment"');
// const btnMinus = document.querySelector('[data-action="decrement"');

// const span = document.querySelector('#value')

// const increment = () => {
//     counterValue += 1
//     document.getElementById('value').textContent = counterValue;

// };
// const decrement = () => {
//     counterValue -= 1
//     document.getElementById('value').textContent = counterValue;
// };

// btnPlus.addEventListener('click', increment);
// btnMinus.addEventListener('click', decrement);




  const decrement = counter.querySelector('[data-action="decrement"]');
  const increment = counter.querySelector('[data-action="increment"]');
  const value = counter.querySelector('#value');
  let numberValue = 0;

 decrement.addEventListener('click', function() {

    if (numberValue === 0) {
      return;
    };

    numberValue--;
    value.textContent = numberValue;
  });

  increment.addEventListener('click', function() {
    numberValue++;
    value.textContent = numberValue;
  });


// var counts = document.querySelectorAll('#counter');

// counts.forEach(counterFunction);

// const counters = document.querySelectorAll('[data-counter]');

// if (counters) {
//     counters.forEach(counter => {
//         counter.addEventListener('click', e => {
//             const target = e.target;
//             if (target.closest('[data-action="decrement"]')) {
//                 let value = parseInt(target.closest('.counter').querySelector('.value').value);

//                 if (target.classList.contains('[data-action="decrement"]')) {
//                     value++;
//                 }
//                 else {
//                     --value;
//                 }
//                 target.closest('[data-counter]').querySelector('.value').value = value;
//             }
            
//         })
//     })
// }