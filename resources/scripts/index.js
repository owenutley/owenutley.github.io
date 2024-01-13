window.addEventListener('DOMContentLoaded', storedStyle);

let stylebtn = document.getElementsByClassName('color-change')[0];

function applyStyle(style) {
    if (style === 'redSt') {
        document.documentElement.style.setProperty('--color-1', 'rgb(32, 14, 58)');
        document.documentElement.style.setProperty('--color-2', 'rgb(56, 65, 157)');
        document.documentElement.style.setProperty('--color-3', 'rgb(56, 135, 190)');
        document.documentElement.style.setProperty('--color-4', 'rgb(82, 211, 216)');
        document.documentElement.style.setProperty('--color-5', 'rgb(208, 245, 253)');
    } else if (style === 'greenSt') {
        document.documentElement.style.setProperty('--color-1', 'rgb(15, 15, 15)');
        document.documentElement.style.setProperty('--color-2', 'rgb(35, 45, 63)');
        document.documentElement.style.setProperty('--color-3', 'rgb(0, 91, 65)');
        document.documentElement.style.setProperty('--color-4', 'rgb(0, 129, 112)');
        document.documentElement.style.setProperty('--color-5', 'rgb(125, 218, 212)');
    } else {
        document.documentElement.style.setProperty('--color-1', 'rgb(34, 9, 44)');
        document.documentElement.style.setProperty('--color-2', 'rgb(135, 35, 65)');
        document.documentElement.style.setProperty('--color-3', 'rgb(190, 49, 68)');
        document.documentElement.style.setProperty('--color-4', 'rgb(240, 89, 65)');
        document.documentElement.style.setProperty('--color-5', 'rgb(253, 226, 204)');
    };
};

function toggleStyle() {
    const currentStyle = stylebtn.id;
    const newStyle = currentStyle === 'style1' ? 'style2' : 'style1';
    localStorage.setItem('currentStyle', newStyle);
    stylebtn.id = newStyle;
    applyStyle(newStyle);
}

function storedStyle() {
    const storedStyle = localStorage.getItem('currentStyle');
    if (storedStyle) {
        stylebtn.id = storedStyle;
        applyStyle(storedStyle);
    }
}