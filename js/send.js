$(document).ready(function() {

    $("#contacts_form, #Modal_form").submit(function() {

        $.ajax({

         type: "POST",
         url: "mail.php",
         data: $(this).serialize()
      
        }).done(function() {
            $(this).find("input").val("");

            $(".overlay, #Modal_mini").fadeIn('slow');
            $(" #Modal").fadeOut('slow'); 

            $("#contacts_form, #Modal_form").trigger("reset");
});
    return false;
  });
});