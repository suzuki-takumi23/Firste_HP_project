//トップページラッパーのスライドショー

document.addEventListener("DOMContentLoaded", function() {
    //urlの文字配列です。置き換えの際はimages以下の相対パス記述でお願いします。
    const images = ["url(images/system_bath1.jpg)", "url(images/system_kitchen1.jpg)", "url(images/toilet1.jpg)"];

    //上の配列のインデックス番号の初期値です。
    let currentIndex = 0;
    const background1 = document.getElementById('bg-img1');
    const background2 = document.getElementById('bg-img2');
    let currentBackground = background1;
    let nextBackground = background2;

    //関数本体
    //今表示している背景画像が設定されたdivタグと
    //次表示する背景画像が設定されるdivタグの２パターンを用意して
    //仮置きの変数を使って並べ替えすることで表示しています
    function switchBackgrounds() {
        currentBackground.style.backgroundImage = images[currentIndex];
        currentBackground.classList.add('show');
        nextBackground.classList.remove('show');

        currentIndex = (currentIndex + 1) % images.length;

        const temp = currentBackground;
        currentBackground = nextBackground;
        nextBackground = temp;
    }

    currentBackground.style.backgroundImage = images[currentIndex];
    currentBackground.classList.add('show');
    currentIndex++;

    setInterval(switchBackgrounds, 8000);
});