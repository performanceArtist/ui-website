import MessageForm from './message-form';

document
  .querySelectorAll('.message-form')
  .forEach(element => new MessageForm(element));
