document.addEventListener('DOMContentLoaded', function() {
    const textCycleElement = document.getElementById('textCycle');
    const texts = ['I am a coder.', 'I am a Full Stack Developer.', 'I play Volleyball.', 'I am An AI/ML Developer.'];
    let index = 0;

    function cycleText() {
        textCycleElement.textContent = texts[index];
        index = (index + 1) % texts.length;
        setTimeout(cycleText, 2000);
    }

    cycleText();
});
