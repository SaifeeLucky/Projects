document.addEventListener("DOMContentLoaded",function(){
    gsap.to(".hero-img", {
        yPercent: -60,
        scrollTrigger: {
            trigger: ".hero-section",
            scrub: 1,
            start: "top 20%",
        },
    });

    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".section-header", {
        scrollTrigger: {
            trigger: ".section-header",
            start: "top 100%",
            end: "top 60%",
            scrub: true,
        },
        opacity: 1,
        y: 50,
        duration: 1,
    });
    gsap.from(".work-card", {
        scrollTrigger: {
            trigger: ".work-card",
            start: "top 100%",
            end: "top 60%",
            scrub: true,
            markers: true
        },
        opacity: 1,
        y: 50,
        stagger: 0.3,
        duration: 1,
    });
    window.onscroll = function() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("scrollIndicator").style.width = scrolled + "%";
    };

    

});