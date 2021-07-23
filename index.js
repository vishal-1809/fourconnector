// console.log('Four Connector');

document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelectorAll('.grid div');
    const invl = document.querySelector('.invalid');
    const ans = document.querySelector('.result');
    let turn = 1;
    let count = 0;
    let res = "";

    const winningArrays = [
        [0, 1, 2, 3],
        [41, 40, 39, 38],
        [7, 8, 9, 10],
        [34, 33, 32, 31],
        [14, 15, 16, 17],
        [27, 26, 25, 24],
        [21, 22, 23, 24],
        [20, 19, 18, 17],
        [28, 29, 30, 31],
        [13, 12, 11, 10],
        [35, 36, 37, 38],
        [6, 5, 4, 3],
        [0, 7, 14, 21],
        [41, 34, 27, 20],
        [1, 8, 15, 22],
        [40, 33, 26, 19],
        [2, 9, 16, 23],
        [39, 32, 25, 18],
        [3, 10, 17, 24],
        [38, 31, 24, 17],
        [4, 11, 18, 25],
        [37, 30, 23, 16],
        [5, 12, 19, 26],
        [36, 29, 22, 15],
        [6, 13, 20, 27],
        [35, 28, 21, 14],
        [0, 8, 16, 24],
        [41, 33, 25, 17],
        [7, 15, 23, 31],
        [34, 26, 18, 10],
        [14, 22, 30, 38],
        [27, 19, 11, 3],
        [35, 29, 23, 17],
        [6, 12, 18, 24],
        [28, 22, 16, 10],
        [13, 19, 25, 31],
        [21, 15, 9, 3],
        [20, 26, 32, 38],
        [36, 30, 24, 18],
        [5, 11, 17, 23],
        [37, 31, 25, 19],
        [4, 10, 16, 22],
        [2, 10, 18, 26],
        [39, 31, 23, 15],
        [1, 9, 17, 25],
        [40, 32, 24, 16],
        [9, 17, 25, 33],
        [8, 16, 24, 32],
        [11, 17, 23, 29],
        [12, 18, 24, 30],
        [1, 2, 3, 4],
        [5, 4, 3, 2],
        [8, 9, 10, 11],
        [12, 11, 10, 9],
        [15, 16, 17, 18],
        [19, 18, 17, 16],
        [22, 23, 24, 25],
        [26, 25, 24, 23],
        [29, 30, 31, 32],
        [33, 32, 31, 30],
        [36, 37, 38, 39],
        [40, 39, 38, 37],
        [7, 14, 21, 28],
        [8, 15, 22, 29],
        [9, 16, 23, 30],
        [10, 17, 24, 31],
        [11, 18, 25, 32],
        [12, 19, 26, 33],
        [13, 20, 27, 34],
    ]


    function check() {
        for (let y = 0; y < winningArrays.length; y++) {
            const box1 = box[winningArrays[y][0]]
            const box2 = box[winningArrays[y][1]]
            const box3 = box[winningArrays[y][2]]
            const box4 = box[winningArrays[y][3]]

            if (
                box1.classList.contains('fillr') &&
                box2.classList.contains('fillr') &&
                box3.classList.contains('fillr') &&
                box4.classList.contains('fillr')
            ) {
                invl.classList.remove('disp');
                ans.classList.add('disp');
                // ans.textContent="Player One Wins!";
                ans.innerHTML="<p>Player One Wins!<p><br></p>Refresh to Start New Game</p>";
                res="One";
                for (let index = 0; index < box.length; index++) {
                    if (!box[index].classList.contains('fillr') && !box[index].classList.contains('fillb')) {
                        box[index].classList.add('fill');
                        box[index].classList.add('taken');
                    }
                }
                // alert('Player One Wins!');
            }
            if (
                box1.classList.contains('fillb') &&
                box2.classList.contains('fillb') &&
                box3.classList.contains('fillb') &&
                box4.classList.contains('fillb')
            ) {
                invl.classList.remove('disp');
                ans.classList.add('disp');
                // ans.textContent="Player Two Wins!";
                ans.innerHTML="<p>Player Two Wins!<p><br></p>Refresh to Start New Game</p>";
                res="Two";
                for (let index = 0; index < box.length; index++) {
                    if (!box[index].classList.contains('fillr') && !box[index].classList.contains('fillb')) {
                        box[index].classList.add('fill');
                        box[index].classList.add('taken');
                    }
                }
                // alert('Player Two Wins!');
            }
        }
    }

    function getcheck() {
        console.log('hello');
    }

    for (let i = 0; i < box.length; i++) {
        box[i].addEventListener('click', () => {
            invl.classList.remove('disp');
            // console.log('hello');
            console.log(i);
            if ((i + 7) > 41) {
                if (turn === 1) {
                    box[i].classList.add('fillr');
                    box[i].classList.add('taken');
                    turn = 2;
                    document.getElementById('player').innerText = "2";
                }
                else {
                    box[i].classList.add('fillb');
                    box[i].classList.add('taken');
                    turn = 1;
                    document.getElementById('player').innerText = "1";
                }
                check();
                count++;
                if (count == 42) {
                    if(res.length==0){
                    document.getElementById('result').innerHTML = 'Game Tie';
                    }
                }
            }
            else {
                if (box[i + 7].classList.contains('taken') && !box[i].classList.contains('taken')) {
                    if (turn === 1) {
                        box[i].classList.add('fillr');
                        box[i].classList.add('taken');
                        turn = 2;
                        document.getElementById('player').innerText = "2";
                    }
                    else {
                        box[i].classList.add('fillb');
                        box[i].classList.add('taken');
                        turn = 1;
                        document.getElementById('player').innerText = "1";
                    }
                    check();
                    count++;
                    if (count == 42) {
                        if(res.length==0){
                        document.getElementById('result').innerHTML = 'Game Tie';
                        }
                    }
                }
                else {
                    // alert("Invalid Position");
                    invl.classList.add('disp');
                }
            }
        })
    }
})