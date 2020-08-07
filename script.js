document.addEventListener("DOMContentLoaded", function () {
    // for (var i = 0; i < 9; i++) {
    //     $(".container").append("<tr>");
    // }

    // $("tr").append("<td>", "<textarea>", "<button>");   

    function toDo() {
        
        var todayIs = document.querySelector("#currentDay");
        var currentTime = moment().format("dddd, MMMM Do hh:mm:ss A")
        $("#currentDay").append(currentTime);

        for (var i = 0; i < 9; i++) {
            var hours = moment().hours(i + 9).format("h A");
            var newRow = document.createElement("tr");
            var newHour = document.createElement("td");
            var newToDo = document.createElement("textarea");
            var newBtn = document.createElement("button");

            newRow.setAttribute("class", "classRow");
            newRow.setAttribute("id", "row");

            newHour.setAttribute("class", "classHour");
            newHour.setAttribute("id", "hour");

            newHour.textContent = hours
            console.log(hours)

            newToDo.setAttribute("class", "inputClass");
            newToDo.setAttribute("id", "inputID-" + i);
            newBtn.setAttribute("class", "fas fa-save save-btn");

            newToDo.value = localStorage.getItem("inputID-" + i);

            newRow.append(newHour, newToDo, newBtn);
            $(".container").append(newRow);
        }

        // $("textarea").each(function (pastTodo) {

        //     if (currentTime = newHour.textContent) {
        //         $("textarea").css("background","red")
        //     }
            
        // })
         // jquery each method - its own function
    };

    $(document).on('click', '.save-btn', function () {

        var userInput = $(this).siblings("textarea").val();
        var currentHour = $(this).siblings("textarea").attr("id");

        localStorage.setItem(currentHour, userInput)
    });


   

    toDo();
   
});