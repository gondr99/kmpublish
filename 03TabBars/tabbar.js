window.onload = () => {
    const tab = document.querySelector(".tabs");
    const tabList = document.querySelectorAll(".tabs .label");
    const closer = document.querySelector(".boxes .closer");
    const content = document.querySelector(".content");

    const contents = [
        "here is content 1",
        "here is content 2",
        "here is content 3",
        "here is content 4",
    ];
    tab.addEventListener("click", e => {
        console.log(e.target);
        if(e.target.classList.contains("tab") || e.target.classList.contains("icon")) {
            
            tabList.forEach( t => t.classList.remove("on"));
            const tab = e.target.closest(".label");
            tab.classList.add("on");

            closer.classList.remove("on", "off");

            closer.classList.add("on");
            setTimeout(()=>{
                content.innerHTML = contents[tab.dataset.id];
                closer.classList.add("off");
            }, 1000);
        }
    });
}