var direction = { x: 0, y: 0 };
var last_direction = { x: 0, y: 0 };
var eye = "ArrowUp";
window.addEventListener("keydown", (e) => {
    // console.log("e.key")
    switch (e.key) {
        case "ArrowUp":
            if (last_direction.y !== 0) break;
            eye = e.key;
            direction = { x: 0, y: -1 };
            break;
        case "ArrowDown":
            if (last_direction.y !== 0) break;
            eye = e.key;
            direction = { x: 0, y: 1 };
            break;
        case "ArrowLeft":
            if (last_direction.x !== 0) break;
            eye = e.key;
            direction = { x: -1, y: 0 };
            break;
        case "ArrowRight":
            if (last_direction.x !== 0) break;
            eye = e.key;
            direction = { x: 1, y: 0 };
            if (document.body.classList.contains('clas0')) {

                console.log("o")
            }
            break;


    }
})

export function dir(e) {

    switch (e) {
        case "ArrowUp":
            if (last_direction.y !== 0) break;
            eye = e;
            direction = { x: 0, y: -1 };
            break;
        case "ArrowDown":
            if (last_direction.y !== 0) break;
            eye = e;
            direction = { x: 0, y: 1 };
            break;
        case "ArrowLeft":
            if (last_direction.x !== 0) break;
            eye = e;
            direction = { x: -1, y: 0 };
            break;
        case "ArrowRight":
            if (last_direction.x !== 0) break;
            eye = e;
            direction = { x: 1, y: 0 };
            break;


    }
}
export function getdirection() {
    last_direction = direction;
    return direction;

}

export function eyes() {
    return eye;
}
export function border_snack() {
    return eye;
}