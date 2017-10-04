const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

const app2 = new Vue({
  el: '#app2',
  data: {
    message: `You loaded this page on ${new Date().toLocaleString()}`
  }
});

const app3 = new Vue({
  el: '#app3',
  data: {
    bool: true
  }
});

const app4 = new Vue({
  el: '#app4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
});

const app5 = new Vue({
  el: '#app5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

const app6 = new Vue({
  el: '#app6',
  data: {
    message: 'Hello Vue!'
  }
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

const app7 = new Vue({
  el: '#app7',
  data: {
    groceryList: [
      { id: 0, text: 'Eggs' },
      { id: 1, text: 'Bread' },
      { id: 2, text: 'Cheese' }
    ]
  }
});

const app8 = new Vue({
  el: '#app8',
  data: {
    disabled: true
  },
  methods: {
    disableButton: function () {
      this.disabled = !this.disabled;
    }
  }
});

const app9 = new Vue({
  el: '#app9',
  data: {
    message: 'Hello'
  },
  computed: {
    reversed: function () {
      return this.message.split('').reverse().join('');
    }
  }
});

const app10 = new Vue({
  el: '#app10',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = `${val} ${this.lastName}`;
    },
    lastName: function (val) {
      this.fullName = `${this.firstName} ${val}`;
    }
  }
})
