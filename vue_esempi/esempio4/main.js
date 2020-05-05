var app = new Vue({
    el: "#app",
    data: {
        product: "Calze",
        image: "../images/chitarra.png",
        inStock: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variations: [
            {
                variantId: 2234,
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ]
    }
})