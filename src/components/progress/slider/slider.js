(function updateSliders() {
    var event = new Event('input', {
        'bubbles': true,
        'cancelable': true
    });

    document.querySelectorAll('.slider').forEach(function(el) {
        var bubble = el.querySelector('.bubble'),
            width = el.offsetWidth,
            offset = -15,
            input = el.querySelector('input');

        input.addEventListener('input', function() {
            var npos = width*((this.value - this.min) / (this.max - this.min));
            //console.log(npos);
            bubble.innerHTML = this.value;
            bubble.style.left = offset + npos + 'px';
        });

        input.dispatchEvent(event);
    });
})();
