// today's date at the top
var todayDate = moment().format('dddd, MMM Do YYYY')
$('#currentDay').html(todayDate)

//save button to local storage 
$(document).ready(function() {
    
    $('.saveBtn').on('click', function () {

        var text = $(this).siblings('.description').val()
        var time = $(this).parent().attr('id')

        localStorage.setItem(time, text)
    })
})