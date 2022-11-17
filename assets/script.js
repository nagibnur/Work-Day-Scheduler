const currentDay = document.querySelector("#currentDay");
const textarea = document.querySelectorAll(".description");
const save_button = document.querySelector(".saveBtn");
const hour9 = document.querySelector("#hour-09");

const interval = setInterval(() => {
  const date = moment().format("MMMM Do YYYY, h:mm:ss a");
  currentDay.textContent = date;
}, 1000);

save_button.addEventListener("click", function () {
  var text = textarea.value;
  var time = date;
  localStorage.setItem(time, text);
});

function timeTracker() {
  const timeNow = moment().hour();
  $(".description").each(function (calender) {
    if (timeNow > calender + 9) {
      $(this).addClass("past");
    }
    if (timeNow == calender + 9) {
      $(this).addClass("present");
    }
    if (timeNow < calender + 9) {
      $(this).addClass("future");
    }
  });
}

$("#hour-09 .description").val(localStorage.getItem("hour-09"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-01 .description").val(localStorage.getItem("hour-01"));
$("#hour-02 .description").val(localStorage.getItem("hour-02"));
$("#hour-03 .description").val(localStorage.getItem("hour-03"));
$("#hour-04 .description").val(localStorage.getItem("hour-04"));
$("#hour-05 .description").val(localStorage.getItem("hour-05"));

timeTracker();
