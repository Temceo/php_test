$("#btnTimeZone").on("click", () => {
  const latitude = $("#lat").val();
  const longitude = $("#lng").val();
  // console.log(latitude, longitude);

  if (latitude === "" || longitude === "") {
    return false;
  }

  // $.ajax({
  //   url: "libs/php/getTimeZone.php",
  //   type: "POST",
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //   },
  //   data: {
  //     lat: latitude,
  //     lng: longitude,
  //   },
  //   success: function (response) {
  //     console.log("Response:", response);
  //   },
  //   error: function (xhr, status, error) {
  //     console.error("Error:", error);
  //   },
  // });

  $.ajax({
    url: "libs/php/getTimeZone.php",
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
