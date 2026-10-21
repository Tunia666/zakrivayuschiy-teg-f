const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');
const likeTextTimers = new WeakMap();

iconButtonArray.forEach((iconButton, index) => {
  iconButton.onclick = () =>
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
});

likeButtonArray.forEach((button, index) => {
  button.onclick = () => toggleIsLiked(likeHeartArray[index], button);
});

function toggleIsLiked(heart, button) {
  heart.classList.toggle('is-liked');
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  clearTimeout(likeTextTimers.get(button));

  const isLiked = heart.classList.contains('is-liked');
  const text = isLiked ? 'Unlike' : 'Like';

  const timer = setTimeout(() => {
    button.querySelector('.button__text').textContent = text;
    likeTextTimers.delete(button);
  }, 500);

  likeTextTimers.set(button, timer);
}
