let products = [
    {name:"rose",latinname: "rosa rubigimosa", price:199, category: "flower"},
    {name:"daisy",latinname: "bellis perennis", price:99, category: "flower"},
    {name:"fern",latinname: "polypodiopsida", price:149, category: "green plant"},
    {name:"snake plant",latinname: "sansevieria trifasciata", price:189, category: "green plant"}
];


function createProductEl(product){
    let containerEl = document.getElementById("productContainer");
    let productEl = document.getElementById("div");
    productEl.classlist = "product";

}