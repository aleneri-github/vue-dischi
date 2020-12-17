// author: "Bon Jovi"
// genre: "Rock"
// poster: "https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg"
// title: "New Jersey"
// year: "1988"

var root = new Vue(
  {
    el: '#root',
    data: {
      albums: []

    },

    mounted: function() {
      var self = this;

    for (var i = 1; i <= 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((result) => {
        self.albums = result.data.response;
        console.log(self.albums);

      });
    }
  }
})
