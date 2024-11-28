document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("#create_nav a");
    const contents = document.querySelectorAll(".content");

    // 画像切り替えのための関数
    const updateImage = (link, isActive) => {
        const img = link.querySelector("img");
        if (img) {
            img.src = isActive ? img.getAttribute("data-hover") : img.getAttribute("data-default");
        }
    };

    // 初期設定
    navLinks.forEach(link => {
        const img = link.querySelector("img");
        if (img) {
            img.src = link.classList.contains("active")
                ? img.getAttribute("data-hover")
                : img.getAttribute("data-default");
        }
    });

    // クリックイベントを追加
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // ナビゲーションのactive状態を更新
            navLinks.forEach(nav => {
                nav.classList.remove("active");
                updateImage(nav, false); // デフォルト画像に戻す
            });

            link.classList.add("active");
            updateImage(link, true); // アクティブ画像に切り替え

            // 対応する内容を表示し、他を非表示
            const targetId = link.getAttribute("data-target");
            contents.forEach(content => {
                content.classList.remove("active");
                if (content.id === targetId) {
                    content.classList.add("active");
                }
            });
        });

        // マウスオーバーイベントを追加
        link.addEventListener("mouseover", () => {
            if (!link.classList.contains("active")) updateImage(link, true);
        });

        // マウスアウトイベントを追加
        link.addEventListener("mouseout", () => {
            if (!link.classList.contains("active")) updateImage(link, false);
        });
    });
});
