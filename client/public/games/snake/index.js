let highscore = 0;
let positionX = 10;
let positionY = 10;
const gridSize = 20;
const tileCount = 20;
let redX = 15;
let redY = 15;
let xv = 0;
let yv = 0;
const trail = [];
let tail = 1;

function startLoading() {
    console.log('startLoad');
    canvas = document.getElementById('canvas');
    canvas.width = 400;
    canvas.height = 400;
    ctx = canvas.getContext('2d');
    document.addEventListener('keydown', keyPush);
    setInterval(game, 1000 / 15);
};

function game() {
    positionX += xv;
    positionY += yv;
    if (positionX < 0) {
        positionX = tileCount - 1;
    }
    if (positionX > tileCount - 1) {
        positionX = 0;
    }
    if ( positionY < 0) {
        positionY = tileCount - 1;
    }
    if (positionY > tileCount - 1) {
        positionY = 0;
    }
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'yellow';
    for (const node of trail) {
        ctx.fillRect(node.x * gridSize, node.y * gridSize, gridSize - 2, gridSize - 2);
        if (node.x === positionX && node.y === positionY) {
            if (highscore < trail.length) {
                highscore = trail.length;
            }
            tail = 1;
            yv = 0;
            xv = 0;
            positionX = 10;
            positionY = 10;
        }
    }
    trail.push({x: positionX, y: positionY});
    while (trail.length > tail) {
    trail.shift();
    }

    if (redX === positionX && redY === positionY) {
        tail++;
        redX = Math.floor(Math.random() * tileCount);
        redY = Math.floor(Math.random() * tileCount);
    }
    ctx.fillStyle = 'red';
    ctx.fillRect(redX * gridSize, redY * gridSize, gridSize - 2, gridSize - 2);
}

function keyPush(evt) {
    switch (evt.keyCode) {
        case 37:
            if (xv === 1) { break; }
            xv = -1;
            yv = 0;
            break;
        case 38:
            if (yv === 1) { break; }
            xv = 0;
            yv = -1;
            break;
        case 39:
            if (xv === -1) { break; }
            xv = 1;
            yv = 0;
            break;
        case 40:
            if (yv === -1) { break; }
            xv = 0;
            yv = 1;
            break;
    }
}