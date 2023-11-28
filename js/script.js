document.addEventListener('DOMContentLoaded', function() {
    const downloadLink = document.getElementById('download-link');
  
    downloadLink.addEventListener('click', function() {
      // Replace 'path_to_your_local_cv.pdf' with the actual path to your local CV file
      const fileUrl = 'CV_FR-Juan-Bastidas_FR.pdf';
  
      const fileName = 'CV_FR-Juan-Bastidas.pdf'; // Change the file name as desired
  
      // Create a link element
      const link = document.createElement('a');
      link.href = fileUrl;
      link.setAttribute('download', fileName);
  
      // Simulate click to initiate download
      link.click();
    });
  });
  


  $(document).ready(function () {
    $('#sendMessage').click(function (e) {
        e.preventDefault();
        
        // Fetch input values
        var fullName = $('#fullName').val();
        var email = $('#email').val();
        var mobileNumber = $('#mobileNumber').val();
        var message = $('#message').val();
        
        // AJAX call to submit form data
        $.ajax({
            url: 'submit_form.php', // Replace with your backend endpoint to handle form submission
            type: 'POST',
            data: {
                fullName: fullName,
                email: email,
                mobileNumber: mobileNumber,
                message: message
            },
            success: function (response) {
                // Handle success (e.g., show success message, clear form, etc.)
                console.log('Form submitted successfully');
            },
            error: function (xhr, status, error) {
                // Handle errors
                console.error('Error:', error);
            }
        });
    });
});