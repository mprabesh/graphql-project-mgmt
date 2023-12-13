const express = require("express");
const app = express();
const colors = require("colors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

// this is for commit 2

app.listen(PORT, () => {
  console.log("Server running on port ", PORT);
});
