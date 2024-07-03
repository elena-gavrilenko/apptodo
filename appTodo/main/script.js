let items = document.querySelectorAll('.section__item input');
let btn = document.querySelector('.footer__btn_count');
let result = document.querySelector('.footer__dateResult');
let dateToday = document.querySelector('.header__date');

dateToday.innerHTML = `Date: ${getDate()[0]}.${getDate()[1]}.${getDate()[2]}`;
let count = 0;

function getDate() {
  let now = new Date();
  let day = `0${now.getDate()}`.slice(-2);
  let month = `0${now.getMonth() + 1}`.slice(-2);
  let year = now.getFullYear();
  let numberDays = 32 - new Date(year, month - 1, 32).getDate();
  return [day, month, year, numberDays];
}

function average() {
  return ((count * 100) / items.length).toFixed(0);
}
function createMonth() {}

items.forEach((item) =>
  item.addEventListener('change', function () {
    this.checked ? count++ : count--;
    result.innerHTML = `${average()} %`;
  })
);

btn.addEventListener('click', function () {
  result.innerHTML = `${count} from ${items.length} - ${average()} %`;
  let month = new Date().toLocaleString('en-EN', { month: 'long' });
  let days = JSON.parse(localStorage.getItem(`${month}`));

  if (days == null) {
    let a = +getDate()[0];
    console.log(a);
    days = new Array(a - 1).fill(0);
    days[a - 1] = average();
    console.log(days);
    localStorage.setItem(`${month}`, JSON.stringify(days));
  } else {
    let a = +getDate()[0];
    console.log(average());
    days[a - 1] = average();
    console.log(days);
    localStorage.setItem(`${month}`, JSON.stringify(days));
  }
});
