// Write your js code here
var $ = jQuery.noConflict();
$(document).ready(function() {
	$('#contact_form').on('submit', function(e) {
		var postData = $(this).serializeArray();
		var formURL = $(this).attr('action');
		$.ajax({
			url: formURL,
			type: 'POST',
			data: postData,
			success: function(data, textStatus, jqXHR) {
				$('#contact_dialog .modal-header .modal-title').html('Result');
				$('#contact_dialog .modal-body').html(data);
				$('#submitForm').remove();
			},
			error: function(jqXHR, status, error) {
				console.log(status + ': ' + error);
			},
		});
		e.preventDefault();
	});

	$('#submitForm').on('click', function() {
		$('#contact_form').submit();
	});
});

//driver.js Popover

const driver = new Driver();
 driver.defineSteps([
  {
    element: '#sidebar-content',
    popover: {
    title: 'Sidebar',
    description: 'Select  your option',
  }
    
  },
  {
    element: '#widget-1',
    popover: {
      title: 'Favorite Ice Cream',
      description: 'Represent Votes for Icecream',
      position: 'top'
    }
  },
  {
    element: '#widget-2',
    popover: {
      title: 'Favorite Letter in Alphabet',
      description: 'letter representation',
      position: 'right'
    }
  },
  {
    element: '#widget-3',
    popover: {
      title: 'Title on Popover',
      description: 'Body of the popover',
      position: 'right'
    }
  },
]);

/* driver.highlight({
  element: '#sidebar-content',
  popover: {
    title: 'Sidebar',
    description: 'Select  your option',
  }
}); */
driver.start(); 

