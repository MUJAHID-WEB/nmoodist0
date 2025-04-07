if (!window.myScriptLoaded) {
    // Set the flag to true, so it won't run again
    window.myScriptLoaded = true;

    // debug
    console.log("animation.js loaded from the variables template");

    // Function to handle the animation when an element enters the viewport
    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('slide-up')) {
                    entry.target.classList.add('animate');
                } else if (entry.target.classList.contains('feature-animation')) {
                    entry.target.classList.add('animate-feature');
                } else if (entry.target.classList.contains('text-left-animation')) {
                    entry.target.classList.add('animate-text-left');
                } else if (entry.target.classList.contains('text-right-animation')) {
                    entry.target.classList.add('animate-text-right');
                } else if (entry.target.classList.contains('pricings')) {
                    entry.target.classList.add('animate-pricing');
                } else if (entry.target.classList.contains('footer-logo')) {
                    entry.target.classList.add('animate-footer');
                } else if (entry.target.classList.contains('languages')) {
                    if (entry.intersectionRatio > 0) {
                        entry.target.classList.add("visible");
                    } else {
                        entry.target.classList.remove("visible");
                    }
                } else if (entry.target.classList.contains('about-listing-animation')) {
                    entry.target.classList.add('animate-about-listing');
                } else if (entry.target.classList.contains('courses-animation')) {
                    entry.target.classList.add('animate-courses');
                }


                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }

// Create an Intersection Observer instance
    const observer = new IntersectionObserver(handleIntersection, {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin around the viewport
        threshold: 0.2, // Trigger animation when 50% of the element is visible
    });

// Get all elements with the slide-up class
    const slideUpElements = document.querySelectorAll('.slide-up');

// Observe each element to trigger the animation
    slideUpElements.forEach((element) => {
        observer.observe(element);
    });

// Get all elements with the slide-up class
    const featureElements = document.querySelectorAll('.feature-animation');

// Observe each element to trigger the animation
    featureElements.forEach((element) => {
        observer.observe(element);
    });

// Get all elements with the slide-up class
    const textLeftElements = document.querySelectorAll('.text-left-animation');

// Observe each element to trigger the animation
    textLeftElements.forEach((element) => {
        observer.observe(element);
    });

// Get all elements with the slide-up class
    const textRightElements = document.querySelectorAll('.text-right-animation');

// Observe each element to trigger the animation
    textRightElements.forEach((element) => {
        observer.observe(element);
    });

    const pricingElements = document.querySelectorAll('.pricings');

// Observe each element to trigger the animation
    pricingElements.forEach((element) => {
        observer.observe(element);
    });

    const footerElements = document.querySelectorAll('.footer-logo');

// Observe each element to trigger the animation
    footerElements.forEach((element) => {
        observer.observe(element);
    });

    const languageElement = document.querySelectorAll('.languages');

// Observe each element to trigger the animation
    languageElement.forEach((element) => {
        observer.observe(element);
    });

    const aboutListingElement = document.querySelectorAll('.about-listing-animation');

// Observe each element to trigger the animation
    aboutListingElement.forEach((element) => {
        observer.observe(element);
    });

    const coursesElement = document.querySelectorAll('.courses-animation');

// Observe each element to trigger the animation
    coursesElement.forEach((element) => {
        observer.observe(element);
    });
}
