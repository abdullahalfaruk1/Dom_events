document.getElementById('btn-update-title')
    .addEventListener('click', function () {
        // console.log('btn clicked');
        const pageTitleElement = document.getElementById('page-title');
        pageTitleElement.innerText = 'Updated page title text.';
    })
document.getElementById('btn-login')
    .addEventListener('click', function () {
        const userInfoElement = document.getElementById('user-info');
        userInfoElement.innerText = ' User Logged in Successfully ';
    })