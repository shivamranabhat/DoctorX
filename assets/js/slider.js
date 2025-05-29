  $(".doctor-carousel").owlCarousel({
        items: 3.5,
        margin:30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: false,
        dots: false,
        responsive: {
            // For large screens (desktop)
            1200: {
                items: 3.7, // 3.5 items on large screens
            },
            // For medium screens (tablets)
            768: {
                items: 2.5, // 3 items on medium screens
            },
            480: {
                items: 1.2, // 1 and 20% items on medium screens
            },
            // For small screens (mobile)
            0: {
                items: 1, // 1 item on small screens
            }
        }
    });