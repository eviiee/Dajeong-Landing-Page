

document.querySelector('h1').classList.add('fadein');
document.querySelectorAll('.underline').forEach(element => {

    const underline = document.createElementNS('http://www.w3.org/2000/svg','svg');
    underline.setAttribute('height', '0.9vh');
    underline.setAttribute('width', 'calc(100% + 15px)');
    underline.setAttribute('viewBox', '0 0 286 26');
    underline.setAttribute('preserveAspectRatio', 'none');
    underline.innerHTML = `
    <path stroke-linecap='round' id="svg_14" d="m4,4c6.28235,25.09801 10.36077,4.58823 16.35292,5.7098c5.99215,1.12157 7.26274,6.79215 10.54116,7.01176c3.27843,0.21961 5.00392,-10.66665 11.67842,-10.14901c6.6745,0.51765 1.27843,9.86666 6.72156,10.09411c5.44313,0.22745 8.93332,-7.50587 15.17645,-7.96078c6.24313,-0.4549 1.91372,6.45489 8.31372,6.52548c6.39999,0.07059 15.52939,-7.37254 21.72547,-7.55293c6.19607,-0.18039 4.69803,13.01175 10.89411,12.77646c6.19607,-0.23529 -1.74117,-13.64704 10.42352,-13.19214c12.16469,0.4549 13.49802,10.18822 18.83919,9.67842c5.34117,-0.5098 6.7294,-10.86273 11.43528,-11.00391c4.70588,-0.14118 2.94902,15.27841 8.18823,15.349c5.23921,0.07059 7.74117,-13.59214 13.62351,-13.46665c5.88235,0.12549 3.3647,10.2745 10.58038,10.52548c7.21568,0.25098 11.11371,-10.22744 14.47841,-10.46273c3.3647,-0.23529 4.11764,8.10195 9.23921,8.06274c5.12156,-0.03922 4.98039,-7.52156 10.58038,-8.26666c5.59999,-0.7451 13.61567,9.19215 17.35684,8.9647c3.74117,-0.22745 7.38038,-8.24313 11.96861,-8.07058c4.58823,0.17255 6.21176,6.76862 11.0745,6.26666c4.86274,-0.50196 3.81176,-10.12548 9.4196,-10.32156c5.60784,-0.19608 10.14116,5.7098 13.62351,13.31763" opacity="undefined" stroke-width="7" stroke="#FF5353" fill="none"/>
    `

    const delayIndex = getComputedStyle(element).getPropertyValue('--index');
    const baseDelay = parseInt(delayIndex)*0.75;
    const innerText = element.innerText.split('');

    element.innerText = '';
    element.append(underline);
    element.style.transitionDuration = (innerText.length*0.05 + 0.3).toString() + 's';

    for (let i = 0; i < innerText.length; i++) {
        const span = document.createElement('span');
        span.style.transitionDelay = (baseDelay + i*0.05).toString() + 's';
        span.innerText = innerText[i];
        element.append(span);
    }
});

const texts = document.querySelectorAll('h2, h3, h4, p');
for (let text of texts) {
    text.classList.add('fadeup');
}

const observer100 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {threshold: 1});

const observer50 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {threshold: 0.5});

const removerObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.remove('animate');
        }
    });
});







const entries100 = document.querySelectorAll('.fadeup, .emphasis, .slideappear, .underline, .rotateIn');
const entries50 = document.querySelectorAll('.fadein, .fadeleft, .faderight');

for (let entry of entries100) {
    observer100.observe(entry);
}

for (let entry of entries50) {
    observer50.observe(entry);
}

const allEntries = Array.prototype.slice.call(entries100).concat(Array.prototype.slice.call(entries50));

for (let entry of allEntries) {
    console.log('remover attached');
    removerObserver.observe(entry);
}