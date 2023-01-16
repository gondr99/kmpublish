window.onload = () => {
    const tabs = document.querySelectorAll(".tab");

    const boxes = document.querySelectorAll(".box");

    tabs.forEach( (tab, idx) => {
        tab.addEventListener("click", e => {
            tabs.forEach(t => t.classList.remove("on"));
            tab.classList.add("on");

            boxes.forEach( b => b.classList.remove("on"));
            boxes[idx].classList.add("on");
        });
    });
};