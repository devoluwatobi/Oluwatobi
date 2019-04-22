
    $menubtn.on('click', toggle); 
    $('.dropdown').click( function() {
        $('.drop-menu').slideToggle(300);
    })
    $close = $('.cancel');
    $contact = $('.contactMe');
    $close.on('click',function () {
     $('.layer').fadeToggle();  
    });
    $contact.on('click',function() {
        $('.layer').fadeToggle();        
    })