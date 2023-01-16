window.onload = () => {
    let bgColors = ["#1877F2", "#1DA1F2", "#E4405F", "#333333"];

    document.querySelectorAll(".tooltip-box").forEach( (box, idx) => {
        let tip = new Tooltip(box, "#fff", bgColors[idx]);
        tip.setMessage("Hi this is tooltip");
    });
    
    //수행평가 
    /*
        툴팁의 방향도 지정할 수 있도록 Tooltip 라이브러리를 개편해보자.
        툴팁 효과 애니메이션을 만들어보자. 등등 여러가지 변형이 가능합니다.
    */
}