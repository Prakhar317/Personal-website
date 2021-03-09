window.onload = () => {
    const transitionEl = document.querySelector('.transition');
    setTimeout(() => {
        transitionEl.classList.remove('is-active');
    },1500);
}