import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const text = document.querySelector('#datetime-picker');
const wrapTime = document.querySelector('.timer')
const buttonStart = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]')

buttonStart.disable = true;

// об'єкт
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates < new Date()) {
        alert("Please choose a date in the future");
        buttonStart.disable = true;
      } else {
          buttonStart.disable = false;
    }
  },
};

// функція підрахунку значень

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr(text, options);



// buttonStart.addEventListener('click', () => {
//     let 
// })