const mouse = {
    mouseX: 0,
    mouseY: 0
}

const getMouse = () => mouse;
const setMouse = event => {
    mouse.mouseX = event.clientX;
    mouse.mouseY = event.clientY;
};

export { getMouse, setMouse };