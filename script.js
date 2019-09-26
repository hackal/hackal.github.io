function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

$('.form a').click(function() {
    $('.error').hide()
    var email = $('.form input').val().toLowerCase().trim()

    if (validateEmail(email)) {
        exponea.track('sign_up', {
            email: email
        })
        
        exponea.update({
            email: email
        })

        $('.signup').hide()
        $('.success').show()
    } else {
        $('.error').show()
    }
})