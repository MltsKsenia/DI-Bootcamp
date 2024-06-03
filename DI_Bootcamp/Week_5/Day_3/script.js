setTimeout(() => {
    const banner = document.getElementById('salesBanner');
    banner.style.display = 'block';
    const countdown = document.getElementById('countdown');
    const countItDown = function () {
        const currenttime = parseFloat(countdown.textContent)
        if (currenttime > 0) {
            countdown.textContent = currenttime - 1;
        }
        else {
            window.clearInterval(timer);
            banner.textContent = 'The sales have ended!';
        }
    }
    const timer = window.setInterval(countItDown, 1000)
}, 5000);