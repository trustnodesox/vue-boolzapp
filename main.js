var app = new Vue({
  el: '#root',
  data: {
    index: 0,
    contacts: contacts,
    message: '',
    search: '',
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
      const contattoAttivo = this.index
      const date = dayjs().format('DD/MM/YYYY HH:mm:ss')
      const message = {
        date,
        text: this.message,
        status: 'sent'
      }
      this.contacts[contattoAttivo].messages.push(message);
      this.message = '';
      setTimeout(() => {
        const date = dayjs().format('DD/MM/YYYY HH:mm:ss')
        const message = {
          date,
          text: 'Ciao bello',
          status: 'received'
        }
        this.contacts[contattoAttivo].messages.push(message);
      }, 1000)
    }
  }
});
