$(document).ready(function () {
    $('#myForm input[type="text"]').blur(function () {
        if (!$(this).val()) {
            $(this).addClass("error");
        } else {
            $(this).removeClass("error");
        }
    });
});
function onSubmit() {
    if (!$('#psw').val() && !$('#uname').val()) {
        alert('Enter your username and password !');
    }
    else {
        if (!$('#uname').val()) {
            alert('Enter your username !');
        }
        if (!$('#psw').val()) {
            alert('Enter your password !');
        }
    }
}