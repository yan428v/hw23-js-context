let banking = {
    title: 'My',
    money: [16000, 25000, 35000],
    showList: function (){
        this.money.forEach((salary) => {
            console.log(`${this.title} ,Balance = ${salary}`);
        });
    }
}

//unmodifiable
banking.showList();
const myBalance = banking;
banking = null;
console.log('================');
myBalance.showList();


















