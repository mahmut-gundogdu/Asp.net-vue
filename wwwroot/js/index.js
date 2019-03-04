
Vue.component('feature-list', {
    data: function () {
        return { msg: ['Hello', 'World'] }
    },
    template: `
    <ul> 
        <li v-for="item in msg" >{{item}} </li>
    </ul>
    `
})

Vue.component('feature-list-2', {
    data: function () {
        return { items: ['same', 'same', '...', 'but different'] }
    },
    template: '#feature-list-2'
})

//i think it is best (becasuse it is so simple)
Vue.component('feature-list-3', {
    data: function () {
        return { items: ["i am", "inline template"] }
    }
})


new Vue({
    el: '#app',
    data: {
        msg: 'Hello World'
    }
})
