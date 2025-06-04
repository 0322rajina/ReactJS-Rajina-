const customer = [
    {
        custID: 1, name: "Rajina", bought: [
            { id: 1, name: "doll" },
            { id: 2, name: "copy" }],
    },
    {
        custID: 2, name: "Ranjana", bought: [
            { id: 3, name: "slipers" },
            { id: 4, name: "pen" }],
    },
    {
        custID: 3, name: "John", bought: [
            { id: 5, name: "guitar" },
            { id: 2, name: "copy" }],
    },
    {
        custID: 4, name: "Harry", bought: [
            { id: 7, name: "laptop" },
            { id: 4, name: "pen" }],
    },
];
const customerResponse = { //backend response
    statusCode: 200,
    message: "Customer fetched succesfully",
    data: customer,
};
const getProductsNames = () => {
    if (customerResponse.statusCode === 200) {
        let boughtItems = [];
        customerResponse.data.forEach((customer) => { //whole customer array
            customer.bought.map((item) => {
                boughtItems.push(item.name)
            });
        });
        return boughtItems; // return the array of product names
    }
};
//console.log(getProductsNames());


const getProductNumber = () => {
    if (customerResponse.statusCode === 200) {
        let productNumber = {};
        customerResponse.data.forEach((customer) => {
            customer.bought.map((item) => {
                {
                    // if (productNumber[item.name]) {
                    //     productNumber[item.name] += 1;
                    // } else {
                    //     productNumber[item.name] = 1;
                    // }
                    if (productNumber[item.id]){
                        productNumber[item.id]+=1;
                    }else{
                        productNumber[item.id]=1;
                    }
                }
            });
        });
        return productNumber; // return the object with product name or product IDs  and their counts
    }

};
console.log(getProductNumber())
// data={
//     copy:2,
//     pen:2,
//     doll:1,
// }