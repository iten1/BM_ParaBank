
let userName = "";
let d = new Date();
let __accountNumber;

export function setAccountNumber(accountNumber){
   __accountNumber = accountNumber;
}
export function getAccountNumber(){
   
   console.log("get",__accountNumber)
   return __accountNumber;
}

export function getUserName() {

   if (userName == "") {
      userName = "iten" + d.getHours();
   }

   return userName;
}

