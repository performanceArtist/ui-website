import '../../styles';
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
      els.forEach(elm => elm.classList.remove('profile_selected'));
      el.classList.add('profile_selected');
      chatName.innerText = name.innerText;
      chatImg.src = img.src;
    });
  });
};
