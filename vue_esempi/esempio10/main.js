Vue.component('componente-tabs', {
    template: `
    <div>
        <span class="tab"
        :class="{activeTab: selectedTab ===tab }"
        v-for="(tab, index) in tabs" :key="index" 
        @click="selectedTab=tab">
        {{tab}}
        <span>
    </div>
    `,
    data() {
        return {
            tabs: ['Componente1', 'Componente2'],
            selectedTab: 'Reviews'
        }
    }
})

var app = new Vue({
    el: "#test"
})