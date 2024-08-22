let clickedElement;

let boxes = document.querySelectorAll(".box");

boxes.forEach((element) => {
    element.addEventListener("mousedown", () => {
        element.style.position = "absolute";
        clickedElement = element;

        document.onmousemove = (e) => {
            let x = e.pageX;
            let y = e.pageY;
            try {
                clickedElement.style.left = (x - 50) + "px";
                clickedElement.style.top = (y - 50) + "px";
            } catch (e) {
                console.log("click the element to move it");
            }
        }

        document.onmouseup = (e) => {
            clickedElement = null;
        }
    })
})