
function calNewPrice(price,user){
    var newPrice = 0;

    switch(user.level){
        case 'gold':
            newPrice = price * 0.9;
            break;
        case 'silver':
            newPrice = price * 0.95;
            break;
        case 'bronze':
            newPrice = price * 0.98;
            break;
        default:
        newPrice = price;
    }
    return newPrice;
}
var user = {
    level:'gold'
}
var result = calNewPrice(3000, user);

console.log(result);