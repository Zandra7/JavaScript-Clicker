let seeds = 0;
let money = 0;
let clickCount = 1;
let clicksPerSeconds = 1;

let addClickPrice = 40;
let hireWorkersPrice = 150;

function waterPlants(){
    seeds += clickCount
    document.getElementById('wateredPlants').innerHTML = 'Seeds: ' + seeds
}

function sellSeeds(){
    if(seeds >= 1) {
        money += seeds
        document.getElementById('money').innerHTML = 'Money: ' + money + '$'
        seeds = 0;
        document.getElementById('wateredPlants').innerHTML = 'Seeds: ' + seeds;
    }
}

function addClick(){
    if(money >= addClickPrice){
        clickCount += 1
        money -= 30
        document.getElementById('money').innerHTML = 'Money: ' + money + '$'
        addClickPrice *= 2
        document.getElementById('addClickPrice').innerHTML = 'Price: ' + addClickPrice + '$'
    }
}

function hireWorkers(){
    if(money >= hireWorkersPrice){
        setInterval(function() {
            seeds += clicksPerSeconds;
            document.getElementById('wateredPlants').innerHTML = 'Seeds: ' + seeds;
        }, 1500);
        document.getElementById('hireWorkersPrice').innerHTML = 'Price: ' + hireWorkersPrice + '$'
        document.getElementById('seedsPerSeconds').innerHTML = 'Seeds per second: ' + clicksPerSeconds;
    }
}