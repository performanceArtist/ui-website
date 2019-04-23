function updateSliders() {
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
}

function slider1(selector) {
    var event = new Event('input', {
        'bubbles': true,
        'cancelable': true
    });

    document.querySelectorAll(selector).forEach(function(el) {
        let bubble = el.querySelector('.bubble'),
            width = el.offsetWidth,
            offset = 0.28,
            input = el.querySelector('input');

        input.addEventListener('input', function() {
            let perc = (this.value - this.min) / (this.max - this.min),
                npos = width*perc - this.value*offset;

            bubble.innerHTML = this.value;
            //input.value = this.value;
            bubble.style.left = npos + 'px';

        });

        input.dispatchEvent(event);
    });
}

function slider2(selector, opt={}) {
    const def = {
        value: 50,
        min: 0,
        max: 100,
        step: 25,
        orientation: "horizontal",
        range: "min",
        animate: true
    };

    $(selector).slider(Object.assign(def, opt)).each(function() {
        var opt = $(this).data().uiSlider.options;

        // Get the number of possible values
        var vals = opt.max - opt.min;

        // Space out values
        for (var i = 0; i <= vals; i += opt.step) {
            var el = $('<label>'+i+'</label>').css('left',(i/vals*100)+'%');
            $(selector).append(el);
        }
    });
}

export {slider1, slider2};