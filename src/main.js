"use strict";

window.onload = function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log('Sending file to audio worker...');
    const fileInput = document.querySelector('#audioFile');
    const audioFile = fileInput.files[0];

    // upload to google cloud storage

    // send api call with uri to google speech-to-text
  });
}


