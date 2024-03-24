function invoke_confetti() {
    let congratulationsMessage_dom = document.getElementById('congratulationsMessage');
    const canvas = document.getElementById('mycanva')
    const jsConfetti = new JSConfetti()

    jsConfetti.addConfetti({
        emojis: ['⭐','🎉', '👏', '🌟', '🥳', '🏆', '👍', '👌', '🥇', '🎊', '🥳','🌸', '💐', '🌷', '🌹', '🌺'],
        emojiSize: 10,
        confettiNumber: 300,
    });
}





setInterval(invoke_confetti,2000);




document.addEventListener('DOMContentLoaded', function() {
    const audioC = document.getElementById('c');
    const audioBellRing = document.getElementById('b');

    audioC.play();
    audioBellRing.play();
});






