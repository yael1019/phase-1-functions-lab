// Code your solution in this file!
let headQuarters = 42;

function distanceFromHqInBlocks(street) {
    return Math.abs(street - headQuarters);
}

function distanceFromHqInFeet(streetNum) {
    let blocks = distanceFromHqInBlocks(streetNum);
    return blocks * 264;
}

function distanceTravelledInFeet(start, end) {
    let blocks = Math.abs(end - start);
    return blocks * 264;
}

function calculatesFarePrice(startBlock, destination) {
    let totalFeet = distanceTravelledInFeet(startBlock, destination);
    if (totalFeet > 2500) return 'cannot travel that far';
    else if (totalFeet <= 400) return 0;
    else if (totalFeet > 400 && totalFeet <= 2000) return (totalFeet - 400) * 0.02;
    else if (totalFeet > 2000) return 25;
} 