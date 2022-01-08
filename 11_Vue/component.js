var app = new Vue({
    el: '#eingabe',
    data: {
      message: "",
      character: 0,
      space: 0,
      word:0
    },
    methods: {
      charCount: function(){

        this.character = this.message.length;
        this.space= (this.message.split(" ").length-1);
        this.word=this.space;

      }
    }
  })