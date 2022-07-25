const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('active') // Após o classList eu podia por Remove ou add, mas colocando o Toggle ele usa os dois quando necessario
}

btnMobile.addEventListener('click', toggleMenu)