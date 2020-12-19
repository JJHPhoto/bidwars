// 1. require and import "mysql" and "inquirer"
​
​
// 2. Create the MySQL `connection` object.
​
​
// 3. Connect to the MySQL database and THEN `prompt` the user for an action
//
// - Action Choices: "POST", "BID", "EXIT"
​
​
// 4. THEN use the action choice to
//
// - IF "POST" THEN `prompt` the users for information about a new auction item and add it to the database (C - CREATE)
//
// - ELSE IF "BID" THEN
//
// - `SELECT` all existing items from the database (R - READ)
//
// - THEN `prompt` the user for which one they want to bid on and how much they want to bid (You'll need to make a list of choices using the results from the SELECT)
//
// - THEN check if the provided bid is higher then the saved amount
//
// - IF the bid is higher THEN `UPDATE` the item and `console.log` "Bid placed successfully!" (U - UPDATE)
//
// - ELSE `console.log` "Your bid was too low. Try again..."
//
// - ELSE `end` the `connection`
