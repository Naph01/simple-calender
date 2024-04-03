const day = document.querySelector('#day');
const date = document.querySelector('#date');
const month = document.querySelector('#month');
const year = document.querySelector('#year');

const today = new Date;

const todayDay = today.getDay();
const todayDate =today.getDate();
const todayMonth = today.getMonth();
const todayYear = today.getFullYear();

const fullWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const fullYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

day.innerHTML = fullWeek[todayDay];
date.innerHTML = todayDate;
month.innerHTML = fullYear[todayMonth];
year.innerHTML = todayYear;
