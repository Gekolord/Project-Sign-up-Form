let check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('cpassword').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'matching';
      document.getElementById('submit').disabled = false;
      document.getElementById('cpassword').classList.remove("wrong");
      document.getElementById('cpassword').classList.add("match");
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'not matching';
      document.getElementById('submit').disabled = true;
      document.getElementById('cpassword').classList.add("wrong");
      document.getElementById('cpassword').classList.remove("match")
    }
  }
  