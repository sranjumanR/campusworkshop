$('#edit-task-btn').click(function () {
    const edit = $(this);
    const id = edit.data('id');
  
    // Retrieve the existing content from the database using a SELECT statement
    $.ajax({
      type: 'GET',
      url: '/get-content/' + id,
      success: function (res) {
        // Display the existing content in a form that allows the user to make changes
        $('#edit-modal').find('.form-control').val(res.content);
      },
      error: function () {
        console.log('Error');
      }
    });
  });
  
  // Accept the changes made by the user and update the database using an AJAX request with a POST or PUT method
  $('#edit-task-btn').click(function () {
    const tID = $('#task-form-display').attr('taskID');
    const content = $('#edit-modal').find('.form-control').val();
  
    $.ajax({
      type: 'PUT',
      url: '/update/' + tID,
      contentType: 'application/json;charset=UTF-8',
      data: JSON.stringify({
        'content': content
      }),
      success: function (res) {
        console.log(res.response);
        location.reload();
      },
      error: function () {
        console.log('Error');
      }
    });
  });
  
