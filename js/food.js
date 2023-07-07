const size = 21;
var column = Math.floor(Math.random() * size);
var row = Math.floor(Math.random() * size);
import { onsnack, new_body } from "./snack.js";
// var expend = expend_food();
export function update_food() {
    if (onsnack(column, row)) {
        new_body();
        column = Math.floor(Math.random() * size);
        row = Math.floor(Math.random() * size);
    }
}
export function drow_food(home_snack) {
    let food = document.createElement("div");
    food.style.gridColumnStart = column;
    food.style.gridRowStart = row;
    food.classList.add("food");
    home_snack.appendChild(food);

}

export function check_outside(x, y) {
    // return x >= size || y >= size;
    return (
        x < 1 ||
        x > size ||
        y < 1 ||
        y > size)
}