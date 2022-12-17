let seeds = 0;
let money = 0;

function waterPlants(){
    seeds++
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
