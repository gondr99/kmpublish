window.onload = () => {
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => {
        tab.addEventListener("click", e => {
            tabs.forEach(t => t.classList.remove("on"));
            tab.classList.add("on");
        });
    });
};