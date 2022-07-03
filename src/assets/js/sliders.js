$('.owl-products').owlCarousel({
    nav: true,
    loop: true,
    rtl: true,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: false,
    navText: ["&rarr;", "&larr;"],
    slideBy: 3,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
})

$('.owl-stats').owlCarousel({
    nav: true,
    loop: true,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 2000,
    rtl: true,
    dots: false,
    navText: ["&rarr;", "&larr;"],
    slideBy: 1,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})

$('.owl-news').owlCarousel({
    nav: true,
    loop: true,
    rtl: true,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    navText: ["&rarr;", "&larr;"],
    slideBy: 3,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
})
