// tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


/* topbar date */
var d = new Date();
var hours = d.getHours();
var minutes = d.getMinutes();
var minutes = minutes < 10 ? '0' + minutes : minutes;
var ampm = hours >= 12 ? 'م' : 'ص';

hours >= 12 ? 'pm' : 'am';

var month = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
var day = ['السبت', 'الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'];

var time = d.getHours() + 1 + ":" + minutes;
var date = day[d.getDay() + 1] + " " + d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear() + '  |   بتوقيت الرياض  ' + " " + time + " " + ampm;

$('.topbar .date').text(date);


/* increase decrease font size */
$("#increaseFont").click(function () {
    if ($('body').css("font-size") < "20px") {
        $('body').css("font-size", "+=2px")
    } else {
        $(this).prop("disabled", true)
    }
})

$("#decreaseFont").click(function () {
    if ($('body').css("font-size") > "12px") {
        $('body').css("font-size", "-=2px")
    } else {
        $(this).prop("disabled", true)
    }
})

$("#origFont").click(function () {
    $('body').css("font-size", "16px")
    $("#increaseFont, #decreaseFont").prop("disabled", false)
})


/* custom select */
$('select').each(function () {
    var $this = $(this),
        numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0;i < numberOfOptions;i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function () {
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
    });

    $(document).click(function () {
        $styledSelect.removeClass('active');
        $list.hide();
    });
});


/* search branches */
$("#searchBranches").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#branchesList li").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});

$("#branchesList .dropdown-item").on("click", function () {
    var value = $(this).val();
    $("#searchBranches").val(value);
    $("#branchesList, #searchBranches").removeClass("show")
});


// Scroll to top button appear
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        $('.scroll-to-top').fadeIn();
    } else {
        $('.scroll-to-top').fadeOut();
    }
});

$('.scroll-to-top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});


// rate
$('.modal.rate textarea').hide();
$('.rate-wrap input').click(function (e) {
    alert(e.target.value);
    $('.modal.rate textarea').show();
    $("#rateBtn").prop('disabled', false)
})