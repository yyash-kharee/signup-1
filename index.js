var click="business";
$(document).ready(function(){
    $(".consumer").click(function(){
      $(".consumer").addClass("yellow");
      $(".business").removeClass("yellow");
      $(".change").text("Sign up with consumer")
      click="consumer";
    });
  });
  $(document).ready(function(){
    $(".business").click(function(){
      $(".business").addClass("yellow");
      $(".consumer").removeClass("yellow");
      $(".change").text("Sign up with Business")
    });
    click="business";
  });  
  