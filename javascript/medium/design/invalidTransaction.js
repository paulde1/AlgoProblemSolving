/**
 * @param {string[]} transactions
 * @return {string[]}
 */

//define a transaction contructor class thats takes in [name, time , amount and city]
//set each variable i. e( this.name = name etc)
class Transaction {
  constructor([name, time, amount, city]) {
    this.name = name;
    this.time = time;
    this.amount = amount;
    this.city = city;
  }
}
const invalidTransactions = function (transactions) {
  //define invalid list as array
  //define invalid indexes as a new set
  //define transaction map
  //set a max amount variable to 1000
  //set mintimeallowed to 60 mins
  let invalidList = [];
  let invalidSet = new Set();
  let transactionMap = new Map();
  const max = 1000;
  const min = 60;

  //got through transaction with for each with trans and index as params
  //create a  transaction object by using new class Transaction(tran.split(',')
  //if the map doesnt have the transaction name set the name with set(transaction.name, [])
  //if the transaction amount is greater than the max ammount, add the index to invalid index set
  //grab the previous transactions from the map by name
  //for each through the previous transactions just grabbing the index
  //create a  prevtransaction object by using new class Transaction(transactions[index].split(',')) ;
  //check if prevtransaction.city !== transaction.city & Math.abs(parseInt(prevTxn.time) - parseInt     (transaction.time)) <= minTimeGap
  // .add transactions index and prevtransaction index to invalid indexes set

  transactions.forEach((transaction, index) => {
    let transact = new Transaction(transaction.split(","));
    if (!transactionMap.has(transact.name))
      transactionMap.set(transact.name, []);
    if (transact.amount > max) invalidSet.add(index);
    let prevTransactions = transactionMap.get(transact.name);
    prevTransactions.forEach((idx) => {
      let prevTransaction = new Transaction(transactions[idx].split(","));
      if (
        prevTransaction.city !== transact.city &&
        Math.abs(parseInt(prevTransaction.time) - parseInt(transact.time)) <=
          min
      ) {
        invalidSet.add(index);
        invalidSet.add(idx);
      }
    });
    prevTransactions.push(index);
    transactionMap.set(transact.name, prevTransactions);
  });
  console.log(invalidSet);
  invalidSet.forEach((index) => invalidList.push(transactions[index]));
  return invalidList;

  // push transaction index in to prevTranasactions
  //set transactionName to prevtransactions in transaction map

  //at the end go throught the invalidindex set using for each ,
  //grab each index and push transactions[index]into invalidtransactions list
  //return invalid transactions list.
};
