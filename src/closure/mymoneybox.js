// function moneyBox(coins){
//     let saveCoins = 0; 
//     saveCoins += coins; 
//     console.log(`MoneyBox: $ ${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(10);

function moneyBox(){
    let saveCoins = 0; 
    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: $ ${saveCoins}`);
    }
    return countCoins;

}

const myMoneyBoxEsau = moneyBox();
const myMoneyBoxAna = moneyBox();


myMoneyBoxEsau(5);
myMoneyBoxAna(15);



