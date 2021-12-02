//jshint esversion:6

const bodyParser = require("body-parser");
const express = require("express");
const WooCommerceRestApi = require("woocommerce-api");
const axios = require("axios");
const https = require("https");

const app = express();

const WooCommerce = new WooCommerceRestApi({
  url: "https://mi.goldlavender.jp/",
  consumerKey: "ck_8c9f5b33c000f662877d12e43f135b1b332fafc0",
  consumerSecret: "cs_f736863cd099d33fa690ab207b0064301d3353dc",
  version: "wc/v3",
  wpAPI: true,
});

app.get("/products", function (resquest, response) {
  WooCommerce.get("products", function (err, data, res) {
    const productList = JSON.parse(res);
    console.log(productList);
  });
});

app.listen(3800, function () {
  console.log("Server started on port 3800");
});
