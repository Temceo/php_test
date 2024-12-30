$("#btnTimeZone").on("click", () => {
  const latitude = $("#lat").val();
  const longitude = $("#lng").val();
  // console.log(latitude, longitude);

  if (latitude === "" || longitude === "") {
    return false;
  }

  $.ajax({
    url: "getTimeZone.php",
    type: "POST",
    dataType: "JSON",
    data: {
      lat: latitude,
      lng: longitude,
    },
    success: (result) => {
      console.log(JSON.stringify(result));
      $("#txtContent").html(result["countryName"]);
    },
    error: (xhr, status, error) => {
      console.error(error);
    },
  });
});
