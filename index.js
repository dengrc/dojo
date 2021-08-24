require(['dojo/parser', 'dojox/mvc/getStateful'], function (parser, getStateful) {
    var stateful =window.stateful= getStateful({
        value: "",
        children: [],
        onClick: function () {
            this.children.push({ text: this.value });
            this.set("value", "")
        }
    });
    
    parser.parse({ propsThis: stateful, noStart: false, template: true });
})