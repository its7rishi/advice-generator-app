let advise

const button = document.querySelector('button')

button.addEventListener('click', () => getAdvice())

function getAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => {
      advise = data

      let adviceId = document.getElementById('advice-id')
      adviceId.textContent = advise.slip.id

      let adviceText = document.getElementById('advice-text')
      adviceText.textContent = advise.slip.advice
    })
}

window.addEventListener('load', () => getAdvice())
