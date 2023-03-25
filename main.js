let divs = document.querySelectorAll('div.key');

function onDownKey(event) {
    for (const div of divs) {
        if (div.getAttribute('data') == event.code){
            div.classList.add('active');
        }
        else {
            div.classList.remove('active');
        }
    }
    
}

document.querySelector('.input').onkeydown = onDownKey;