var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shoppingcart');

var products = [
          new Product({
              imagePath: 'https://images-na.ssl-images-amazon.com/images/I/51Cajbvpf9L.jpg',
              title: 'History',
              description: 'Promise Me Forever Debbie Macomber Classics',
              price: 18
       }),
          new Product({
              imagePath: 'https://images-na.ssl-images-amazon.com/images/I/51ZewuY2UqL._SY346_.jpg',
              title: 'Romance',
              description: 'Come Sundown Nora Roberts',
              price: 15
       }),
          new Product({
              imagePath: 'https://images-na.ssl-images-amazon.com/images/I/510KmiWD3iL._SY346_.jpg',
              title: 'ML',
              description: 'Bayes Theorem: A Visual Introduction',
              price: 25
       }),
          new Product({
              imagePath: 'https://images-na.ssl-images-amazon.com/images/I/51cY8P522KL._SY346_.jpg',
              title: 'Cookbooks',
              description: 'Thug Kitchen: The Official Cookbook...',
              price: 35
       }),
          new Product({
              imagePath: 'https://images-na.ssl-images-amazon.com/images/I/51gtG44GHfL.jpg',
              title: 'Arts',
              description: 'Al Franken Giant of the Senate Al Franken',
              price: 17
       }),
          new Product({
              imagePath: 'https://images-na.ssl-images-amazon.com/images/I/51IiKFIkISL._SY346_.jpg',
              title: 'Technology',
              description: 'Machine Learning with R - Second Edition',
              price: 17
       }),
          new Product({
              imagePath: 'https://images-na.ssl-images-amazon.com/images/I/51cY8P522KL._SY346_.jpg',
              title: 'Mystery',
              description: 'Mystery Writing Reference',
              price: 12
       }),
          new Product({
              imagePath: 'https://images-na.ssl-images-amazon.com/images/I/51ZewuY2UqL._SY346_.jpg',
              title: 'Children Book',
              description: 'Harry Potter and the Sorcerer"s Stone',
              price: 19
       })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
