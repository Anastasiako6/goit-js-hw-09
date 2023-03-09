import Notiflix from "notiflix";

const form = document.querySelector('.form')
const delayElement = document.querySelector('input[name="delay"]')
const stepElement = document.querySelector('input[name="step"]')
const amountElement = document.querySelector('input[name="amount"]')
const buttonElement = document.querySelector('button[type="submit"]')

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
       if (shouldResolve) {
         resolve({ position, delay });
        } else {
         reject({ position, delay });
  }
    }, delay)
  })
  return promise
}

buttonElement.addEventListener('click', (element) => {
  element.preventDefault();

  let firstDelay = Number(delayElement.value);
  let delayStep = Number(stepElement.value);

  for (let i = 0; i < amountElement.value; i += 1) {
    createPromise(i + 1, firstDelay + i * delayStep)
      .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
      })
      .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    })
  }
  form.reset();
});

