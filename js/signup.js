document.getElementById("container").addEventListener("submit", function(event) {
    event.preventDefault(); // フォームの送信を一時的に防止

    // フィールドのエラーメッセージをリセット
    resetErrors();

    let isValid = true;

    // 名前（お名前）のバリデーション
    const name = document.getElementById("name").value;
    if (name === "") {
        displayError("name", "お名前を入力してください");
        isValid = false;
    }

    // フリガナのバリデーション
    const furigana = document.getElementById("furigana").value;
    if (furigana === "") {
        displayError("furigana", "フリガナを入力してください");
        isValid = false;
    }

    // メールドレスのバリデーション
    const mail = document.getElementById("mail").value;
    const mailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+\.[a-zA-Z]{2,7}$/;
    if (mail === "" || !mailRegex.test(mail)) {
        displayError("mail", "有効なメールアドレスを入力してください");
        isValid = false;
    }

    // パスワードのバリデーション
    const password = document.getElementById("password").value;
    if (password === "" || password.length < 8) {
        displayError("password", "パスワードは8文字以上で入力してください");
        isValid = false;
    }

    // 確認パスワードのバリデーション
    const confirmPassword = document.getElementById("confirm_password").value;
    if (confirmPassword !== password) {
        displayError("confirm_password", "パスワードが一致しません");
        isValid = false;
    }

    const termsCheckbox = document.getElementById("terms");
    if (!termsCheckbox.checked) {
        displayError("terms", "プライバシーポリシーおよび利用規約に同意する必要があります");
        isValid = false;
    }

    // バリデーションが全て通った場合のみフォームを送信
    if (isValid) {
        // フォームデータをローカルストレージに保存
        localStorage.setItem("name", name);
        localStorage.setItem("furigana", furigana);
        localStorage.setItem("mail", mail);
        localStorage.setItem("password", password);

        // フォームをリセットして、保存したメッセージを表示
        document.getElementById("container").innerHTML = "<p>登録されました。</p>";
        document.getElementById("after").innerHTML = "<div class='button'><a href='index.html'><button class='contact_button'>戻る</button></a></div>";

        // 必要に応じて、サーバーへの送信処理をここに追加
    }
});

// エラーメッセージを表示
function displayError(field, message) {
    const errorElement = document.getElementById(`${field}-error`);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

// エラーメッセージをリセット
function resetErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((element) => {
        element.textContent = "";
    });
}

// ページ読み込み時にローカルストレージからデータを取得してフォームに表示
window.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem("name")) {
        document.getElementById("name").value;
    }
    if (localStorage.getItem("furigana")) {
        document.getElementById("furigana");
    }
    if (localStorage.getItem("mail")) {
        document.getElementById("mail").value;
    }
});
