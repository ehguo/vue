const hello = new Vue({
  el: '#hello',
  data: {
    hello: 'Hello World!'
  }
})

const title = new Vue({
  el: '#title',
  data: {
    title: new Date()
  }
})

const conditional = new Vue({
  el: '#conditional',
  data: {
    conditional: true
  }
})
