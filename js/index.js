$( document ).ready(function() {
  $(".down-arrow").on("click", function(){
    location.href = $(this).("attr.next");
  });
});
