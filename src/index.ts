import { AnyMxRecord } from "dns";
import { Application, Sprite } from "pixi.js";

import "./style.css";

const app = new Application({
    backgroundColor: 0xd3d1d3,
});

let spinn = false;

const data = [{ apple: "./assets/apple.png" }, { casino: "./assets/casino.png" }, { cherry: "./assets/cherry.png" }];

const reels: Sprite[] = [];
const reels2: Sprite[] = [];
const reels3: Sprite[] = [];

const icon1 = Sprite.from(data[0]?.apple);
const icon11 = Sprite.from(data[0]?.apple);
const icon12 = Sprite.from(data[0]?.apple);
reels.push(icon1);
reels2.push(icon11);
reels3.push(icon12);
const icon2 = Sprite.from(data[1]?.casino);
const icon21 = Sprite.from(data[1]?.casino);
const icon22 = Sprite.from(data[1]?.casino);
reels.push(icon2);
reels2.push(icon21);
reels3.push(icon22);
const icon3 = Sprite.from(data[2]?.cherry);
const icon31 = Sprite.from(data[2]?.cherry);
const icon32 = Sprite.from(data[2]?.cherry);
reels.push(icon3);
reels2.push(icon31);
reels3.push(icon32);


let pom = 0;

reels.forEach((r) => {
    r.x = 100;
    pom += 65;
    r.y = pom;
    app.stage.addChild(r);
});

let pom1 = 0;
reels2.forEach((r) => {
    r.x = 170;
    pom1 += 65;
    r.y = pom1;
    app.stage.addChild(r);
});
let pom2 = 0;
reels3.forEach((r) => {
    r.x = 240;
    pom2 += 65;
    r.y = pom2;
    app.stage.addChild(r);
});

const spinSrcButton = "./assets/spin.jpg";
let b: Sprite;

function spinnReel() {
    if (!spinn) spinning();
}

function spinning() {
    spinn = true;
    const slotVelocities = [15, 0, 0];
    app.ticker.add((dt) => {
        for (let i = 0; i < 3; i++) {
            slotVelocities[0] = slotVelocities[0] - 0.01;
            slotVelocities[0] >= 0 ? null : (slotVelocities[0] = 0);
            reels[i].y = reels[i].y - slotVelocities[0] * dt;
            if (reels[i].y < 0) {
                b = reels.shift();
                b.y = reels[1].y + 65;
                reels.push(b);
            }
            reels[0].y >= 5 ? (reels[i].y = reels[i].y - 0.5) : (reels[i].y = reels[i].y + 0);
        }
    });
    return setTimeout(() => {
        spinn = false;
        spinning1();
    }, 500);
}

function spinning1() {
    spinn = true;
    const slotVelocities = [20, 0, 0];
    app.ticker.add((dt) => {
        for (let i = 0; i < 3; i++) {
            slotVelocities[0] = slotVelocities[0] - 0.01;
            slotVelocities[0] >= 0 ? null : (slotVelocities[0] = 0);
            reels2[i].y = reels2[i].y - slotVelocities[0] * dt;
            if (reels2[i].y < 0) {
                b = reels2.shift();
                b.y = reels2[1].y + 65;
                reels2.push(b);
            }
            reels2[0].y >= 5 ? (reels2[i].y = reels2[i].y - 0.5) : (reels2[i].y = reels2[i].y + 0);
        }
    });
    return setTimeout(() => {
        spinn = false;
        spinning2();
    }, 1000);
}

function spinning2() {
    spinn = true;
    pom = pom + 65;
    const slotVelocities = [25, 0, 0];
    app.ticker.add((dt) => {
        for (let i = 0; i < 3; i++) {
            slotVelocities[0] = slotVelocities[0] - 0.01;
            slotVelocities[0] >= 0 ? null : (slotVelocities[0] = 0);
            reels3[i].y = reels3[i].y - slotVelocities[0] * dt;
            if (reels3[i].y < 0) {
                b = reels3.shift();
                b.y = reels3[1].y + 65;
                reels3.push(b);
            }
            reels3[0].y >= 5 ? (reels3[i].y = reels3[i].y - 0.5) : (reels3[i].y = reels3[i].y + 0);
        }
    });
    return setTimeout(() => {
        spinn = false;
    }, 5000);
}

const button = Sprite.from(spinSrcButton);
button.interactive = true;
button.buttonMode = true;
button.x = 120;
button.y = 280;
app.stage.addChild(button);
button.on("pointerdown", spinnReel);
document.body.appendChild(app.view);
