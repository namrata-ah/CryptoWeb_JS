function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username !== '' && password !== '') {
      window.location.href = 'home.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
  
  function register() {
    var name = document.getElementById('name').value;
    var username = document.getElementById('regUsername').value;
    var password = document.getElementById('regPassword').value;
    var securityQuestion = document.getElementById('securityQuestion').value;

    if (name !== '' && username !== '' && password !== '' && securityQuestion !== '') {
      window.location.href = 'home.html';
    } else {
      alert('Please fill in all fields to register.');
    }
  }

  function openNav() {
    document.getElementById("sidenav").style.width = "300px";
  }

  function closeNav() {
    document.getElementById("sidenav").style.width = "0px";
  }