function myFunction() {
  var person = prompt("Please enter your name", "");
    if (person != null) {
      document.getElementById("demo").innerHTML = person + "! Ты - мухожук!";
      document.getElementById("hello").style.visibility="hidden";
      document.getElementById("background").style.visibility="visible";
      alert(person + "! Ты - мухожук!");
      }
  }