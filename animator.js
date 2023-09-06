

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
    const baseDelay = delayIndex ? parseInt(delayIndex)*0.75 : 0;
    const innerText = element.innerText.split('');

    element.innerText = '';
    element.append(underline);
    element.style.transitionDuration = (innerText.length*0.05 + 0.3).toString() + 's';

    for (let i = 0; i < innerText.length; i++) {
        const span = document.createElement('span');
        span.innerText = innerText[i];
        span.style.setProperty('--delay', (baseDelay + i*0.05).toString()+'s');
        element.append(span);
    }
});

document.querySelectorAll('.highlight').forEach(element => {
    const innerText = element.innerText;
    element.innerText = '';
    
    const innerSpan = document.createElement('span');
    innerSpan.innerText = innerText;
    element.append(innerSpan);

    const highlight = document.createElementNS('http://www.w3.org/2000/svg','svg');
    highlight.setAttribute('height', 'calc(100% + 30px)');
    highlight.setAttribute('width', 'calc(100% + 24px)');
    highlight.setAttribute('viewBox', '0 0 130 52');
    highlight.setAttribute('preserveAspectRatio', 'none');
    highlight.innerHTML = `
    <path stroke-linecap='round' d="m15.37103,14.22763c0,1 -0.2242,1.90283 -1,4c-1.4305,3.867 -4.41422,7.58578 -3,9c1.41422,1.41422 6.91122,-2.18271 15,-6c8.90685,-4.20335 18.3851,-12.62799 21,-9c0.8269,1.14726 -4.28415,3.73116 -9,9c-4.27039,4.77115 -8.15224,8.23463 -10,9c-1.30656,0.5412 2.04024,-2.95021 7,-7c6.0497,-4.93976 10.69344,-9.5412 12,-9c0.92387,0.38269 -2.22054,4.83128 -6,10c-4.25638,5.82094 -9,9 -8,10c2,2 5.34944,-6.38458 11,-10c5.39359,-3.45099 8.55278,-6.89442 9,-6c2.23607,4.47214 -9,9 -15,15c-6,6 -10.04428,8.95366 -9,8c5.76726,-5.26675 16.02333,-10.95741 27,-17c9.01932,-4.96507 14.69344,-9.5412 16,-9c0.92387,0.38269 -1.1377,2.89288 -5,8c-5.18884,6.86119 -10.08031,17.62358 -14,16c-1.84776,-0.76537 4.27805,-5.73428 10,-12c5.26675,-5.76726 9.38687,-13.0824 12,-12c2.77164,1.14806 -2.92577,10.04294 -7,17c-2.94666,5.03163 -4.19713,7.8763 -1,3c4.71669,-7.19394 11.58977,-14.44043 18,-20c3.77727,-3.27602 3.91136,-0.05815 0,6c-5.11707,7.92563 -8.82375,16.51375 -11,16c-0.97325,-0.22975 2.4808,-6.4808 9,-13c6.5192,-6.5192 13.82108,-14.70131 17,-13c0.88167,0.47186 0.20607,2.08743 -2,7c-3.66408,8.15932 -12.7229,16.22801 -9,18c4.51469,2.14886 7.65108,-9.43283 15,-15c5.74799,-4.35439 9.1387,-5.99034 9,-5c-1.00977,7.20975 -4.51064,15.26401 -9,23c-1.80972,3.11848 -2.30745,1.814 -1,0c2.48071,-3.4418 7.56392,-8.36774 11,-12c2.47778,-2.61926 2.20607,1.08743 0,6c-0.91602,2.03983 -1,3 -1,1l3,-1l2,0l1,0" id="svg_11" stroke-width="22" fill="none"/>    `
    element.prepend(highlight);
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







const entries100 = document.querySelectorAll('.fadeup, .emphasis, .slideappear, .underline, .rotateIn, .highlight');
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