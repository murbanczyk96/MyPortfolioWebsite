const name = document.querySelector('.introduction-name span');
const navLinks = Array.from(document.querySelectorAll('.navigation-link a'));
const initials = document.querySelector('.navigation-name');

name.addEventListener('mouseover', evt => {
    evt.target.style.transform = 'scale(1.2)';
});

name.addEventListener('mouseout', evt => {
    evt.target.style.transform = '';
})

// navigation links effects

navLinks.forEach(link => {
    link.addEventListener('mouseover', evt => {
        evt.target.style.backgroundColor = '#e9bd64';
        evt.target.parentElement.style.transform = 'scale(1.3)';
    });
    link.addEventListener('mouseout', evt => {
        evt.target.style.backgroundColor = '';
        evt.target.parentElement.style.transform = '';
    })
});

//initials rotate

const initialsRotate = [
    {transform: 'rotate(0)'}, {transform: 'rotate(360deg)'}
];
const initialsTiming = {
    duration: 2000,
    iterations: 1,
};

initials.addEventListener('mouseover', () => {
    initials.animate(initialsRotate, initialsTiming);
});

