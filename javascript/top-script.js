// ページ読み込み後に画像をフェードインさせる
window.onload = function() {
    const headerImage = document.getElementById('headerImage');
    headerImage.style.opacity = '1';  // 画像をフェードイン
};




// Q&Aの折りたたみ機能
//document.addEventListener('DOMContentLoaded', function() {
//    const questions = document.querySelectorAll('.question h3');
//    questions.forEach(question => {
//        question.addEventListener('click', function() {
//            const answer = this.nextElementSibling;
//            answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
//        });
//    });
//});
