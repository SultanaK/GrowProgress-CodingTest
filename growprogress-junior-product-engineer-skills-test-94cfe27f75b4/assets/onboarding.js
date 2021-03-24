// Write your js code here


$(document).ready(function () {
    $("#contact_form").on("submit", function(e) {
        var postData = $(this).serializeArray();
        var formURL = $(this).attr("action");
        $.ajax({
            url: formURL,
            type: "POST",
            data: postData,
            success: function(data, textStatus, jqXHR) {
                $('#contact_dialog .modal-header .modal-title').html("Result");
                $('#contact_dialog .modal-body').html(data);
                $("#submitForm").remove();
            },
            error: function(jqXHR, status, error) {
                console.log(status + ": " + error);
            }
        });
        e.preventDefault();
    });
     
    $("#submitForm").on('click', function() {
        $("#contact_form").submit();
    });
});

//driver.js Popover

const driver = new Driver();
driver.highlight({
  element: '#sidebar-filters',
  popover: {
    title: 'Title for the Popover',
    description: 'Description for it',
  }
});
driver.start();