import { get_score, creat, update, snack_speed, snack_inter_section, head } from "./snack.js";
import { drow_food, update_food, check_outside } from "./food.js";
var home_snack = document.getElementById("home_snack");
var last = 0;

function main(current) {
    if (game_over()) {
        console.log("game over");
        show_game_over();
        return 0;

    }
    window.requestAnimationFrame(main);
    var ls = (current - last) / 1000;
    if (ls < 1 / snack_speed) return;
    last = current;
    var x = document.getElementsByTagName("p");
    home_snack.innerHTML = "";
    update();
    creat(home_snack);
    drow_food(home_snack);
    update_food();
    // score
    print_score();

}
window.requestAnimationFrame(main);

//game over
var re = document.getElementById("re");
re.onclick = function() {
    location.reload();
    show_game_over;
}
var gameover = document.getElementById("game_over");

function show_game_over() {
    gameover.classList.toggle("none");
}

function game_over() {
    let xx = head();
    return snack_inter_section() || check_outside(xx.x, xx.y); //check for body of snack
}
//score 
function print_score() {
    let score = document.getElementById("score");
    let score1 = document.getElementById("score1");
    score.textContent = get_score();
    score1.textContent = get_score();
}
import { dir } from "./input.js";

document.getElementById("up").onclick = function() {
    dir("ArrowUp");
}
document.getElementById("lf").onclick = function() {
    dir("ArrowLeft");
}
document.getElementById("rg").onclick = function() {
    dir("ArrowRight");
}
document.getElementById("do").onclick = function() {
    dir("ArrowDown");
}