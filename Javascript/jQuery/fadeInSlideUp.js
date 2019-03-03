// Select an Element by ID, hide on load, then slide down, let user read, then slideup after 3 seconds
$('#flashMessage').hide();
$('#flashMessage').slideDown(1000);
$('#flashMessage').delay(3000);
$('#flashMessage').slideUp();


// This is the shorthand way to do the same thing
$('#flashMessage').hide().slideDown(1000).delay(3000).slideUp();
