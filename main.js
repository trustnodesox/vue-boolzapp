var app = new Vue({
  el: '#root',
  data: {
    index: 0,
    contacts: contacts,
    message: ''
  },
  methods: {
    ultimoAccesso: function(index){
      const messages = this.contacts[index].messages;
      const lastMessage = messages.length - 1;

      return messages[lastMessage].date
    },
    getTime: function(date) {
      let datetime = new Date(date);
      let hours = datetime.getHours();
      let minutes = datetime.getMinutes();
      return `${hours}:${minutes}`;
    },
    invia: function(){
      const date = dayjs().format('DD/MM/YYYY HH:mm:ss')
      const message = {
        date,
        text: this.message,
        status: 'sent'
      }
      this.contacts[this.index].messages.push(message);
      this.message = ''
    }
  }
});
