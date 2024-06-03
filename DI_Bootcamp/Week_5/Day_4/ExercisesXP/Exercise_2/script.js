function myMove() {
    const container = document.getElementById('container');
    const animate = document.getElementById('animate');
    let position = 0;
    const interval = setInterval(frame, 1);

    function frame() {
        if (position >= container.offsetWidth - animate.offsetWidth) {
            clearInterval(interval);
        } else {
            position++;
            animate.style.left = position + 'px';
        }
    }
}