//for sidebar...
document.querySelector('.cross').style.display = 'none';
document.querySelector('.strips').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        setTimeout(() => {
            document.querySelector('.strips').style.display = 'inline'
            document.querySelector('.cross').style.display = 'none'
        }, 400);
    }
})