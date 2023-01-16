class Tooltip 
{
    constructor(parent, color, bgColor)
    {
        this.spanTag = this.createSpan();

        parent.appendChild(this.spanTag);
        parent.style.position = "relative";
        
        this.spanTag.style.color = color;
        this.spanTag.style.backgroundColor = bgColor;
        this.spanTag.dataset.bgColor = bgColor; 

        this.spanTag.style.setProperty("--tooltip-back-color", bgColor);

        this.addHoverEvent(parent);
    }

    createSpan()
    {
        let span = document.createElement("span");
        span.classList.add("tooltip");
        return span;
    }

    addHoverEvent(parent)
    {
        parent.addEventListener("mouseenter", e => {
            this.spanTag.classList.add("on");
        });
        parent.addEventListener("mouseleave", e => {
            this.spanTag.classList.remove("on");
        });
    }

    setMessage(msg)
    {
        this.spanTag.innerHTML = msg;
    }
}