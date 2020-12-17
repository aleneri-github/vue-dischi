var root = new Vue(
  {
    el: '#root',
    data: {

    },

    mounted: function() {
    for (var i = 1; i <= 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((result) => {
        console.log(result);

      });
    }
  }
})
