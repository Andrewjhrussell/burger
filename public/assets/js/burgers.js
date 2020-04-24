$(".devoure").on("click",function () {
  const id = $(this).val()
  $.ajax("/api/burgers/" + id, {
    type: "PUT"
  }).then(res=>location.reload())
});

$(".create-form").submit(function(){
  const burgerName = $("#ca").val()
  $.ajax("/api/burgers", {
    type: "POST",
    data: {name : burgerName}
  }).then(res=>location.reload())
})