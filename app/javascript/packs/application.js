/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

const log1 = document.createElement("p");


document.addEventListener('DOMContentLoaded', () => {
    const stepFormElement = document.getElementById('createStepForm');
    if (stepFormElement) {
        stepFormElement.addEventListener("submit", handleStepSubmit);
        console.log("listening");
    }
});



// do we have localStorage? if so, we'll store the new steps for offline use
// fn from https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
// function storageAvailable(type) {
//     let storage;
//     try {
//         storage = window[type];
//         const x = '__storage_test__';
//         storage.setItem(x, x);
//         storage.removeItem(x);
//         return true;
//     }
//     catch(e) {
//         return e instanceof DOMException && (
//                 // everything except Firefox
//             e.code === 22 ||
//             // Firefox
//             e.code === 1014 ||
//             // test name field too, because code might not be present
//             // everything except Firefox
//             e.name === 'QuotaExceededError' ||
//             // Firefox
//             e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
//             // acknowledge QuotaExceededError only if there's something already stored
//             (storage && storage.length !== 0);
//     }
// }
function step(little_script_id, name, duration_hours, duration_minutes) {
    this.little_script_id = little_script_id,
    this.name = name,
    this.duration_hours = duration_hours,
    this.duration_minutes = duration_minutes  }


const handleStepSubmit = (e) => {
    e.preventDefault();
    log1.textContent = `Form Submitted! Time stamp: ${e.timeStamp}`;
    const stepName = document.querySelector(".favorite-input");
};
