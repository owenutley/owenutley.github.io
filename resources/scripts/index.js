let stylebtn = document.getElementsByClassName('color-change')[0];

function toggleStyle() {
    if (stylebtn.id === 'style1') {
        document.documentElement.style.setProperty('--color-1', 'rgb(32, 14, 58)');
        document.documentElement.style.setProperty('--color-2', 'rgb(56, 65, 157)');
        document.documentElement.style.setProperty('--color-3', 'rgb(56, 135, 190)');
        document.documentElement.style.setProperty('--color-4', 'rgb(82, 211, 216)');
        document.documentElement.style.setProperty('--color-5', 'rgb(208, 245, 253)');
        stylebtn.id = 'style2'
    } else {
        document.documentElement.style.setProperty('--color-1', 'rgb(34, 9, 44)');
        document.documentElement.style.setProperty('--color-2', 'rgb(135, 35, 65)');
        document.documentElement.style.setProperty('--color-3', 'rgb(190, 49, 68)');
        document.documentElement.style.setProperty('--color-4', 'rgb(240, 89, 65)');
        document.documentElement.style.setProperty('--color-5', 'rgb(253, 226, 204)');
        stylebtn.id = 'style1'
    }
};