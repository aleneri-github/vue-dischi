var root = new Vue(
  {
    el: '#root',
    data: {
      albums: [],
      arrayGenre: [],
      selectGenre: ""
    },

    mounted: function() {
      var self = this;

      axios
      .get('https://flynn.boolean.careers/exercises/api/array/music')
      .then(
        (result) => {
        self.albums = result.data.response;
        for (var i = 0; i < self.albums.length; i++) {
          if (!self.arrayGenre.includes(result.data.response[i].genre)) {
            self.arrayGenre.push(result.data.response[i].genre)
            console.log(self.arrayGenre);
          }
        }
      }
    );
  },
})
