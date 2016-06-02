$( document ).ready(function() {
// function to scrollto the next section when clicking on the down-arrow.
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

// Add a waypoint to the page-content section and make it so the sidebar sticks to the side of the page when you scroll past the "Waypoint". Add the class to the sidebar to give it a fixed position.
  var stickySidebar = new Waypoint({
    element: $('#torso')[0],
    handler: function() {
      // console.log('torso waypoint triggered');
      $('#sidebar').addClass('menu-fixed');
    }
  })

// Add a waypoint to the header section and make it so the sidebar no longer sticks to the side of the page when you scroll past the "Waypoint". Remove the class that makes it have a fixed position.
  var unStickySidebar = new Waypoint({
    element: $('#lorem-dolor')[0],
    handler: function() {
      // console.log('header waypoint triggered');
      $('#sidebar').removeClass('menu-fixed');
    },
    offset: 'bottom-in-view'
  })

// Use waypoints to detect when you're in a new section. As you enter a new section in page content, it should be highlighted on the sidebar.
  var loremDolor = new Waypoint({
    element: $('#lorem-dolor')[0],
    handler: function() {
      $('#sidebar .active').removeClass('active');
      $('#sidebar .lorem-dolor').addClass('active');
    }
  })

  var gravida = new Waypoint({
    element: $('#gravida')[0],
    handler: function() {
      $('#sidebar .active').removeClass('active');
      $('#sidebar .gravida').addClass('active');
    }
  })

  var utSagittis = new Waypoint({
    element: $('#ut-sagittis')[0],
    handler: function() {
      $('#sidebar .active').removeClass('active');
      $('#sidebar .ut-sagittis').addClass('active');
    }
  })

  var signUp = new Waypoint({
    element: $('#sign-up')[0],
    handler: function() {
      $('#sidebar .active').removeClass('active');
      $('#sidebar .sign-up').addClass('active');
    }
  })

  var velBibendum = new Waypoint({
    element: $('#vel-bibendum')[0],
    handler: function() {
      $('#sidebar .active').removeClass('active');
      $('#sidebar .vel-bibendum').addClass('active');
    }
  })

});
