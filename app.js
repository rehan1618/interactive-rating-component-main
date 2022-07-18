let rating = '1';

const ratingList = document.querySelector('.rating-container');
const submitBtn = document.querySelector('.btn');
const rated = document.querySelector('.rated');
const ratingCard = document.querySelector('#rating-card');
const thankYouCard = document.querySelector('#thank-you-card');

ratingList.addEventListener('click', function (e) {
  rating = Number(e.target.innerText);

  for (let i = 0; i < ratingList.children.length; i++) {
    const element = ratingList.children[i];

    if (element !== e.target) {
      element.classList.remove('active');
    }
  }

  e.target.classList.add('active');

  rating = e.target.innerText;
});

submitBtn.addEventListener('click', function () {
  ratingCard.classList.add('invisible');
  thankYouCard.classList.remove('invisible');
  rated.innerText = 'You selected ' + rating + ' out of 5';
});
