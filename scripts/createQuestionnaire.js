$(document).ready( function() {
  $(document).on('change', '.imgUploadButton :file', function() {
  var input = $(this),
  label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
  input.trigger('fileselect', [label]);
  });

  $('.imgUploadButton :file').on('fileselect', function(event, label) {

  var input = $(this).parents('.inputGroup').find(':text'),
  log = label;

  if( input.length ) {
  input.val(log);
  } else {
    if( log ) alert(log);
  }

  });
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#img-upload').attr('src', e.target.result);
      }

      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#imgInp").change(function(){
    readURL(this);
  });
});
