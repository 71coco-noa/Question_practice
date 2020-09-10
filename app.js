const quiz = [
  {
    question: '女性が魅力的に感じる、男性の体の部位は？',
    answers: [ '胸筋', '腹筋', '二の腕', '背中'],
    correct: '二の腕'
  }, {
    question: 'タンパク質の吸収率が一番良い玉子の食べ方は？',
    answers: [ '茹で卵', '温泉卵','目玉焼き','生卵'],
    correct: '温泉卵'
  }, {
    question: '痩せやすいトレーニング種目は？',
    answers: [ 'スクワット', 'ランニング', 'デットリフト', 'ベンチプレス'],
    correct: 'スクワット'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;

  const buttonLen = $buttons.length;
  let btnIndex = 0;

  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたの正解率は' + score + '/' + quizLen + 'です。';

  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
} 