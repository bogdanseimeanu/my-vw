const menu = document.querySelector('.menu')
const navigation = document.querySelector('.navigation')

menu.addEventListener('click', () => {
    menu.classList.toggle('on')
    navigation.classList.toggle('on')
})

let member_modal = document.getElementById("member_modal");

if (document.body.contains(member_modal)) {
    let addToCartButtons = document.getElementsByClassName("add-to-cart");
    for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].onclick = function () {
            member_modal.style.display = "block";
        }
    }

    let modal_close = document.getElementsByClassName("close")[0];

    modal_close.onclick = function () {
        member_modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target === member_modal) {
            member_modal.style.display = "none";
        }
    }
}