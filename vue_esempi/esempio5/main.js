var app = new Vue({
    el: "#app",
    data: {
        cart: 0,
        image: "../images/chitarra.png",
        variations: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "../images/chitarra.png"
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "../images/chitarra2.png"
            }
        ]
    },
    methods: {
        addToCart: function () {
            this.cart += 1;
        },
        updateProduct: function (variantImage) {
            this.image = variantImage
        }

    }
})


//dato v-on è molto comune si può utilizzare 
// @mouseover="updateProduct(variant.variantImage)"


// I metodi posso essere scritti anche in questo modo 
/*
methods : {
    aggiorna : function (x){
        ...
    },
    aggiorna2(x){  // prende il nome di es6 shortand ma non tutti i browser lo supportano
        ...
    }
}
*/


//Altri eventi sono : 
/*
<form @submit="addtocard">...</form>
<input @keyup.enter = "send">
. enter è chiamato modificatore

*/