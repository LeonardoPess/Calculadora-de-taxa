export default class ToggleSelected {
  constructor(list) {
    this.list = document.querySelectorAll(list);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ currentTarget }) {
    this.list.forEach((item) => item.classList.remove('selected'));
    currentTarget.classList.add('selected');
  }

  handleEvents() {
    this.list.forEach((item) => item.addEventListener('click', this.handleClick));
  }

  init() {
    this.handleEvents();
  }
}
