//Attenzione che nei templete component deve esserci 
//esattamente un elemento di root 
/*
Props è un attributo custo per passare dati tra i componenti
Per ricevere props, un componente ha bisogno di averlo esplicitato
Nell'html scriveremo 
<product message="hello!"></product>
possiamo creare un oggetto dentro props del tipo 
props: {
    message:{
        type: String, 
        required: true, 
        default: "Hi"
    }
},
*/
Vue.component('product', {
    props: {
        message: {
            type: String,
            required: true,
            default: "Hi"
        }
    },
    template: `<div><h1>{{ message }}</h1></div>`,
    data() {
        return {

        }
    }
})

var app = new Vue({
    el: "#prova"
})


// Un componente può avere anche dei metodi e computed