//override clicks
$('#sidenav ul li a').click(function(e){
  e.preventDefault();
  $('iframe').attr('src', $(this).attr('href'));
  $('#sidenav ul li a').removeClass('active');
  $(this).addClass('active');
});

$('#sidenav ul li a:first').trigger('click');
