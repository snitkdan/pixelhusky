$(function() {

    //Get the form.
    var form = $("#contact-form");

    //Get submit-message div.
    var submitMessage = $('#submit-message');



    $(form).submit(function(event) {
        // Stop the browser from submitting the form
        event.preventDefault();

        //Serialize the form data
        var formData = $(form).serialize();

        //Submit the form using AJAX
        $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function(response) {
                //Make sure the submitMessage div has the 'success' class
                $(submitMessage).removeClass('error');
                $(submitMessage).addClass('success');

                //Set the message text.
                $(submitMessage).text(response);

                //Clear the form.
                $('#name').val('');
                $('#email').val('');
                $('#message').val('');
            })
            .fail(function(data) {
                //Make sure the submitMessage div has the 'error' class
                $(submitMessage).removeClass('success');
                $(submitMessage).addClass('error');

                //Set the message text
                if (data.responseText != '') {
                    $(submitMessage).text(data.responseText);
                } else {
                    $(submitMessage).text("An error occured! Please try again.");
                }

            });
    });
});
