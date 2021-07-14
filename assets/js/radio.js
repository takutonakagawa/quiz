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

// console.log(document.getElementsByClassName('sasasa')[0].value);


// inputのvalueのセット
const valueSet = () => {
    for(let i = 0; i < 4; i++){
        document.getElementsByClassName('btn1')[i].value = quiz[0].answers[i];
        document.getElementsByClassName('btn2')[i].value = quiz[1].answers[i];
        document.getElementsByClassName('btn3')[i].value = quiz[2].answers[i];
        document.getElementsByClassName('btn4')[i].value = quiz[3].answers[i];
        document.getElementsByClassName('btn5')[i].value = quiz[4].answers[i];
    }
};
valueSet();

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
        buttonIndex++;
    }
}
setupQuiz();




// 確認画面の確認
const setPopup = () => {
    let popup = document.getElementById('js-popup');
    if(!popup) return;
    let confirmBtn = document.getElementById('js-confirm');


    confirmBtn.addEventListener('click', () => {
        let elements = document.getElementsByName('a');
        let elements2 = document.getElementsByName('b');
        let elements3 = document.getElementsByName('c');
        let elements4 = document.getElementsByName('d');
        let elements5 = document.getElementsByName('e');
        let len = elements.length;
        let checkValue = [];
        // チェックの値を判定しcheckValueに投下
        for (let i = 0; i < len; i++){
            if (elements.item(i).checked){
                checkValue[0] = elements.item(i).value;
            }
        }
        // チェックの値を判定しcheckValueに投下2
        for (let i = 0; i < len; i++){
            if (elements2.item(i).checked){
                checkValue[1] = elements2.item(i).value;
            }
        }
       // チェックの値を判定しcheckValueに投下3
        for (let i = 0; i < len; i++){
            if (elements3.item(i).checked){
                checkValue[2] = elements3.item(i).value;
            }
        }
        // チェックの値を判定しcheckValueに投下4
        for (let i = 0; i < len; i++){
            if (elements4.item(i).checked){
                checkValue[3] = elements4.item(i).value;
            }
        }
         // チェックの値を判定しcheckValueに投下5
        for (let i = 0; i < len; i++){
            if (elements5.item(i).checked){
                checkValue[4] = elements5.item(i).value;
            }
        }
        // 問題文の書き換え
        const setQ = () => {
            document.getElementById('q1').textContent = quiz[0].question;
            document.getElementById('q2').textContent = quiz[1].question;
            document.getElementById('q3').textContent = quiz[2].question;
            document.getElementById('q4').textContent = quiz[3].question;
            document.getElementById('q5').textContent = quiz[4].question;
        }
        setQ();
        // 答えの書き換え
        const setA = () => {
            document.getElementById('a1').textContent = checkValue[0];
            document.getElementById('a2').textContent = checkValue[1];
            document.getElementById('a3').textContent = checkValue[2];
            document.getElementById('a4').textContent = checkValue[3];
            document.getElementById('a5').textContent = checkValue[4];
        }
        setA();
        
        console.log(checkValue);
        popup.classList.add('is-show');
    })
    
    // 確認画面閉じたときの処理
    let blackBg = document.getElementById('js-black-bg');
    // let closeBtn = document.getElementById('js-close-btn');
    let reBtn = document.getElementById('js-re-btn');
    closePopUp(blackBg);
    // closePopUp(closeBtn);
    closePopUp(reBtn);
    function closePopUp(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
        popup.classList.remove('is-show');
        document.getElementById('js-alt').classList.add('alt-hidden');
    })
}
}
setPopup();


  // 採点からの結果画面に行く 
    let resultBtn = document.getElementById('js-rlt-btn');
        const resultAnnouncement = () => {
        resultBtn.addEventListener('click', () => {
        // 未回答チェック
        let y = 0;
        for(let i = 0; i < 5; i++){
            if(document.getElementsByClassName('judgment')[i].textContent === ''){
                document.getElementById('js-alt').classList.remove('alt-hidden');
                // window.alert('未回答があります');
                y = 0;
                break;
            }else{
                y++;
                    if(y === 5){
                // 確認モーダルを閉じる
                let popup = document.getElementById('js-popup');
                closePopUp(resultBtn)
                function closePopUp(elem) {
                    if(!elem) return;
                        popup.classList.remove('is-show');
                }
                // ここまで確認モーダルを閉じる
                // 正誤チェック
                    let score = 0;
                    // console.log(document.getElementsByClassName('judgment'));
                    let quizIndex = 0;
                    for(let i = 0; i < 5; i++){
                        if(document.getElementsByClassName('judgment')[i].textContent === quiz[quizIndex].correct){
                            score++;
                            quizIndex++;
                        }else{
                            quizIndex++;
                        }
                    }
                // scoreの書き換え
                document.getElementById('js-result').textContent = score + '/5 ';
                // ランクの書き換え
                // let rank = document.getElementById('js-rank').textContent;
                if(score === 0){
                    document.getElementById('js-rank').textContent = 'がんばれ';
                    document.getElementById('js-img4').classList.remove('noimg');
                }else if(score < 3){
                    document.getElementById('js-rank').textContent = 'そこそこ！！';
                    document.getElementById('js-img3').classList.remove('noimg');
                }else if(score < 5){
                        document.getElementById('js-rank').textContent = '秀才！！';
                        document.getElementById('js-img2').classList.remove('noimg');
                }else{
                    document.getElementById('js-rank').textContent = '天才';
                    document.getElementById('js-img1').classList.remove('noimg');
                    document.getElementById('balloon').classList.remove('balloons-hidden');
                };
                // 結果モーダルの表示
                let result = document.getElementById('js-popup-result');
                result.classList.add('is-show-result');
                    }
                }
            }
        })
    }
    resultAnnouncement();


    document.getElementById('js-close-btn2').addEventListener('click', () => {
        location.reload();
    })
