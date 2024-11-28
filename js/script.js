document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        const imgElement = link.querySelector("img");

        // 初期設定
        const defaultImage = link.getAttribute("data-image");
        const hoverImage = link.getAttribute("data-hover-image");

        if (link.classList.contains("active-nav")) {
            imgElement.src = hoverImage; // アクティブ状態はマウスオーバー画像
        } else {
            imgElement.src = defaultImage; // 非アクティブは通常画像
        }

        // クリックイベント
        link.addEventListener("click", function (event) {
            event.preventDefault(); // リンクのデフォルト動作をキャンセル

            // 他のリンクをデフォルト画像に戻す
            navLinks.forEach(nav => {
                const navImg = nav.querySelector("img");
                navImg.src = nav.getAttribute("data-image");
                nav.classList.remove("active-nav");
            });

            // クリックされたリンクをアクティブに
            imgElement.src = hoverImage;
            link.classList.add("active-nav");

            // 必要なら対応するコンテンツを表示
            const target = link.getAttribute("data-target");
            document.querySelectorAll(".content").forEach(content => {
                content.classList.remove("active");
            });
            if (target) {
                document.getElementById(target)?.classList.add("active");
            }
        });

        // マウスオーバーイベント
        link.addEventListener("mouseover", () => {
            if (!link.classList.contains("active-nav")) {
                imgElement.src = hoverImage;
            }
        });

        // マウスアウトイベント
        link.addEventListener("mouseout", () => {
            if (!link.classList.contains("active-nav")) {
                imgElement.src = defaultImage;
            }
        });
    });
});

// よくある質問のコンテンツと色の切り替え
// クリックイベントの設定
document.addEventListener('DOMContentLoaded', function() {
    // クリックイベントの設定
    document.querySelectorAll('.question_design').forEach(item => {
        item.addEventListener('click', function() {
            const target = this.getAttribute('data-target'); // data-target属性を取得

            // 他のリンクに 'active' クラスを削除
            document.querySelectorAll('.question_design').forEach(link => {
                link.classList.remove('active-nav-link');
                link.style.backgroundColor = '';  // 背景色をリセット
            });

            // 現在クリックされたリンクに 'active' クラスを追加
            this.classList.add('active-nav-link');
            this.style.backgroundColor = this.getAttribute('data-color');  // 背景色を設定

            // 他のコンテンツを非表示にする
            document.querySelectorAll('.question_content').forEach(content => {
                content.style.display = 'none';
            });

            // 対象コンテンツを表示する
            const targetContent = document.getElementById(target);
            if (targetContent) {
                targetContent.style.display = 'block';  // クリックされたコンテンツを表示
            }
        });
    });
});


// アコーディオン
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const content = item.querySelector('.accordion-content');
        const toggleIcon = header.querySelector('.toggle-icon'); // +- アイコンを取得

        // 他のアコーディオンをすべて閉じる
        document.querySelectorAll('.accordion-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.accordion-content').style.maxHeight = null;
                otherItem.querySelector('.toggle-icon').setAttribute('src', 'img/icon/plus.png'); // 他の項目を閉じると+に戻す
            }
        });

        // クリックしたアコーディオンを開閉する
        item.classList.toggle('active');
        if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + "px";
            toggleIcon.setAttribute('src', 'img/icon/minus.png'); // 開いたときは-にする
        } else {
            content.style.maxHeight = null;
            toggleIcon.setAttribute('src', 'img/icon/plus.png'); // 閉じたときは+に戻す
        }
    });
});


// メンバー紹介
// クリックで画像を切り替える
document.getElementById('profile-img').addEventListener('click', function () {
    const image = document.getElementById('profile-img');
    
    // 現在の画像のパスを取得
    const currentSrc = image.src;
    
    // 画像を切り替えるロジック
    if (currentSrc.includes('natsumi.jpg')) {
        image.src = 'img/profile/konatsu/konatsu.jpg';
    } else if (currentSrc.includes('konatsu.jpg')) {
        image.src = 'img/profile/chika/chika.jpg';
    } else if (currentSrc.includes('chika.jpg')) {
        image.src = 'img/profile/haruka/haruka.jpg';
    } else {
        image.src = 'img/profile/natsumi/natsumi.jpg'; // 最後に戻す
    }
});
