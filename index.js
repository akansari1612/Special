var love = setInterval(function () {
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;
    $(".bg_heart").append(
      "<div class='heart' style='width:" +
        r_size +
        "px;height:" +
        r_size +
        "px;left:" +
        r_left +
        "%;background:rgba(255," +
        (r_bg - 25) +
        "," +
        r_bg +
        ",1);-webkit-animation:love " +
        r_time +
        "s ease;-moz-animation:love " +
        r_time +
        "s ease;-ms-animation:love " +
        r_time +
        "s ease;animation:love " +
        r_time +
        "s ease'></div>"
    );
  
    $(".bg_heart").append(
      "<div class='heart' style='width:" +
        (r_size - 10) +
        "px;height:" +
        (r_size - 10) +
        "px;left:" +
        (r_left + r_num) +
        "%;background:rgba(255," +
        (r_bg - 25) +
        "," +
        (r_bg + 25) +
        ",1);-webkit-animation:love " +
        (r_time + 5) +
        "s ease;-moz-animation:love " +
        (r_time + 5) +
        "s ease;-ms-animation:love " +
        (r_time + 5) +
        "s ease;animation:love " +
        (r_time + 5) +
        "s ease'></div>"
    );
  }, 500);
  
  var i = 0;
  var txt1 =
    "Assalam Walaikum Minaz Bebu.....!  <<               Now I wan't to say something special to you. <<<                So , Please read everything carefully...!                                                                           > You are very special to me and I am lucky to have you in my life. < I fell in love with you the day we connected.  <<                  As the days goes < you get closer to me....! <<                           I can't explain my feelings , your thoughts always resonates inside my mind...!                                                     > Everything about you is always intresting for me...!                     << I am afraid to lose you and I want you in my life ...!                                                     > I Love my Parents so much than anything else in this world....!                    << Now You are the only person  whom I love equally with my parents....!                                                             >Will You Marry Me <Minaz.....! |                  << !! I LOVE YOU !!                  <<<< Tu Hai Toh Mujhe Fir Aur Kya Chahiye ...!";
  var speed = 60;
  typeWriter();
  function typeWriter() {
    if (i < txt1.length) {
      if (txt1.charAt(i) == "<")
        document.getElementById("text1").innerHTML += "</br>";
      else if (txt1.charAt(i) == ">")
        document.getElementById("text1").innerHTML = "";
      else if (txt1.charAt(i) == "|") {
        $(".bg_heart").css(
          "background-image",
          "url('./pic.jpg')"
        );
      } else document.getElementById("text1").innerHTML += txt1.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  
