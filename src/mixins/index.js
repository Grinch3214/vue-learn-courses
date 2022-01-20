const myMixin = {
    created: function() {
        this.hello()
        console.log('Hello')
    },
    methods: {
        hello() {
            console.log('from mixin')
        }
    }
}

export default myMixin