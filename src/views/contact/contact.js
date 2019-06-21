import './contact.scss';

import { ripple } from '../../scripts';

window.onload = function init() {
  ripple();

  const profiles = document.querySelectorAll('.profile');
  const chat = document.querySelector('.chat');
  const chatName = chat.querySelector('.chat__name');
  const chatImg = chat.querySelector('.avatar img');

  profiles.forEach(profile => {
    profile.addEventListener('click', event => {
      const target = event.currentTarget;
      const image = target.querySelector('.avatar img');
      const name = target.querySelector('.profile__name');

      profiles.forEach(p => p.classList.remove('profile_selected'));
      target.classList.add('profile_selected');
      chatName.innerText = name.innerText;
      chatImg.src = image.src;
    });
  });
};
