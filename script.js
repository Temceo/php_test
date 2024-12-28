function post() {
  const name = $("#name").val();
  const age = $("#age").val();
  console.log(name, age);

  $.post(
    "page.php",
    {
      postname: name,
      postage: age,
    },
    function (data) {
      $("#result").html(data);
    }
  );
}
