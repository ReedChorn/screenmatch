var connection = require("./connection.js");  
var tableName = "allUsers";  
var orm = {  

// Here our ORM is creating a simple method for performing a query of the entire table.  

// We make use of the callback to ensure that data is returned only once the query is done. 

allUsers: function(callback) {  
    var s = "SELECT * FROM " + tableName;  
    connection.query(s, function(err, result) {  
    callback(result);  
});  
}, 

// Here our ORM is creating a simple method for performing a query of a single user in the table. 

// Again, we make use of the callback to grab a specific user from the database.  
searchUser: function(name, callback) {  
    var s = "select * from " + tableName + " where routeName=?";  
    connection.query(s, [name], function(err, result) { callback(result);  
});  
}, 

// Here our ORM is creating a simple method for adding users to the database  

// Effectively, the ORM's simple addUser method translates into a more complex SQL INSERT statement.  

addUser: function(user, callback) {  

// Creating a routeName so its easy to search.  
// Using a RegEx Pattern to remove spaces from user.name  

var routeName = user.name.replace(/\s+/g, "").toLowerCase();  
console.log(routeName);  
var s = "INSERT INTO " + tableName + " (routeName, firstName, lastName, email,password, faveRating, favGenre, favPlatform, faveActor) VALUES (?,?,?,?,?)";   

connection.query(s, [routeName, user.firstName, user.lastName, user.email, user.password, user.faveRating, user.favGenre, user.favPlatform, user.faveActor], function(err, result) { 
    callback(result);  
});  
}  
};  
module.exports = orm; 