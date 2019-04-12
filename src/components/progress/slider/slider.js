(function updateSliders() {
    var event = new Event('input', {
        'bubbles': true,
        'cancelable': true
    });

    document.querySelectorAll('.slider-1').forEach(function(el) {
        let bubble = el.querySelector('.bubble'),
            width = el.offsetWidth,
            offset = 40,
            input = el.querySelector('input');

        input.addEventListener('input', function() {
            let perc = (this.value - this.min) / (this.max - this.min),
                npos = width*perc;

            bubble.innerHTML = this.value;
            bubble.style.left = npos - offset*perc + 'px';

        });

        input.dispatchEvent(event);
    });
})();
