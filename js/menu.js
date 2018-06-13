Vue.use(VueSmoothScroll);
var menu = new Vue({
  el: '#navbar',
  data: {
    showMenu: false,
    menuItems: [
      {name: 'rólam', url: '#about'},
      {name: 'táncórák', url: '#classes'},
      {name: 'workshopok', url: '#workshop'},
      {name: 'előadások', url: '#performance'},
      {name: 'kapcsolat', url: '#contact'}
    ]
  }
});
