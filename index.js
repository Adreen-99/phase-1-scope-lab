// Write your solution in this file!
var customerName = 'bob';

var bestCustomer;

const leastFavouriteCustomer = 'Mike';


function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}


function changeLeastFavoriteCustomer(){
    leastFavouriteCustomer = 'Ken'; 
}