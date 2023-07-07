var snack_body = [{ x: 10, y: 10 }];
export var snack_speed = 4;
export var expend_food = 2;
import { getdirection, eyes, border_snack } from "./input.js";
var e2;
var count_score = 0;
export function update() {
    var input = getdirection();
    e2 = eyes();
    // border = border_snack();
    for (let i = snack_body.length - 2; i >= 0; i--) {
        snack_body[i + 1] = {...snack_body[i] };
        // console.log(snack_body[i + 1]);
    }
    snack_body[0].x += input.x;
    snack_body[0].y += input.y;
    high_speed();
}
export function creat(home_snack) {
    snack_body.forEach((e, clas) => {
        var ele = document.createElement("div");
        ele.style.gridColumnStart = e.x;
        ele.style.gridRowStart = e.y;
        ele.classList.add("snack");
        // ele.classList.add("border" + border);
        ele.classList.add("clas" + clas);
        home_snack.appendChild(ele);
        if (clas == 0) {
            ele.classList.add(e2);
            var p1 = document.createElement("p");
            var p2 = document.createElement("p");
            p1.classList.add("eye");
            p2.classList.add("eye");
            ele.appendChild(p1);
            ele.appendChild(p2);
        }

        ++clas;
    })


}
// where eat food
export function new_body() {

    snack_body.length += expend_food;
    count_score += expend_food;

}
//
export function onsnack(x, y, { ignor = false } = {}) {
    return snack_body.some((e, index) => {
        if (ignor == true && index == 0) return false;
        return e.x === x && e.y === y;
    })
}
// head
export function head() {
    return snack_body[0];
}

export function snack_inter_section() {
    return onsnack(snack_body[0].x, snack_body[0].y, { ignor: true });
}
//get score
export function get_score() {
    return count_score;
}
var pre = 1;
var quan = 6;

function high_speed() {
    if (get_score() >= pre * quan) {
        pre += 1;
        snack_speed += 1;
        expend_food += 1;
    }
}