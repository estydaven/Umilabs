$(document).ready(function() {
    $('.form').validate({
      rules: {		
        name: {
          required: true
        },
        tel:{
          number:true
        }
      },
      messages: {
        name: {
          required: 'Поле "Фамилия и Имя" обязательно к заполнению',
          minlength: 'Введите не менее 2-х символов в поле "Имя"'
        },
        email: {
          required: 'Поле "Email" обязательно к заполнению',
          email: 'Необходим формат адреса email' 
        },
        tel: {
          required:'Поле "Телефон" обязательно к заполнению',
          number:'Телефон должен быть введен числами'
        }
      }
    });
});