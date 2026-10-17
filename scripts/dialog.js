
const memoryDialog = document.querySelector('#save-dialog');

const memoryOpenButton = document.querySelector('.save__button');

const memoryCloseButton = document.querySelector('.dialog__button');

// Открытие модального окна
memoryOpenButton.addEventListener('click', () => {
  memoryDialog.showModal();
});

// Закрытие модального окна
memoryCloseButton.addEventListener('click', () => {
  memoryDialog.close();
});
