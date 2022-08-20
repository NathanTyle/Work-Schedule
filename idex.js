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
// color changing function based on time of day
    function timeTracker () {

        var timeNow = moment().hour()

        $('.time-block').each(function () {
            var blockTime =parseInt($(this).attr('id').split('hour')[1])

            if(blockTime < timeNow) {
                $(this).removeClass('future')
                $(this).removeClass('present')
                $(this).addClass('past')
            } 
            else if (blockTime === timeNow){
                $(this).removeClass('past')
                $(this).removeClass('future')
                $(this).addClass('present')
            } 
            else {
                $(this).removeClass('present')
                $(this).removeClass('past')
                $(this).addClass('future')
            }
        })
    }
// js connection to the html id
    $('#8am .description').val(localStorage.getItem('8am'))
    $('#9am .description').val(localStorage.getItem('9am'))
    $('#10am .description').val(localStorage.getItem('10am'))
    $('#11am .description').val(localStorage.getItem('11am'))
    $('#12pm .description').val(localStorage.getItem('12pm'))
    $('#13pm .description').val(localStorage.getItem('13pm'))
    $('#14pm .description').val(localStorage.getItem('14pm'))
    $('#15pm .description').val(localStorage.getItem('15pm'))
    $('#16pm .description').val(localStorage.getItem('16pm'))
    $('#17pm .description').val(localStorage.getItem('17pm'))
   
    timeTracker ()
})