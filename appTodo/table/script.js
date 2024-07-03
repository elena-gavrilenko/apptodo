let months = [
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
let table = document.querySelector('.table');
let rowMonth = document.querySelector(`.table__row`);

months.forEach((el, i) => {
  if (JSON.parse(localStorage.getItem(`${el}`)) !== null) {
    let tr = document.createElement('tr');
    table.append(tr);
    let days = JSON.parse(localStorage.getItem(`${el}`));

    for (let i = 0; i < days.length + 2; i++) {
      let td = document.createElement('td');
      tr.append(td);

      td.innerHTML = days[i - 2] ?? 0;
    }
    tr.children[0].innerHTML = '2024';
    tr.children[1].innerHTML = el;
  }
});
