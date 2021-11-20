const date = new Date();

const Obrabotka_calendar = () => {
  date.setDate(1); // Устанавливаю дату 

  const monthDays = document.querySelector('.days'); 
  // Возвращаю первый элементдокумента, который соответствует указанному селектору. В данном случае - это элемент 'days'

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay(); // Получение индекса (массива) даты

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  document.querySelector('.date h1').innerHTML = months[date.getMonth()]; // Получение месяца даты, подключение к html документу ;)

  document.querySelector(".date p").innerHTML = new Date().toDateString(); // Получение дня даты, подключение к html документу :)

  let days = '';

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let g = 1; g <= lastDay; g++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class='today'>${g}</div>`; // Допущение многострочных строк в условии
    } else {
      days += `<div>${g}</div>`;
    }
  }

  for (let z = 1; z <= nextDays; z++) {
    days += `<div class="next-date">${z}</div>`; // Допущение многострочных строк в цикле for
    monthDays.innerHTML = days;
  }
};

document.querySelector('.prev').addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  Obrabotka_calendar(); // Фича, позволяющая переключать месяц календаря "Назад", по щелчку мышью
});

document.querySelector('.next').addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  Obrabotka_calendar();
   // Фича, позволяющая переключать месяц календаря "Вперед", по щелчку мышью
});

Obrabotka_calendar() // Завершение вызова функции переключения месяца календаря;