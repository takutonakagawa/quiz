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
        question: 'スタバ',
        answers: [
        'ドトール',
        'スターバックスコーヒー',
        'タリーズコーヒー',
        'サンマルク'
        ],
        correct: 'スターバックスコーヒー',
        description: 'フラペチーノが人気'
    }, {
        question: '8月は？',
        answers: [
        '春',
        '夏',
        '秋',
        '冬'
        ],
        correct: '夏',
        description: '暑いですね、日本の話です。'
    }, {
        question: '貴族の焼き鳥',
        answers: [
        'とりのすけ',
        'ヒナタ',
        '鳥二郎',
        '鳥貴族'
        ],
        correct: '鳥貴族',
        description: '大倉君'
    }, {
        question: 'ポテト',
        answers: [
        'ロッテリア',
        'モスバーガー',
        'マクド',
        'バーガーキング'
        ],
        correct: 'マクド',
        description: '最強に美味い'
    }, {
        question: 'ファンタ',
        answers: [
        'グレープ',
        'オレンジ',
        'メロン',
        'ピーチ'
        ],
        correct: 'グレープ',
        description: '圧倒的グレープ'
    }, {
        question: 'ポケモンのマスコットキャラクター',
        answers: [
        'ピカチュウ',
        'プリン',
        'イーブイ',
        'ヒトカゲ'
        ],
        correct: 'ピカチュウ',
        description: '電気ネズミ'
    }, {
        question: 'モンベル',
        answers: [
        '海',
        '山',
        '草原',
        '荒野'
        ],
        correct: '山',
        description: '山以外もあるかも'
    }, {
        question: '一番美味いのは',
        answers: [
        '魚',
        'せんべい',
        'とうふ',
        'チャーハン'
        ],
        correct: 'チャーハン',
        description: '圧倒的'
    }, {
        question: '黄色い果物は',
        answers: [
        'バナナ',
        'リンゴ',
        '桃',
        'いちご'
        ],
        correct: 'バナナ',
        description: 'イチゴリンゴ赤、桃ピンクaaaaaaffffffffffffffffffffhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
const $button = document.getElementsByClassName('button');
const $button2 = document.getElementsByClassName('button2');
const $button3 = document.getElementsByClassName('button3');
const $button4 = document.getElementsByClassName('button4');
const $button5 = document.getElementsByClassName('button5');
const buttonLength = $button.length;
let countNumber = 1;

// 配列をシャッフル
function shuffle(quiz) {
    for (let i = quiz.length - 1; i >= 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      // 配列の数値を入れ替える
        [quiz[i], quiz[rand]] = [quiz[rand], quiz[i]]
    }
return quiz;
};
arr = shuffle(quiz);
// console.log(quiz);
// ここまでシャッフル

console.log(document.getElementsByClassName('text1').textContent)

// 答えのシャッフル
// const ansShuff = () => {
//     for (let i = quiz[1].answers.length - 1; i >= 0; i--) {
//         let rand = Math.floor(Math.random() * (i + 1));
//       // 配列の数値を入れ替える
//         [quiz[i], quiz[rand]] = [quiz[rand], quiz[i]]
//     }
// };
// ansShuff();
// 答えのシャッフルここまで




   //クイズの問題、選択肢を定義
    const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[0].question;
    document.getElementById('js-question2').textContent = quiz[1].question;
    document.getElementById('js-question3').textContent = quiz[2].question;
    document.getElementById('js-question4').textContent = quiz[3].question;
    document.getElementById('js-question5').textContent = quiz[4].question;

    let buttonIndex = 0;
    while(buttonIndex < 4){
        $button[buttonIndex].textContent = quiz[0].answers[buttonIndex];
        $button2[buttonIndex].textContent = quiz[1].answers[buttonIndex];
        $button3[buttonIndex].textContent = quiz[2].answers[buttonIndex];
        $button4[buttonIndex].textContent = quiz[3].answers[buttonIndex];
        $button5[buttonIndex].textContent = quiz[4].answers[buttonIndex];
        console.log($button2[buttonIndex].textContent);
        buttonIndex++;
    }
}
setupQuiz();


// 問題のカウント
// const count = () =>{
// document.getElementById('count').textContent = '第' + countNumber + '問';
// };
// count();


//ボタンをクリックしたら正誤判定
    let handlerIndex = 0;
    while (handlerIndex < buttonLength) {
        $button[handlerIndex].addEventListener('click', (e) => {
            clickHandler(e);
        });
        handlerIndex++;
    };

// 判定
const clickHandler = (e) => {
        // 正誤判定
        if(quiz[quizIndex].correct === e.target.textContent){
            document.getElementById('js-answer').textContent = '正解！';
            setPopup();
            score++;
        } else {
            document.getElementById('js-answer').textContent = '残念！正解は' + quiz[quizIndex].correct;
            setPopup();
        };
    quizIndex++;
    countNumber++;
};

// ポップアップの表示
const setPopup = () => {
    let popup = document.getElementById('js-popup');
    if(!popup) return;
    popup.classList.add('is-show');
    let blackBg = document.getElementById('js-black-bg');
    let closeBtn = document.getElementById('js-close-btn');
    closePopUp(blackBg);
    closePopUp(closeBtn);
    document.getElementById('js-description').textContent = quiz[quizIndex].description;
    function closePopUp(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
        popup.classList.remove('is-show');
        if(quizIndex < 5){
            setupQuiz();
            count();
        } else {
            // 結果ポップアップ
            let result = document.getElementById('js-popup-result');
            result.classList.add('is-show-result');
            let blackBg2 = document.getElementById('js-black-bg2');
            let closeBtn2 = document.getElementById('js-close-btn2');
            

            // ランク判定
            if(score === 0){
                document.getElementById('js-result').textContent = score + '/5 がんがれ！';
            }else if(score < 5){
                document.getElementById('js-result').textContent = score + '/5 秀才！！';
            }else{
                document.getElementById('js-result').textContent = score + '/5 天才！！！';
            };


            closeResult(blackBg2);
            closeResult(closeBtn2);
            function closeResult(elem) {
            if(!elem) return;
                elem.addEventListener('click', function() {
                    result.classList.remove('is-show-result');
                    location.reload();
                })
            }
        }
    })
    }
};

// リロードボタン（やり直しボタン）
const reloadBtn = document.getElementById('js-reload');
reloadBtn.addEventListener('click', () => {
    location.reload();
});