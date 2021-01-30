const moreBtn = document.querySelector('.moreBtn');
const title = document.querySelector('.info .metadata .title');

console.log(moreBtn);

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});
