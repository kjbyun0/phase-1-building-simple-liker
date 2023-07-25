// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.getElementsByClassName('like-glyph');
const arrHearts = [...hearts];
arrHearts.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    if (e.target.textContent === EMPTY_HEART) {
      mimicServerCall()
      .then(resp => {
        e.target.textContent = FULL_HEART;
        e.target.classList.add('activated-heart');
      })
      .catch(error => {
        const divModal = document.querySelector('#modal');
        divModal.classList.remove('hidden');
        const pError = modal.querySelector('#modal-message');
        pError.textContent = error;
        setTimeout(() => {
          divModal.classList.add('hidden');
        }, 3000);
      });
    } else {
      e.target.textContent = EMPTY_HEART;
      e.target.classList.remove('activated-heart');
    }
  })
});


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
