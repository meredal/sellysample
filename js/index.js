$( document ).ready(function() {
  $(".down-arrow").on("click", function(){
      // <a href="#gravida" class="down-arrow" next="gravida">
      //    <img src="/images/content-arrow.png" alt="down" class="arrow-image">
      // </a>
      // <section id="gravida"></section>

    var nextSectionId = $(this).attr("next");
    var nextSection = $('#' + nextSectionId);
      // next section is now returned with "#" in front of it to signal an id selector

    $(window).scrollTo(nextSection, {duration:800});
      // scrollTo the next section on the page, duration of 800ms

    return false;
  });
});
