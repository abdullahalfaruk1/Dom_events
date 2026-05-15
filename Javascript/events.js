// <!-- option 2 for dom event handler


function makeYellow() { document.body.style.backgroundColor = 'yellow' }

function makeRed() { document.body.style.backgroundColor = 'red' }

// option 3 for dom event handler : get element by id and then set onclick

const btnMakeBlue = document.getElementById('btn-make-blue');
// console.log(btnMakeBlue);
btnMakeBlue.onclick = function makeblue() {
    document.body.style.backgroundColor = 'blue';
}


  const btnMakeGreen = document.getElementById('btn-make-green');
        // console.log(btnMakeGreen);
        btnMakeGreen.onclick = makeGreen;
        function makeGreen() {
            document.body.style.backgroundColor = 'green';
        }