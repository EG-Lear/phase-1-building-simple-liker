// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.like').forEach(like => {
    like.addEventListener('click', heartMod)
  }) 
})

document.getElementById('modal').classList.add('hidden') // hides error

function heartMod(event) { //makes hearts red
  const target = event.target.querySelector('span')
  mimicServerCall()
  .then(() => {
    if (target.textContent === `${FULL_HEART}`) {
      console.log('testing remove')
      target.classList.remove('activated-heart')
      target.textContent = EMPTY_HEART
    } else {
      console.log('testing add')
      target.classList.add('activated-heart')
      target.textContent = FULL_HEART
    }
  }) 
  .catch(res => {
    setTimeout(addHidden, 3000)
    document.getElementById('modal').classList.remove('hidden')
    document.getElementById('modal-message').innerHTML = res
  })
}

function addHidden() {
  document.getElementById('modal').classList.add('hidden')
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
