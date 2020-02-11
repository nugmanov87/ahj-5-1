import Widget from './Widget.js';

const button = document.getElementById('button');
const addWidget = new Widget(
  document.body,
  'Popover title',
  'And here`s some amazing content. It`s very engaging. Right?',
);
addWidget.bindToDOM();

button.addEventListener('click', () => {
  addWidget.positionWidget(button);
});
