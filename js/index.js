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
    element: $('#content')[0],
    handler: function() {
      // console.log('torso waypoint triggered');
      $('#sidebar').addClass('menu-fixed');
    }
  })

// Add a waypoint to the header section and make it so the sidebar no longer sticks to the side of the page when you scroll past the "Waypoint". Remove the class that makes it have a fixed position.
  var unStickySidebar = new Waypoint({
    element: $('#phoneWaypoint'),
    handler: function() {
      // console.log('header waypoint triggered');
      $('#sidebar').removeClass('menu-fixed');
    },
    offset: 'bottom-in-view'
  })

// Use waypoints to detect when you're in a new section. As you enter a new section in page content, it should be highlighted on the sidebar.
// TO DO: Find a way to consolidate these waypoints. There should be a way to combine the way I'm calling elements since the add and remove class actions are basically the same every time.
  var loremDolorDown = new Waypoint({
    element: $('#lorem-dolor')[0],
    handler: function(down) {
      $('#sidebar .active').removeClass('active');
      $('#sidebar .lorem-dolor').addClass('active');
    }
  })

  var loremDolorUp = new Waypoint({
    element: $('#lorem-dolor h2')[0],
    handler: function(up) {
      $('#sidebar .active').removeClass('active');
      $('#sidebar .lorem-dolor').addClass('active');
    }
  })

  var gravidaDown = new Waypoint({
    element: $('#gravida')[0],
    handler: function(down) {
      $('#sidebar .active').removeClass('active');
      $('#sidebar .gravida').addClass('active');
    }
  })

  var gravidaUp = new Waypoint({
    element: $('#gravida h2')[0],
    handler: function(up) {
      $('#sidebar .active').removeClass('active');
      $('#sidebar .gravida').addClass('active');
    }
  })

  var utSagittisDown = new Waypoint({
    element: $('#ut-sagittis')[0],
    handler: function(down) {
      $('#sidebar .active').removeClass('active');
      $('#sidebar .ut-sagittis').addClass('active');
    }
  })

  var utSagittisUp = new Waypoint({
    element: $('#ut-sagittis h2')[0],
    handler: function(up) {
      $('#sidebar .active').removeClass('active');
      $('#sidebar .ut-sagittis').addClass('active');
    }
  })

  var signUpDown = new Waypoint({
    element: $('#sign-up')[0],
    handler: function(down) {
      $('#sidebar .active').removeClass('active');
      $('#sidebar .sign-up').addClass('active');
    }
  })

  var signUpUp = new Waypoint({
    element: $('#sign-up h2')[0],
    handler: function(up) {
      $('#sidebar .active').removeClass('active');
      $('#sidebar .sign-up').addClass('active');
    }
  })

  var velBibendumDown = new Waypoint({
    element: $('#vel-bibendum')[0],
    handler: function(down) {
      $('#sidebar .active').removeClass('active');
      $('#sidebar .vel-bibendum').addClass('active');
    }
  })

  var velBibendumUp = new Waypoint({
    element: $('#vel-bibendum h2')[0],
    handler: function(up) {
      $('#sidebar .active').removeClass('active');
      $('#sidebar .vel-bibendum').addClass('active');
    }
  })

// funtion to scrollto the correct section on the sidebar when you click on it.
  $("#sidebar a").on("click", function(){
    var section = $(this).attr("href");
    $(window).scrollTo(section, {duration:800});
    return false;
  });

// When you enter an email, make sure that it is a valid email, and upon submit, show the user a message that the email has successfully been saved.
  function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
  }

  $("#form").on("click", ".submit-email-btn", function(){
    event.preventDefault();
    $("#result").text("");
    var email = $("#email").val();
    if (validateEmail(email)) {
      $("form").css("visibility", "hidden");
      $(".email-message").css("visibility", "visible");
      $(".email-message").css("background-color", "#19b596");
      $("#result").text("Thank you for signing up! " + email + " is valid.");
      $("#result").css("color", "white");
    } else {
      $(".email-message").css("visibility", "visible");
      $("#result").text(email + " is not valid.");
      $("#result").css("color", "white");
    }
    return false;
  });

});
