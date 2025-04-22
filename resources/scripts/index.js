let redbtn = document.getElementById('redbtn')
let bluebtn = document.getElementById('bluebtn')
let greenbtn = document.getElementById('greenbtn')
let otherbtn = document.getElementById('otherbtn')
redbtn.addEventListener("click", changeColor)
bluebtn.addEventListener("click", changeColor)
greenbtn.addEventListener("click", changeColor)
otherbtn.addEventListener("click", changeColor)

function changeColor(e) {
    let color = e.target.innerHTML
    if (color === 'blue') {
        document.documentElement.style.setProperty('--color-1', 'rgb(32, 14, 58)');
        document.documentElement.style.setProperty('--color-2', 'rgb(56, 65, 157)');
        document.documentElement.style.setProperty('--color-3', 'rgb(56, 135, 190)');
        document.documentElement.style.setProperty('--color-4', 'rgb(82, 211, 216)');
        document.documentElement.style.setProperty('--color-5', 'rgb(208, 245, 253)');
    } else if (color === 'green') {
        document.documentElement.style.setProperty('--color-1', 'rgb(15, 22, 15)');
        document.documentElement.style.setProperty('--color-2', 'rgb(35, 64, 63)');
        document.documentElement.style.setProperty('--color-3', 'rgb(0, 105, 65)');
        document.documentElement.style.setProperty('--color-4', 'rgb(0, 148, 98)');
        document.documentElement.style.setProperty('--color-5', 'rgb(140, 245, 224)');
    } else if (color === 'red') {
        document.documentElement.style.setProperty('--color-1', 'rgb(34, 9, 44)');
        document.documentElement.style.setProperty('--color-2', 'rgb(135, 35, 65)');
        document.documentElement.style.setProperty('--color-3', 'rgb(190, 49, 68)');
        document.documentElement.style.setProperty('--color-4', 'rgb(240, 89, 65)');
        document.documentElement.style.setProperty('--color-5', 'rgb(253, 226, 204)');
    } else if (color === 'random') {
        console.log("other clicked")

        let myArr = []
        for (let i = 0; i < 15; i++) {
            myArr.push(Math.random() * 256)
        }

        console.log(myArr)

        document.documentElement.style.setProperty('--color-1', `rgb(${myArr[0]}, ${myArr[1]}, ${myArr[2]})`);
        document.documentElement.style.setProperty('--color-2', `rgb(${myArr[3]}, ${myArr[4]}, ${myArr[5]})`);
        document.documentElement.style.setProperty('--color-3', `rgb(${myArr[6]}, ${myArr[7]}, ${myArr[8]})`);
        document.documentElement.style.setProperty('--color-4', `rgb(${myArr[9]}, ${myArr[10]}, ${myArr[11]})`);
        document.documentElement.style.setProperty('--color-5', `rgb(${myArr[12]}, ${myArr[13]}, ${myArr[14]})`);
    };
};