import GameController from './App/gamecontroller.js';

document.querySelector('.join-options').addEventListener('click', e => {
  const userOption = e.target.closest('.join-option');
  if (!userOption) return;
  const allRelatedOptions = userOption.parentNode.children;
  for (const availableOption of allRelatedOptions) {
    const action = userOption === availableOption ? 'add' : 'remove';
    availableOption.classList[action]('btn-main__active');
  }
});

class App {
  static init() {
    new GameController();
  }
}

App.init();
