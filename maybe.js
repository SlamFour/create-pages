document.addEventListener('DOMContentLoaded'), () => {
    fetch('header.html')
    .then(data => {
        const targetElement = document.querySelector('.header-container');

        targetElement.innerHTML = data;
        const button = document.getElementById('submit-page');


        buttonEvent(button);
    })
}


function buttonEvent(e) {
    e.addEventListener('click', () => {
        const data = 'send it';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        fetch('/nodejs', options) {

        }
    })
}