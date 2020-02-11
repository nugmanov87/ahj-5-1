/* eslint-disable class-methods-use-this */
export default class Widget {
  constructor(parentEl, title = '', text = '') {
    this.parentEl = parentEl;
    this.title = title;
    this.text = text;
    this.elWidget = document.createElement('div');
  }

  get htmlElement() {
    return `
    <p class="title-widget">${this.title}</p>
    <p class="text-widget">${this.text}</p>
    `;
  }

  bindToDOM() {
    this.elWidget.id = 'widget';
    this.elWidget.className = 'widget hidden';
    this.elWidget.innerHTML = this.htmlElement;
    this.parentEl.appendChild(this.elWidget);
  }

  positionWidget(element) {
    const selectWidget = document.querySelector('#widget');
    selectWidget.classList.remove('hidden');
    selectWidget.style.bottom = `${element.offsetTop + 20}px`;
    selectWidget.style.left = `${element.offsetLeft
      - (selectWidget.offsetWidth - element.offsetWidth) / 2}px`;
  }
}
