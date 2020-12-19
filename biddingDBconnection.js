// Import the mysql package
const mysql = require("mysql");
const inquirer = require("inquirer");

// Connect to the ice_creamDB database using a localhost connection
const connection = mysql.createConnection({
  host: "localhost",

  // Your port, if not 3306
  port: 3306,

  // Your MySQL username
  user: "root",

  // Your MySQL password (leave blank for class demonstration purposes; fill in later)
  password: "P0d%st0Phi|",

  // Name of database
  database: "biddingDB",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

  start();

  // connection.end();
});

function start() {
  inquirer
    .prompt({
      name: "postOrBid",
      type: "list",
      message: "Would you like to [POST] an auction or [BID] on an action?",
      choices: ["POST", "BID", "EXIT"],
    })
    .then(function (answers) {
      if (answers.postOrBid === "POST") {
        postAuction();
      } else if (answers.postOrBid === "BID") {
        bidAuction();
      } else {
        connection.end();
      }
    });
}

function postAuction() {
  inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "What is an item you would like to submit?",
      },
      {
        name: "category",
        type: "input",
        message: "What category would you like to place your auction in?",
      },
      {
        name: "bid",
        type: "input",
        message: "How much would you like your starting bid to be?",
      },
    ])
    .then(function (postInfo) {
      console.log("Your bid was created successfully!");
      console.log(postInfo);
      createInventory(postInfo);
    });
}

function createInventory(postInfo) {
  console.log("Inserting a new item...\n");
  var query = connection.query(
    "INSERT INTO auctions SET ?",
    {
      item_name: postInfo.item,
      category: postInfo.category,
      starting_bid: postInfo.bid,
    },
    function (err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " product inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      start();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

// function updateItems() {
//   console.log("Updating all items in auction house...\n");
//   var query = connection.query(
//     "UPDATE auctions SET ? WHERE ?",
//     [
//       {
//         bid: 100,
//       },
//       {
//         item: "Rocky Road",
//       },
//     ],
//     function (err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " auctions updated!\n");
//       // Call deleteProduct AFTER the UPDATE completes
//       start();
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// }
