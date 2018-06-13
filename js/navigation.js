Vue.use(VueSmoothScroll);
var navigation = new Vue({
  el: '#header',
  data: {
    showMenu: false,
    menuItems: [
      {name: 'rólam', url: '#about'},
      {name: 'táncórák', url: '#classes'},
      {name: 'workshopok', url: '#workshop'},
      {name: 'előadások', url: '#performance'},
      {name: 'kapcsolat', url: '#contact'}
    ],
    collapseNavbar: {
      collapse: false,
      open: false
    },
    scrollState: 0
  },

  methods: {
    scrollDetect: function scrollDetect(home, down, up) {
      // Current scroll position
      var currentScroll = this.scrollTop();
      if (this.scrollTop() === 0) {
        home();
      } else if (currentScroll > this.scrollState) {
        down();
      } else {
        up();
      }
      // Set previous scroll position
      this.scrollState = this.scrollTop();
    },

    // Returns current scroll position
    scrollTop: function scrollTop() {
      return window.scrollY;
    },

    // Called when scroll is in initial position
    scrollHome: function scrollHome() {},

    // Called when scrolled down
    scrollDown: function scrollDown() {
      this.collapseNavbar.collapse = true;
      this.collapseNavbar.open = false;
    },

    // Called when scolled up
    scrollUp: function scrollUp() {
      this.collapseNavbar.collapse = false;
      this.collapseNavbar.open = true;
    }
  },
  created: function created() {
    var _this = this;

    window.addEventListener('scroll', function () {
      _this.scrollDetect(_this.scrollHome, _this.scrollDown, _this.scrollUp);
    });
  }
});
