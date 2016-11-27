
var newYear = new Date();
newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1);
$('#defaultCountdown').countdown({until: newYear});

$('#removeCountdown').click(function() {
    var destroy = $(this).text() === 'Remove';
    $(this).text(destroy ? 'Re-attach' : 'Remove');
    $('#defaultCountdown').countdown(destroy ? 'destroy' : {until: newYear});
});

$('#clock').countdown({until: liftoffTime});
