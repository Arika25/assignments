/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  transactions1 = {}
  for (var i=0; i< transactions.length; i++) {
    if (transactions1[transactions[i].category]){
      transactions1[transactions[i].category] = transactions1[transactions[i].category]+transactions[i].price;
    } else {
      transactions1[transactions[i].category] = transactions[i].price
    }
  }
  
  keys = Object.keys(transactions1);
  let final =[];
  for (var i=0; i<keys.length; i++) {
    var obj = { 
      category: keys[i],
      totalSpent: transactions1[keys[i]]

    }

    final.push(obj);
  
  }
  

    return final;
}

// let transactions = [{
//   id: 1,
// 		timestamp: 1656076800000,
// 		price: 10,
// 		category: 'Food',
// 		itemName: 'Pizza'
// },
// {
//   id: 2,
// 		timestamp: 1656076800000,
// 		price: 5,
// 		category: 'Drink',
// 		itemName: 'Juice'

// },
// {
//   id: 3,
// 		timestamp: 1656076800000,
// 		price: 30,
// 		category: 'Cloth',
// 		itemName: 'Shirt'

// },
// {
//   id: 4,
// 		timestamp: 1656076800000,
// 		price: 20,
// 		category: 'Food',
// 		itemName: 'biryani'

// }
// ]

// let ans = calculateTotalSpentByCategory(transactions)
// console.log(ans)

module.exports = calculateTotalSpentByCategory;
