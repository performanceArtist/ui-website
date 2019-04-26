import '../../styles.js';
import './contact.scss';

import '../../static/images/billybob.jpg';

import {ripple} from '../../scripts';

window.onload = function() {
    ripple();

    let els = document.querySelectorAll('.profile'),
        chat = document.querySelector('.chat'),
        chatName = chat.querySelector('.chat__name'),
        chatImg = chat.querySelector('.avatar img');

    els.forEach(el => {
        let img = el.querySelector('.avatar img'),
            name = el.querySelector('.profile__name');

        el.addEventListener('click', function() {
            els.forEach(el => el.classList.remove('selected-contact'));
            el.classList.add('selected-contact');
            chatName.innerText = name.innerText;
            chatImg.src = img.src;
        });
    })
}