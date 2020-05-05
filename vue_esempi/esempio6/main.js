var app = new Vue({
    el: "#test",
    data: {
        brand: "Apple",
        prodotto: "Auricolari",
        selected: 0,
        cart: 0,
        prodotti: [
            {
                id: 1,
                nome: "Apple",
                costo: 500,
                color: "white",
                quantity: 0
            },
            {
                id: 2,
                nome: "Samsung",
                costo: 400,
                color: "blue",
                quantity: 50
            },
            {
                id: 3,
                nome: "Nokia",
                costo: 300,
                color: "green",
                quantity: 10
            }

        ]
    },
    methods: {
        update: function (index) {
            this.selected = index;
            console.log(this.selected);
        },
        addToCart() {
            this.cart++;
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.prodotto
        },
        element() {
            return this.prodotti[this.selected].nome
        },
        instock() {
            return this.prodotti[this.selected].quantity
        }
    }
})