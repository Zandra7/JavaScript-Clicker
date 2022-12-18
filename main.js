let seeds = 0;
let money = 0;
let clickCount = 1;
let clicksPerSeconds = 0;

let addClickPrice = 40;
let hireWorkersPrice = 150;

function onLoad() {
    document.addEventListener('keydown', cheatSeeds, false);
}

function waterPlants() {
    seeds += clickCount
    document.getElementById('wateredPlants').innerHTML = 'Seeds: ' + seeds
}

function sellSeeds() {
    if (seeds >= 1) {
        money += seeds
        document.getElementById('money').innerHTML = 'Money: ' + money + '$'
        seeds = 0;
        document.getElementById('wateredPlants').innerHTML = 'Seeds: ' + seeds;
    }
}

function addClick() {
    if (money >= addClickPrice && addClickPrice < 1000) {
        clickCount += 1
        money -= 30
        document.getElementById('money').innerHTML = 'Money: ' + money + '$'
        addClickPrice *= 2
        document.getElementById('addClickPrice').innerHTML = 'Price: ' + addClickPrice + '$'
    } 
    if (addClickPrice >= 1000) {
        document.getElementById('workFasterbtn').disabled = true;
        document.getElementById('addClickPrice').innerHTML = 'Fully uppgraded'
    } 
  }

function hireWorkers() {
    if (money >= hireWorkersPrice && hireWorkersPrice < 4800) {
        money -= hireWorkersPrice
        clicksPerSeconds += 1
        document.getElementById('money').innerHTML = 'Money: ' + money + '$'
        setInterval(function() {
            seeds += clicksPerSeconds;
            document.getElementById('wateredPlants').innerHTML = 'Seeds: ' + seeds;
        }, 1500);
        hireWorkersPrice *= 2
        document.getElementById('hireWorkersPrice').innerHTML = 'Price: ' + hireWorkersPrice + '$'
        document.getElementById('seedsPerSeconds').innerHTML = 'Seeds per second: ' + clicksPerSeconds;
    }
    if (hireWorkersPrice === 4800) {
        document.getElementById('hireWorkersbtn').disabled = true;
        document.getElementById('hireWorkersPrice').innerHTML = 'Fully uppgraded'
    }
}

// keyboard handler function
function cheatSeeds(event) {
    if (event.key === 'a') {
        seeds += 100;
        document.getElementById('wateredPlants').innerHTML = 'Seeds: ' + seeds;
    }
    if (event.key ==='b'){
        {
            money += 500;
            document.getElementById('money').innerHTML = 'Money: ' + money + '$';
        }
    }
}

window.onload = onLoad();
