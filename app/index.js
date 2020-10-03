let budget = ()=>{
    let balance = 0;

    let changeBal = (val)=>{
        return balance += val;
    }

    let deposit20 = () => changeBal(20);
    let withdraw20 = () => changeBal(-20);
    let check = ()=> balance;

    return {
        deposit20,check,withdraw20
    }
}

let wallet = budget();
wallet.deposit20();
wallet.deposit20();
wallet.deposit20();
wallet.deposit20();
wallet.withdraw20();

console.log(wallet.check())