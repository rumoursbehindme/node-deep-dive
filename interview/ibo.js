
const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
},
{
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
},
{
    productName: "TV",
    quantity: 10,
    description: "television"
},
{
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
},
{
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
}
];


function getOutPut1(listOfProducts) {
    return listOfProducts.reduce((acc, product) => {
        if (acc[product.productName]) {
            acc[product.productName]++;
        }
        else {
            acc[product.productName] = 1;
        }
        return acc;
    }, {});

}

const arr = [{ lol: 'test', quantity: 10 }, { lol: 'test1', quntity: 10 }];
let onj = arr.find(ele => ele.lol === 'test');

onj.quantity = 150;
console.log(onj);
console.log(arr);

// console.log('calling method')
// console.log(getOutPut1(listOfProducts));
// getOutPut2(listOfProducts)
// console.log(getOutPut2(listOfProducts));


//Expected OUPUT-1 --> Unique Product Count
/* ouput1 = {
  "TV": 2,
  "AC": 2,
  "FAN": 1
}; */

//Expected OUTPUT -2 --> Quantity sum for Each Unique Product Name

/* ouput2 =  [{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
] */
