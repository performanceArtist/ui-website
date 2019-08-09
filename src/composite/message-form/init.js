import MessageForm from './message-form';

document
  .querySelectorAll('.js-message-form')
  .forEach(element => new MessageForm(element));
