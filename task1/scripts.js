let value = `<p>Старший братец ПОНЕДЕЛЬНИК – <br>
работяга, не бездельник.<br>
Он неделю открывает<br>
всех трудиться зазывает.<br><br>

ВТОРНИК следует за братом<br>
у него идей богато.<br><br>

А потом СРЕДА-сестрица,<br>
не пристало ей лениться.<br><br>

Брат ЧЕТВЕРГ и так, и сяк,<br>
он мечтательный чудак.<br><br>

ПЯТНИЦА-сестра сумела<br>
побыстрей закончить дело.<br><br>

Предпоследний брат СУББОТА<br>
не выходит на работу.<br><br>

В гости ходит ВОСКРЕСЕНЬЕ,<br>
очень любит угощенье</p>`;

oldParagraph.insertAdjacentHTML('beforeend', value);

let newValue = value.replace('ПОНЕДЕЛЬНИК', 'MONDAY');
newValue = newValue.replace('ВТОРНИК', 'TUESDAY');
newValue = newValue.replace('СРЕДА', 'WEDNESDAY');
newValue = newValue.replace('ЧЕТВЕРГ ', 'THURSDAY');
newValue = newValue.replace('ПЯТНИЦА', 'FRIDAY');
newValue = newValue.replace('СУББОТА', 'SATURDAY');
newValue = newValue.replace('ВОСКРЕСЕНЬЕ', 'SANDAY');

newParagraph.insertAdjacentHTML('beforeend', newValue);