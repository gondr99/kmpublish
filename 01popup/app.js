const $ = (css) => {
    return document.querySelector(css);
}
window.onload = () => {

    const selectBox = $("#option");
    const content = $(".container");
    const modalContainer = $('#modal-container'),
        body = $('body'),
        btnOpen = $("#btnOpen");


    btnOpen.addEventListener("click", function () {
        modalContainer.classList.add(selectBox.value);
        content.classList.add(selectBox.value);
        body.classList.add('modal-active');

    });

    modalContainer.addEventListener('click', function () {
        modalContainer.classList.add("out");
        content.classList.add("out");
        body.classList.remove('modal-active');
        
        setTimeout(() => {
            modalContainer.classList.remove(selectBox.value);
            modalContainer.classList.remove("out");
            content.classList.remove(selectBox.value);
            content.classList.remove("out");
        }, 1000);
    });
}
