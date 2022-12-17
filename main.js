let seeds = 0;
let money = 0;
let clickCount = 1;

let addClickPrice = 40;

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
    setInterval(function() {
        seeds += 1;
        document.getElementById('wateredPlants').innerHTML = 'Seeds: ' + seeds;
      }, 1500);
}