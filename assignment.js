

//kilometerToMeter

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    if (kilometer < 0) {
        return "Error: Distance cannot be negative."
    }
    return meter;
}
var myDistance = kilometerToMeter(9);
console.log(myDistance);


//budgetCalculator

function budgetCalculator(watchQuantity, phoneQuantity, laptopQuanity) {
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    cost = watchPrice * watchQuantity + phonePrice * phoneQuantity + laptopPrice * laptopQuanity;
    if (watchQuantity < 0 || phoneQuantity < 0 || laptopQuanity < 0) {
        return "Error: quantity cannot be negative."
    }
    return cost;
}
var totalPrice = budgetCalculator(1, 1, 1);
console.log(totalPrice);

//hotelCost

function hotelCost(night) {

    if (night <= 10) {
        var cost = night * 100;
    }
    else if (night <= 20) {
        var firstPart = 10 * 100;
        var remaining = night - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = night - 20;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    if (night < 0) {
        return "Error: number of nights cannot be negative."
    }
    return cost;
}
var totalCost = hotelCost(-10);
console.log(totalCost);

//megaFriend

var friends = ['Kalam', 'Barkat', 'Shahadat', 'Miku', 'Mahmudullah', 'Babu', 'Imranuzzamani'];
var nameLength = 0;
var longestName = " ";
function megaFriend(nameLength) {
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].length > nameLength) {
            nameLength = friends[i].length;
            longestName = friends[i];
        }
    }
    return longestName;
}
var findLongestName = megaFriend(longestName);
console.log([longestName]);


