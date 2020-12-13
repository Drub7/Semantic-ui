    $('.dropdown')
      .dropdown({
      transition: 'drop',
      clearable: true,
    });
   


    $('.setting.icon').click(function(){
        $('.ui.basic.modal').modal('show');
    });


    $(document).ready(function(){
  // initialize the form an fields
  $('.ui.form')
    .form({
      fields: {
        fileInput:{
          identifier: 'name',
          rules: [
            {
              type : 'empty'
            }
          ]
        }
      }
    });
  }); 

function myOwnClear(){
  $('.ui.form').form('clear');
}
$('.menu .item')
  .tab()
;

$('.menu .item')
  .tab()
;

function btn(){
$('#mybtn').click(function(){
  $('.ui.basic.modal').modal('hide');
});
}
//$('.toggle.button')
  //.on('click', function() {
    //$(this)
      //.nextAll('.checkbox')
        //.checkbox('toggle')
    //;
  //})
//;
$(document).ready(function(){
  $('.ui.checkbox')
  .checkbox();        
});

$('.ui.checkbox')
.checkbox();
;
 // Function to toggle the plus menu into minus  
 function myFunction(x) {  
    x.classList.toggle("cancel icon");  
}  