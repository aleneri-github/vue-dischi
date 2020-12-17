var root = new Vue(
  {
    el: '#root',
    data: {
      albums: [],
      selected: 'A',
    options: [
      { text: 'Rock', value: 'A' },
      { text: 'Pop', value: 'B' },
      { text: 'Jazz', value: 'C' },
      { text: 'Metal', value: 'D' }
    ]

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
  },

  methods: {

  }
})
