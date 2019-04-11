module.exports = function updateProgress(progress) {
    if(!progress) return;

    const active = progress.querySelector('.is-active'),
        next = progress.querySelector('.is-active + .progress-step');

    console.log(active, next);
    if(!active) return;

    active.classList.remove('is-active');
    active.classList.add('is-complete');

    if(!next) return;

    next.classList.add('is-active');
    //next.classList.add('is-complete');
}
