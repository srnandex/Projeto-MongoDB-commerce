db.resumoProdutos.insertOne({ franquia: "McDonalds", totalProdutos: 5 });
db.resumoProdutos.findOne({ franquia: "McDonalds" }, { _id: 0 });