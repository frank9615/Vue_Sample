//utilizzo If

var app = new Vue({
    el: "#app",
    data: {
        product: "Socks",
        image: "../images/chitarra.png",
        inStock: true,
        invetory: 100
    }
})

/* Al posto di usare if per renderizzare gli elementi esiste v-show
che è molto più efficente

Esempio
<p v-show="inStock"> In Stock </p>

Questo resta all'interno della pagina html ma con la proprietà
<p style="display: none";"> In Stock </p>
*/


