// Far comunicare componenti 
Vue.component('product', {
    props: {
        message: {
            type: String,
            default: "Hi"
        },
        premium: {
            type: Boolean,
            default: false
        }
    },
    template: `
        <div>
            <p> {{ isPremium }}</p>
            <h1>{{ message }}</h1>
            <h2>{{ messaggiopersonalizzato }}</h2>
            <input type="button" @click="inc()" value="press me"/>
        </div>
        `,
    data() {
        return {
            messaggiopersonalizzato: "ciao",
            selected: 1
        }
    },
    methods: {
        inc: function () {
            this.$emit('add-to-cart', this.selected)
        }
    },
    computed: {
        isPremium() {
            if (this.premium) {
                return "Utente Premium"
            }
            return "Utente non premium"
        }
    }

})

var app = new Vue({
    el: "#prova",
    data: {
        premium: true,
        cart: [],

    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    }
})


// Un componente può avere anche dei metodi e computed