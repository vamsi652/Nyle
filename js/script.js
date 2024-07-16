$(document).ready(function () {
    // Open the modal
    $('#contactUsBtn').on('click', function () {
        $('#contact-us-modal').show();
    });

    // Close the modal when the close button is clicked
    $('.close').on('click', function () {
        $('#contact-us-modal').hide();
    });

    // Close the modal when clicking outside of the modal content
    $(window).on('click', function (e) {
        if ($(e.target).is('#contact-us-modal')) {
            $('#contact-us-modal').hide();
        }
    });

    $('#ajaxForm').submit(function (e) {
        e.preventDefault();
        var action = $(this).attr('action');
        $.ajax({
            type: 'POST',
            url: action,
            crossDomain: true,
            data: $(this).serialize(),
            dataType: 'json',
            success: function () {
                alert('An error occurred! Please try again later.');
                $('#contact-us-modal').hide();
                $('#ajaxForm')[0].reset();
            },
            error: function () {
                alert('The form was submitted successfully.');
            }
        });
    });
});
