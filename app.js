$(document).ready(function () {
  //   console.log("hello");
  var currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
  //   console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
  $("#currentDate").text(currentDate);

  $("#btnSubmit6").on("click", function () {
    var userText = $(textInput6).val();
    localStorage.setItem("data6", JSON.stringify({ task: userText }));
    render6Data();
  });

  $("#btnSubmit7").on("click", function () {
    var userText = $(textInput7).val();
    localStorage.setItem("data7", JSON.stringify({ task: userText }));
    render7Data();
  });

  render6Data();
  render7Data();

  function render6Data() {
    var item = JSON.parse(localStorage.getItem("data6"));
    var currentHour = moment().format("h");

    if (item != null) {
      $("textInput6").val(item.task);
    }
  }

  function render7Data() {
    var item = JSON.parse(localStorage.getItem("data7"));
    if (item != null) {
      $("textInput7").val(item.task);
    }
  }
});
