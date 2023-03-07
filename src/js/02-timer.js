import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const text = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]')

buttonStart.disabled = true;

// об'єкт
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] < new Date()) {
         Notiflix.Notify.failure ('Please choose a date in the future');
        buttonStart.disabled = true;
      } else {
          buttonStart.disabled = false;
          targetDate = selectedDates[0];
    }
  },
};

flatpickr(text, options);
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


function addNormViewTime(value) {
    return value.toString().padStart(2, '0');
}

buttonStart.addEventListener('click', () => {
    
    let wrapTime = setInterval(() => {

        let substraction = new Date(text.value) - new Date();
        buttonStart.disabled = true;
        console.log(substraction);

        if (substraction > 0) {
            let timeObject = convertMs(substraction);
        days.textContent = addNormViewTime(timeObject.days);
        hours.textContent = addNormViewTime(timeObject.hours);
        minutes.textContent = addNormViewTime(timeObject.minutes);
        seconds.textContent = addNormViewTime(timeObject.seconds);
        } else {
            Notiflix.Notify.success('Finish');
            clearInterval(wrapTime);
    }
    }, 1000)

})
