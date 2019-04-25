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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLmZvcm0nKS52YWxpZGF0ZSh7XHJcbiAgICAgIHJ1bGVzOiB7XHRcdFxyXG4gICAgICAgIG5hbWU6IHtcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZWw6e1xyXG4gICAgICAgICAgbnVtYmVyOnRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgbmFtZToge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6ICfQn9C+0LvQtSBcItCk0LDQvNC40LvQuNGPINC4INCY0LzRj1wiINC+0LHRj9C30LDRgtC10LvRjNC90L4g0Log0LfQsNC/0L7Qu9C90LXQvdC40Y4nLFxyXG4gICAgICAgICAgbWlubGVuZ3RoOiAn0JLQstC10LTQuNGC0LUg0L3QtSDQvNC10L3QtdC1IDIt0YUg0YHQuNC80LLQvtC70L7QsiDQsiDQv9C+0LvQtSBcItCY0LzRj1wiJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW1haWw6IHtcclxuICAgICAgICAgIHJlcXVpcmVkOiAn0J/QvtC70LUgXCJFbWFpbFwiINC+0LHRj9C30LDRgtC10LvRjNC90L4g0Log0LfQsNC/0L7Qu9C90LXQvdC40Y4nLFxyXG4gICAgICAgICAgZW1haWw6ICfQndC10L7QsdGF0L7QtNC40Lwg0YTQvtGA0LzQsNGCINCw0LTRgNC10YHQsCBlbWFpbCcgXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZWw6IHtcclxuICAgICAgICAgIHJlcXVpcmVkOifQn9C+0LvQtSBcItCi0LXQu9C10YTQvtC9XCIg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQuiDQt9Cw0L/QvtC70L3QtdC90LjRjicsXHJcbiAgICAgICAgICBudW1iZXI6J9Ci0LXQu9C10YTQvtC9INC00L7Qu9C20LXQvSDQsdGL0YLRjCDQstCy0LXQtNC10L0g0YfQuNGB0LvQsNC80LgnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxufSk7Il19
