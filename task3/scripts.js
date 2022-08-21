let numbers = [0,1,2,3,4,5,6,7,8,9];

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

let quantity = randomInteger(3, 6);

let hiddenNumber = new Array(quantity);

for (let i = 0; i < quantity; i++) {
  if ((i === quantity-1) && (numbers[0] === 0)){
    numbers.splice(0, 1);
    let currentPos = randomInteger(0, numbers.length-2);
    hiddenNumber[i] = numbers[currentPos];
    numbers.splice(currentPos, 1);
  } else {
    let currentPos = randomInteger(0, numbers.length-1);
    hiddenNumber[i] = numbers[currentPos];
    numbers.splice(currentPos, 1);
  }
};

hiddenNumber = hiddenNumber.reverse().join('');

pQuantity.insertAdjacentHTML('beforeend', quantity);

userNumber = prompt('Введите Ваше число');

while (userNumber !== hiddenNumber) {
  let bulls = 0;
  let cows = 0;
  for (let i = 0; i < quantity; i++) {
    let currentValue = userNumber[i];
    let userIndex = hiddenNumber.indexOf(currentValue);
    if (userIndex !== -1) {
      if (userIndex === i) {
        bulls++
      } else {
        cows++
      }
    }

    
  };
  userNumber = prompt(`Быки: ${bulls}, коровы ${cows} Введите Ваше число`);
}

let msg = 'Правильно! Число ' + hiddenNumber;

main.insertAdjacentHTML('beforeend', msg);
