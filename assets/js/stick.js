document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    // Scroll event listener
    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            navbar.classList.add("fixed","top-0","left-0","z-30","bg-white",'w-full',"py-4","px-6", "sm:px-8", "md:px-14", "xl:px-24","shadow-lg"); // Add 'fixed' class when scrolling
        } else {
            navbar.classList.remove("fixed","top-0","left-0","z-30","bg-white",'w-full',"py-4","px-6", "sm:px-8", "md:px-14", "xl:px-24","shadow-lg"); // Remove 'fixed' class when at the top
        }
    });
});