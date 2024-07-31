$(function() {
  // your code here
  const header = $(".accordion-header");
  const btn = $("button");

  header.on("click", function(){
    $(this).next().slideToggle()
  })

  btn.on("click", function(){
    $.ajax({
      url: "https://dummyjson.com/todos",
      type: "GET",
      success: function(response){
        console.log("the response", response.todos)
        const todos = response.todos;
        $.each(todos, function(index, value){
          console.log(index+" : "+value.todo)
          $("ul").append(`<li>${value.todo}</li>`)
        })
      },
      error: function(error){
        console.error("Error message", error)
      }
    })
  })
})