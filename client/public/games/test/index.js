var gameInterval;
var gameCanvas;
var eventCatcherDiv;

var heroX = 10;
var heroY = 10;
function drawTheHero(g)
{
    g.fillStyle = "#0000FF";
    g.fillRect(heroX, heroY, 20, 20);
}

function startGame()
{
    drawTheHero(gameCanvas.getContext("2d"));
    gameInterval = setInterval(runGame, 25);
}

function startLoading()
{
    eventCatcherDiv = document.getElementById("EventCatcher");
    // eventCatcherDiv events go here

    gameCanvas = document.getElementById("GraphicsBox");

    gameInterval = setInterval(hasLoaded, 250);
}

function hasLoaded()
{
    if (true) // Check to see if all info is loaded
    {
        clearInterval(gameInterval);
        startGame();
    }
}

function runGame()
{

}