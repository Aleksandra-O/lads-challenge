const monster = {
  maxHealth: 10,
  name: "Лютый",
  moves: [
    {
      "name": "Удар когтистой лапой",
      "physicalDmg": 3, // физический урон
      "magicDmg": 0,    // магический урон
      "physicArmorPercents": 20, // физическая броня
      "magicArmorPercents": 20,  // магическая броня
      "cooldown": 0     // ходов на восстановление
    },
    {
      "name": "Огненное дыхание",
      "physicalDmg": 0,
      "magicDmg": 4,
      "physicArmorPercents": 0,
      "magicArmorPercents": 0,
      "cooldown": 3
    },
    {
      "name": "Удар хвостом",
      "physicalDmg": 2,
      "magicDmg": 0,
      "physicArmorPercents": 50,
      "magicArmorPercents": 0,
      "cooldown": 2
    },
  ]
};

const wizard = {
  maxHealth: null,
  name: "Евстафий",
  moves: [
    {
      "name": "Удар боевым кадилом",
      "physicalDmg": 2,
      "magicDmg": 0,
      "physicArmorPercents": 0,
      "magicArmorPercents": 50,
      "cooldown": 0
    },
    {
      "name": "Вертушка левой пяткой",
      "physicalDmg": 4,
      "magicDmg": 0,
      "physicArmorPercents": 0,
      "magicArmorPercents": 0,
      "cooldown": 4
    },
    {
      "name": "Каноничный фаербол",
      "physicalDmg": 0,
      "magicDmg": 5,
      "physicArmorPercents": 0,
      "magicArmorPercents": 0,
      "cooldown": 3
    },
    {
      "name": "Магический блок",
      "physicalDmg": 0,
      "magicDmg": 0,
      "physicArmorPercents": 100,
      "magicArmorPercents": 100,
      "cooldown": 4
    },
  ]
};

function addCurentCooldown (player) {
  for (let i = 0; i < player.moves.length; i++) {
    player.moves[i].curentCooldown = 0;
  }
  return player;
}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const availableOptions = (player) => {
  let options = [];
  for (let i = 0; i < player.moves.length; i++) {
    if (player.moves[i].curentCooldown === 0) {
      options[i] = player.moves[i];
    }
  }
  options = options.filter(element => element !== null);
  return options;
};

const showOneOption = (option) => {
  return `<ul>
  <li>name: ${option.name}</li>
  <li>physicalDmg: ${option.physicalDmg}</li>
  <li>magicDmg: ${option.magicDmg}</li>
  <li>physicArmorPercents: ${option.physicArmorPercents}</li>
  <li>magicArmorPercents: ${option.magicArmorPercents}</li>
  <li>cooldown: ${option.cooldown}</li>
  </ul>`;
};

const showAllOptions = (options) => {
  let result = '';
  for (let i = 0; i < options.length; i++) {
    result = result + `<input type="radio" name="${options[i].name}" id="${options[i].name}"><label for="${options[i].name}">${showOneOption(options[i])}</label>`;
  }
  return result;
};

let wizardHealth = prompt('Введите начальное здоровье боевого мага Евстафия', '10');

wizard.maxHealth = wizardHealth;

addCurentCooldown(monster);
addCurentCooldown(wizard);

monster.health = monster.maxHealth;
wizard.health = wizard.maxHealth;

while ((monster.health > 0) && (wizard.health > 0)) {
  /*
  убрать все чекед
  дать выбор атак мага
  */

  msgCurrentHealth = `<p id="currentHealth">Текущее здоровье Лютого ${monster.health}/${monster.maxHealth}, текущее здоровье Евстафия ${wizard.health}/${wizard.maxHealth}</p>`
  main.insertAdjacentHTML('afterbegin', msgCurrentHealth);

  const currentMonsterMove = availableOptions(monster)[randomInteger(0,availableOptions(monster).length)];
  console.log(availableOptions(wizard));
  

  monstersAttack.insertAdjacentHTML('beforeend', '<p id="monstersAttack">Атака монстра:</p>' + showOneOption(currentMonsterMove));
  chooseBlock.insertAdjacentHTML('afterbegin', '<p id="wizardsAttack">Выбрать атаку мага:</p>');
  userChoose.insertAdjacentHTML('beforeend', showAllOptions(availableOptions(wizard)));

  const currentWizardMove = availableOptions(wizard)[randomInteger(0,availableOptions(wizard).length)]; //!!!!!
  console.log(currentWizardMove);

  monster.health = monster.health - (currentWizardMove.physicalDmg*((100-currentMonsterMove.physicArmorPercents)/100)) - (currentWizardMove.magicDmg*((100-currentMonsterMove.magicArmorPercents)/100));
  wizard.health = wizard.health - (currentMonsterMove.physicalDmg*((100-currentWizardMove.physicArmorPercents)/100)) - (currentMonsterMove.magicDmg*((100-currentWizardMove.magicArmorPercents)/100));

  monster.moves.forEach(function(item, _index, _array) {
    if (item.curentCooldown > 0) {
      item.curentCooldown --;
    } else {
      item.curentCooldown = 0;
    }
  });
  
  wizard.moves.forEach(function(item, _index, _array) {
    if (item.curentCooldown > 0) {
      item.curentCooldown --;
    } else {
      item.curentCooldown = 0;
    }
  });

  monster.moves.forEach(function(item, _index, _array) {
    if (item.name === currentMonsterMove.name) {
      item.curentCooldown = item.cooldown;
    } else {
      item.curentCooldown=0;
    }
  });

  wizard.moves.forEach(function(item, _index, _array) {
    if (item.name === currentWizardMove.name) {
      item.curentCooldown = item.cooldown;
    } else {
      item.curentCooldown = 0;
    }
  });

  document.getElementById('currentHealth').innerHTML = "";
  document.getElementById('monstersAttack').innerHTML = "";
  document.getElementById('wizardsAttack').innerHTML = "";
  document.getElementById('userChoose').innerHTML = "";
  
};

input.addEventListener("click", (event) => {
  console.log('**');
}, true);

