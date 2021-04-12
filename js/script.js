const menu = document.querySelector('.menu')
const navigation = document.querySelector('.navigation')

menu.addEventListener('click', () => {
    menu.classList.toggle('on')
    navigation.classList.toggle('on')
})
