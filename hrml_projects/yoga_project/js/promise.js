window.addEventListener('DOMContentLoaded', function() {
    'use strict';
   // Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');
    function sendForm(elem) {
        elem.addEventListener('submit', function(event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);

            function postData(data) {
                return new Promise(function(resolve, reject) {

                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                request.onreadystatechange = function() {
                    if (request.readyState < 4) {
                        resolve()
                    } else if(request.readyState === 4 && request.status == 200) {
                        resolve()
                    } else {
                        reject()
                    }
                }
            },
            request.send(json);        
        })

    }
    function clearInput() {
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    }
    postData(formData)
        .then(()=> statusMessage.innerHTML = message.loading)
        .then(()=> statusMessage.innerHTML = message.success)

        .catch(()=> statusMessage.innerHTML = message.failure)
        .then(clearInput)
});