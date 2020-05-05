/*
v-model serve per fare binding
*/
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
            <product-review @reviewSubmitted="addReview"></product-review>
        </div>
        `,
    data() {
        return {
            selected: 1,
            reviews: []
        }
    },
    methods: {
        inc: function () {
            this.$emit('add-to-cart', this.selected)
        },
        addReview(product) {
            this.reviews.push(product)
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


Vue.component('product-review', {
    template: `
        <div>
        <h1>Esempio con un form</h1>
        <form class="review-form" @submit.prevent="onSubmit">
      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name" placeholder="name">
      </p>
      
      <p>
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review" required></textarea>
      </p>
      
      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>
          
      <p>
        <input type="submit" value="Submit">  
      </p>    
    
    </form>
        </div>


    `,
    data() {
        return {
            name: null,
            review: null,
            rating: null
        }
    },
    methods: {
        onSubmit() {
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            this.$emit('reviewSubmitted', productReview)
            this.name = null
            this.review = null
            this.rating = null
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