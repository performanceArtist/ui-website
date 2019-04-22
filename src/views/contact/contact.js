import '../../styles.js';
import './contact.scss';

window.onload = function() {
    let els = document.querySelectorAll('.profile'),
        chat = document.querySelector('.chat'),
        chatName = chat.querySelector('.chat-name'),
        chatImg = chat.querySelector('.avatar img');

    els.forEach(el => {
        let img = el.querySelector('.avatar img'),
            name = el.querySelector('.profile-name');

        el.addEventListener('click', function() {
            els.forEach(el => el.classList.remove('selected-contact'));
            el.classList.add('selected-contact');
            chatName.innerText = name.innerText;
            chatImg.src = img.src;
        });
    })
}