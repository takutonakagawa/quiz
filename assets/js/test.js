const quiz = [
    {
    question: 'ゲーム市場、もっとも売れたゲーム機は次のうちどれ？',
    answers: [
        'スーパーファミコン',
        'プレイステーション２',
        'ニンテンドースイッチ',
        'ニンテンドーDS'
        ],
        correct: 'ニンテンドーDS',
        description:'2004年11月24日発売、2画面の携帯ゲーム機'
    }, {
        question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
        answers: [
        'MONSTER2',
        'スーパーマリオブラザーズ',
        'スーパードンキーコング',
        '星のカービィ'
        ],
        correct: 'MONSTER2',
        description: 'ネス'
    }, {
        question: 'ファイナルファンタジーIVの主人公の名前は？',
        answers: [
        'フリオニール',
        'クラウド',
        'ティーダ',
        'セシル'
        ],
        correct: 'セシル',
        description: 'ネス'
    }, {
        question: '1',
        answers: [
        'フリオニール',
        'クラウド',
        '1',
        'セシル'
        ],
        correct: '1',
        description: 'ネス'
    }, {
        question: '2',
        answers: [
        '2',
        'クラウド',
        'ティーダ',
        'セシル'
        ],
        correct: '2',
        description: 'ネス'
    }, {
        question: '3',
        answers: [
        'フリオニール',
        '3',
        'ティーダ',
        'セシル'
        ],
        correct: '3',
        description: 'ネス'
    }, {
        question: '4',
        answers: [
        'フリオニール',
        'クラウド',
        '4',
        'セシル'
        ],
        correct: '4',
        description: 'ネス'
    }, {
        question: '5',
        answers: [
        'フリオニール',
        'クラウド',
        'ティーダ',
        '5'
        ],
        correct: '5',
        description: 'ネス'
    }, {
        question: '6',
        answers: [
        'フリオニール',
        'クラウド',
        'ティーダ',
        '6'
        ],
        correct: '6',
        description: 'ネス'
    }, {
        question: '7',
        answers: [
        'フリオニール',
        'クラウド',
        'ティーダ',
        '7'
        ],
        correct: '7',
        description: 'ネス'
    }, {
        question: '8',
        answers: [
        'フリオニール',
        'クラウド',
        'ティーダ',
        '8'
        ],
        correct: '8',
        description: 'ネス'
    }, {
        question: '9',
        answers: [
        'フリオニール',
        'クラウド',
        'ティーダ',
        '9'
        ],
        correct: '9',
        description: 'ネス'
    }
];

let random = Math.floor( Math.random() * 12 );

// console.log( random );

// let randomQuiz = quiz[Math.floor(Math.random() * quiz.length)];

const quizLength = quiz.length;
let quizIndex = random;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

   //クイズの問題、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！\n' + quiz[quizIndex].description);
        score++;
    } else {
        window.alert('不正解！\n' + quiz[quizIndex].description);
    }

    quizIndex++;

    if(quizIndex < quizLength){
        setupQuiz();
    } else {
        // window.alert('終了！正解数は' + score + '/' + quizLength);
        if( 1 > score){
            window.alert('終了！正解数は' + score + '/' + quizLength +'勉強しましょう');
        } else if(6 > score){
            window.alert('終了！正解数は' + score + '/' + quizLength +'なかなか');
        } else if(12 > score){
            window.alert('終了！正解数は' + score + '/' + quizLength +'すごい');
        } else {
            window.alert('終了！正解数は' + score + '/' + quizLength +'マスター');
        }
    }
};

   //ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
};
