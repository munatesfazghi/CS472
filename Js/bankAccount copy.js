class Account{
    static accountInfoList = [];
    #accountName;   
    #depositAmount;
    
    // creatAccount(){
    //     this.#accountName = document.getElementById("accountName").value
    //     this.#accountName = document.getElementById("deposit").value

    
    constructor(accountName, depositAmount){
        this.#accountName = accountName;
        this.#depositAmount = depositAmount;

    
    }
     static getAccountName(){
        return this.#accountName;
    }
    
    static creatNewAccount(){
        const accName = document.getElementById("accountName").value;
        const depositA = document.getElementById("deposit").value;
    
        const acc = new Account(accName, depositA);
        Account.accountInfoList.push(acc);
        let txtArea = document.getElementById("txt");
        Account.accountInfoList.forEach(a => {
            txtArea.value +=`Account Name: ${a.#accountName}: ${a.#depositAmount}`;
        });

        Account.creatOptions();
    
    }
    static creatOptions(){
       let selct = document.getElementById("select");
      // let op = document.createElement('option');
       this.accountInfoList.forEach(a => {
        let options = document.createElement('option');
        options.value = a.#depositAmount;
        options.textContent = a.#accountName;
        selct.appendChild(options);
       });
    }
    
}

    


const btn = document.getElementById("buttn");
btn.onclick = Account.creatNewAccount;