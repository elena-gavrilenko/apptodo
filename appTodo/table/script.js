let monthName = [
  'December',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
];

// let table = document.querySelector('.table');
// // let rowMonth = document.querySelector(`.table__row`);

// monthName.forEach((el, i) => {
//   if (JSON.parse(localStorage.getItem(`${el}`)) !== null) {
//     let tr = document.createElement('tr');
//     table.append(tr);
//     let days = JSON.parse(localStorage.getItem(`${el}`));

//     for (let i = 0; i < days.length + 2; i++) {
//       let td = document.createElement('td');
//       if (i == 0) {
//         td.setAttribute('rowspan', 12);
//       }
//       tr.append(td);

//       td.innerHTML = days[i - 2] ?? 0;
//     }
//     tr.children[0].innerHTML = '2024';
//     tr.children[1].innerHTML = el;
//   }
// });

let years = document.querySelector('.data__years');
let year = document.createElement('div');
year.classList.add('data__year', 'year');
let yearTitle = document.createElement('h2');
yearTitle.classList.add('year__title');
yearTitle.innerHTML = new Date().getFullYear();
let months = document.createElement('div');
months.classList.add('year__months');
years.append(year);
year.append(yearTitle);
year.append(months);
// let month = monthName[new Date().getMonth() + 1];
// console.log(month);
monthName.forEach((el, i) => {
  if (JSON.parse(localStorage.getItem(`${el}`)) !== null) {
    let month = document.createElement('div');
    month.classList.add('year__month');
    month.classList.add('month');
    months.append(month);
    let monthTitle = document.createElement('h3');
    monthTitle.classList.add('month__title');
    monthTitle.innerHTML = el;

    let daysMonth = document.createElement('div');
    daysMonth.classList.add('month__days');
    month.append(monthTitle);
    month.append(daysMonth);

    let days = JSON.parse(localStorage.getItem(`${el}`));
    console.log(days.length);
    let averageResult =
      (days.reduce((acc, el) => (acc += +el), 0) / days.length).toFixed(2) +
      '%';
    console.log(averageResult);
    for (let i = 0; i < days.length; i++) {
      let day = document.createElement('div');
      day.classList.add('month__day');
      day.innerHTML = days[i] ?? 0;
      daysMonth.append(day);

      let dayDate = document.createElement('div');
      dayDate.classList.add('month__date');
      i < 9 ? (dayDate.innerHTML = '0' + (i + 1)) : (dayDate.innerHTML = i + 1);

      day.append(dayDate);
    }
    let result = document.createElement('div');
    result.classList.add('month__result');
    let average = document.createElement('div');
    average.classList.add('month__average');
    average.innerHTML = averageResult;
    result.append(average);
    daysMonth.append(result);
  }
});
