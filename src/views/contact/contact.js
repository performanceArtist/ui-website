import '../../styles.js';
import './contact.scss';

import '../../static/images/billybob.jpg';

import { ripple } from '../../scripts';

window.onload = function init() {
  ripple();

  const els = document.querySelectorAll('.profile');
  const chat = document.querySelector('.chat');
  const chatName = chat.querySelector('.chat__name');
  const chatImg = chat.querySelector('.avatar img');

  els.forEach((el) => {
    const img = el.querySelector('.avatar img');
    const name = el.querySelector('.profile__name');

    el.addEventListener('click', () => {
      els.forEach(el => el.classList.remove('selected-contact'));
      el.classList.add('selected-contact');
      chatName.innerText = name.innerText;
      chatImg.src = img.src;
    });
  });
};
