///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]


//CODE HERE

const summedPrice = cart.reduce(function(a,b) {
    return {price: a.price + b.price}
})
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal,couponValue,tax){
    return (cartTotal * tax.toFixed(2)) - couponValue
}


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
I will need a customer name as a string. I will need a phone number as a string as well since this information is just being saved and not manipulated in any way so a number is unnecessary for this.
I will need a price as a number.I will need an items array so things can be taken on and off the order by accessing the array. I will need a status which will be a string. And an address as a string.
and an order number just in case theres two people  with the same names, and i dont see any reason that this number needs to be manipulated as its only being used as a placeholder/identifier so i will use a string
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    name : "John Doe",
    number : "222-222-2222",
    items : ["burger", "Coke", "Fries"],
    status : "preparing",
    address : "123 sesame street",
    orderNum : "120"
}