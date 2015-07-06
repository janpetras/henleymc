(function() {
  $('#pb_contact_form_contact').validate();

  submitPBContactForm = function() {
    if(!$('#pb_contact_name').val().length || !$('#pb_contact_email').val().length) {
      return;
    }

    $('#pb_contact_submit_contact').prop('disabled', true);
    $('#pb_contact_spinner').show();

    var postData = {
      name: $('#pb_contact_name').val(),
      course: $('#pb_contact_course').val(),
      company: $('#pb_contact_company').val(),
      address: $('#pb_contact_address').val(),
      phone: $('#pb_contact_phone').val(),
      email: $('#pb_contact_email').val(),
      comment: $('#pb_contact_comment').val()
    }

    $.post('/api/contact/pb_contact_submit_contact', JSON.stringify(postData), function(result) {
      if(result.code > 1) {
        $('#pb_contact_spinner').hide();
        $('#pb_contact_submit_contact').prop('disabled', false)
                               .removeClass('btn-primary')
                               .addClass('btn-danger');
        $('#pb_contact_error').show();
        return;
      }

      $('#pb_contact_submit_contact').removeClass('btn-primary')
                             .addClass('btn-success');
      $('#pb_contact_spinner i').removeClass('fa-circle-o-notch')
                                .removeClass('fa-spin')
                                .addClass('fa-check');
      $('#pb_contact_success').show();
    });
  }
}());