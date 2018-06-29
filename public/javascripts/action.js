/**
 * Created by hemanthkumar on 22/05/18.
 */
$(document).ready(function($) {
    // Initially all errors are hidden
    $('#name-error').hide();
    $('#name1-error').hide();
    $('#email-error').hide();
    $('#univ-error').hide();
    $('#univ1-error').hide();
    $('#tel-error').hide();
    $('#tel1-error').hide();
    $('#ieeesec-error').hide();
    $('#ieeesec1-error').hide();
    $('#ieeemem-error').hide();
    $('#ieeemem1-error').hide();
    $('#ieeeEvent-error').hide();
    $('#ieeeEvent1-error').hide();
    $('#generalOne-error').hide();
    $('#generalOne1-error').hide();
    $('#generalTwo-error').hide();
    $('#generalTwo1-error').hide();
    $('#session-message').hide();

    $('#ieee-details').hide();
    $('#ieee-radio-1').click(function(){
        $('#ieee-details').show();
    });
    $('#ieee-radio-2').click(function(){
        $('#ieee-details').hide();
    });

//on keyup, start the countdown

    // $('#congress-det-2').css('border', '1px solid red');
});

$(function () {
    var typingTimer;                //timer identifier
    var doneTypingInterval = 500;  //time in ms (5 seconds)

    var isMLChecked = $('#session-radio-3').prop('checked');
    if(isMLChecked){
        $('#session-message').show();
    }

    $('input:radio[name="session"]').change(
        function(){
            var isMLChecked = $('#session-radio-3').prop('checked');
            if(isMLChecked){
                $('#session-message').show();
            }
            else{
                $('#session-message').hide();
            }
        });
    $('#nameInput').keyup(function(){
        $('#name-error').hide();
        $('#name1-error').hide();
        $('#nameInput').css('border', 'none');
        clearTimeout(typingTimer);
        if ($('#nameInput').val()) {
            typingTimer = setTimeout(nameCheck, doneTypingInterval);
        }
        else{
            $('#nameInput').css('border', '1px solid red');
            $('#name-error').show();
        }
    });

//Triggered when countdown is done
    function nameCheck(){
        var nameRegex = /^[ A-Za-z0-9_@."'/#&,/-]*$/;
        var enteredValue = $('#nameInput').val();
        if(enteredValue.length>100){
            $('#nameInput').css('border', '1px solid red');
            $('#name-error').show();
        }
        else if((!nameRegex.test(enteredValue))){
            $('#nameInput').css('border', '1px solid red');
            $('#name1-error').show();
        }

    }

    $('#emailInput').keyup(function(){
        $('#email-error').hide();
        $('#emailInput').css('border', 'none');
        clearTimeout(typingTimer);
        if ($('#emailInput').val()) {
            typingTimer = setTimeout(emailCheck, doneTypingInterval);
        }
        else{
            $('#emailInput').css('border', '1px solid red');
            $('#email-error').show();
        }
    });

//Triggered when countdown is done
    function emailCheck(){
        var email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var enteredValue = $('#emailInput').val();
        if (!email.test(enteredValue)) {
            $('#emailInput').css('border', '1px solid red');
            $('#email-error').show();
        }
    }

    $('#univInput').keyup(function(){
        $('#univ1-error').hide();
        $('#univ-error').hide();
        $('#univInput').css('border', 'none');
        clearTimeout(typingTimer);
        if ($('#univInput').val()) {
            typingTimer = setTimeout(univCheck, doneTypingInterval);
        }
        else{
            $('#univInput').css('border', '1px solid red');
            $('#univ-error').show();
        }
    });

//Triggered when countdown is done
    function univCheck(){
        var univ= /^[ A-Za-z0-9_@."'/#&,/-]*$/;
        var enteredValue = $('#univInput').val();
        if (!univ.test(enteredValue)) {
            $('#univInput').css('border', '1px solid red');
            $('#univ-error').show();
        }
        else if(enteredValue.length>100){
            $('#univInput').css('border', '1px solid red');
            $('#univ1-error').show();
        }
    }

    $('#telInput').keyup(function(){
        $('#tel-error').hide();
        $('#tel1-error').hide();
        $('#telInput').css('border', 'none');
        clearTimeout(typingTimer);
        if ($('#telInput').val()) {
            typingTimer = setTimeout(telCheck, doneTypingInterval);
        }
        else{
            $('#telInput').css('border', '1px solid red');
            $('#tel-error').show();
        }
    });

//Triggered when countdown is done
    function telCheck(){
        var tel= /^[\d -]*/;
        var enteredValue = $('#telInput').val();
        if (!tel.test(enteredValue)) {
            $('#telInput').css('border', '1px solid red');
            $('#tel-error').show();
        }
        else if(enteredValue.length>20){
            $('#telInput').css('border', '1px solid red');
            $('#tel1-error').show();
        }
    }

    $('#ieee-section').keyup(function(){
        $('#ieeesec-error').hide();
        $('#ieeesec1-error').hide();
        $('#ieee-section').css('border', 'none');
        clearTimeout(typingTimer);
        if ($('#ieee-section').val()) {
            typingTimer = setTimeout(ieeesecCheck, doneTypingInterval);
        }
        else{
            $('#ieee-section').css('border', '1px solid red');
            $('#ieeesec-error').show();
        }
    });

//Triggered when countdown is done
    function ieeesecCheck(){
        var ieeesec= /^[ A-Za-z0-9_@."'/#&,/-]*$/;
        var enteredValue = $('#ieee-section').val();
        if (!ieeesec.test(enteredValue)) {
            $('#ieee-section').css('border', '1px solid red');
            $('#ieeesec-error').show();
        }
        else if(enteredValue.length>100){
            $('#ieee-section').css('border', '1px solid red');
            $('#ieeesec1-error').show();
        }
    }

    $('#ieee-membership').keyup(function(){
        $('#ieeemem-error').hide();
        $('#ieeemem1-error').hide();
        $('#ieee-membership').css('border', 'none');
        clearTimeout(typingTimer);
        if ($('#ieee-membership').val()) {
            typingTimer = setTimeout(ieeememCheck, doneTypingInterval);
        }
        else{
            $('#ieee-membership').css('border', '1px solid red');
            $('#ieeemem-error').show();
        }
    });

//Triggered when countdown is done
    function ieeememCheck(){
        var ieeemem= /^[ A-Za-z0-9_@./#&,/-]*$/;
        var enteredValue = $('#ieee-membership').val();
        if (!ieeemem.test(enteredValue)) {
            $('#ieee-membership').css('border', '1px solid red');
            $('#ieeemem-error').show();
        }
        else if(enteredValue.length>25){
            $('#ieee-membership').css('border', '1px solid red');
            $('#ieeemem1-error').show();
        }
    }

    $("#ieee-events").data("oldValue", function() {
        return this.value;
    }).keyup(function() {
        var $this = $(this);
        if (this.value !== $this.data("oldValue")) {
            $('#ieeeEvent-error').hide();
            $('#ieeeEvent1-error').hide();
            $('#ieee-events').css('border', 'none');
            clearTimeout(typingTimer);
            if ($('#ieee-events').val()) {
                typingTimer = setTimeout(ieeeEventCheck, doneTypingInterval);
            }
            else{
                $('#ieee-events').css('border', '1px solid red');
                $('#ieeeEvent-error').show();
            }
        }
    });

//Triggered when countdown is done
    function ieeeEventCheck(){
        var eventRegex = /^[ \nA-Za-z0-9_@."'()/#&,/-]*$/;
        var enteredValue = $('#ieee-events').val();
        if((enteredValue.split(" ").length)>200){
            $('#ieee-events').css('border', '1px solid red');
            $('#ieeeEvent-error').show();
        }
        else if(!eventRegex.test(enteredValue)){
            $('#ieee-events').css('border', '1px solid red');
            $('#ieeeEvent1-error').show();
        }
    }

    $("#congress-det-1").data("oldValue", function() {
        return this.value;
    }).keyup(function() {
        var $this = $(this);
        if (this.value !== $this.data("oldValue")) {
            $('#generalOne-error').hide();
            $('#generalOne1-error').hide();
            $('#congress-det-1').css('border', 'none');
            clearTimeout(typingTimer);
            if ($('#congress-det-1').val()) {
                typingTimer = setTimeout(generalOneCheck, doneTypingInterval);
            }
            else{
                $('#congress-det-1').css('border', '1px solid red');
                $('#generalOne-error').show();
            }
        }
    });

//Triggered when countdown is done
    function generalOneCheck(){
        var generalOneRegex = /^[ \nA-Za-z0-9_@."'()/#&,/-]*$/;
        var enteredValue = $('#congress-det-1').val();
        if((enteredValue.split(" ").length)>200){
            $('#congress-det-1').css('border', '1px solid red');
            $('#generalOne-error').show();
        }
        else if(!generalOneRegex.test(enteredValue)){
            $('#congress-det-1').css('border', '1px solid red');
            $('#generalOne1-error').show();
        }
    }

    $("#congress-det-2").data("oldValue", function() {
        return this.value;
    }).keyup(function() {
        var $this = $(this);
        if (this.value !== $this.data("oldValue")) {
            $('#generalTwo-error').hide();
            $('#generalTwo1-error').hide();
            $('#congress-det-2').css('border', 'none');
            clearTimeout(typingTimer);
            if ($('#congress-det-2').val()) {
                typingTimer = setTimeout(generalTwoCheck, doneTypingInterval);
            }
            else{
                $('#congress-det-2').css('border', '1px solid red');
                $('#generalTwo-error').show();
            }
        }
    });

//Triggered when countdown is done
    function generalTwoCheck(){
        var generalTwoRegex = /^[ \nA-Za-z0-9_@."'()/#&,/-]*$/;
        var enteredValue = $('#congress-det-2').val();
        if((enteredValue.split(" ").length)>200){
            $('#congress-det-2').css('border', '1px solid red');
            $('#generalTwo-error').show();
        }
        else if(!generalTwoRegex.test(enteredValue)){
            $('#congress-det-2').css('border', '1px solid red');
            $('#generalTwo1-error').show();
        }
    }
});