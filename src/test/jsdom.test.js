import Widget from '../js/Widget.js';

test('добавление виджета', () => {
  const widget = new Widget(document.body);
  widget.bindToDOM();
  const container = document.querySelector('#widget');

  expect(container.innerHTML).toEqual(widget.htmlElement);
});

test('показать виджет', () => {
  const widget = new Widget(document.body);
  widget.bindToDOM();
  const container = document.querySelector('#widget');

  const docBody = document.body;
  docBody.addEventListener('click', () => {
    widget.positionWidget(docBody);
  });
  docBody.click();

  expect(container.classList.contains('hidden')).toBeFalsy();
});
