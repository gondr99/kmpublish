window.onload = () => {
    const tabs = document.querySelectorAll(".tab");
    const content = document.querySelector(".content");
    const boxes = document.querySelectorAll(".box");

    let currentIdx = 0;

    tabs.forEach( (tab, idx) => {
        tab.addEventListener("click", e => {
            tabs.forEach(t => t.classList.remove("on"));
            tab.classList.add("on");

            boxes[currentIdx].classList.add("off");
            let before = currentIdx; //저장해두고
            setTimeout(()=>{
                content.removeChild(boxes[before]);
                boxes[before].classList.remove("on", "off");
                content.appendChild(boxes[before]);
            }, 500);//0.5초 애니메이션이니까

            boxes[idx].classList.add("on");
            currentIdx = idx;
        });
    });
};