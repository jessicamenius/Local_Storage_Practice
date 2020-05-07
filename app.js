$(document).ready(function () {
  //   console.log("hello");

  $("#btnSubmit1").on("click", function () {
    var userText = $(textInput6).val();
    localStorage.setItem("data", JSON.stringify({ task: userText }));

    render6Data();
  });

  function render6Data() {
    var item = JSON.parse(localStorage.getItem("data"));

    $("textInput6").val(item.data);
  }
});
