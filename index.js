const express = require("express");
const articles = require("./data/db.json");
const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/articles", (req, res) => {
  res.render("articles", {articles});
});

app.get("/articles/:slug", (req, res) => {
  const article = articles.find(
    (article) => article.slug === req.params.slug
  );
  res.render("article", {article});
});

app.get("/*", (req, res) => {
  res.render("error");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
