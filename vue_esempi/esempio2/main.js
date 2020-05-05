var app = new Vue({
    el: "#app",
    data: {
        product: "Socks",
        image: "../images/chitarra.png"
    }
})


/*
v-bind binds an attribute to an expression
l'attributo è in questo caso v-bind:src
l'espressione invece è  "image"
SHORTHAND

v-bind può essere scritto al posto di v-bind:src
anche solo come :src
Ci sono altri attributi a cui è possibile fare binding ad esempio

:alt="description"
:href="url"
:title="toolTip"
:class="isActive"
:style="isStyled"
:disabled="isDisabled"
e molti altri
*/