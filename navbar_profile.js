const profileImage = document.getElementById('profile-image');
const rightSidebar = document.getElementById('sidebar');

var isSidebar = false;

function hideSidebar() {
    isSidebar = false;
    rightSidebar.style.right = '-300px';
}

function showSidebar() {
    isSidebar = true;
    rightSidebar.style.right = '0'
}

document.addEventListener('click', (event) => {
    const target = event.target;
    if (target !== rightSidebar) {
        hideSidebar();
    }
});

/*Ocultar el sidebar al hacerle click en el sidebar?*/
rightSidebar.addEventListener('click', (event) => {
    event.stopPropagation();
});

profileImage.addEventListener('click', (event) => {
    event.stopPropagation();
    isSidebar ? hideSidebar() : showSidebar();
});


