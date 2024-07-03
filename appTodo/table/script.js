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
let rowMonth = document.querySelector(`.table__row`);
months.forEach((el, i) => {
  if (JSON.parse(localStorage.getItem(`${el}`)) !== null) {
    let days = JSON.parse(localStorage.getItem(`${el}`));

    for (let i = 0; i < days.length + 1; i++) {
      let td = document.createElement('td');
      rowMonth.append(td);
      td.innerHTML = days[i - 1] ?? 0;
    }
    rowMonth.children[1].innerHTML = el;
  }
});
