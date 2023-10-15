$(document).ready(function() {
    // Function to update the visibility of the navigation buttons
    function updateButtons() {
        var current = $('.active'); // The currently displayed image
        var next = current.next('img'); // The next image
        var prev = current.prevAll().not('a').first(); // The previous image

        // If there is a next image, show the "next" button. Otherwise, hide it.
        if(next.length) {
            $('.next').removeClass('hidden');
        } else {
            $('.next').addClass('hidden');
        }

        // If there is a previous image, show the "prev" button. Otherwise, hide it.
        if(prev.length) {
            $('.prev').removeClass('hidden');
        } else {
            $('.prev').addClass('hidden');
        }
    }

    // Event handler for clicking the "next" button
    $('.next').click(function(e) {
        e.preventDefault(); // Prevent the default action of the click event
        var current = $('.active'); // The currently displayed image
        var next = current.next('img'); // The next image

        // If there is a next image, make it the active image and update the buttons and thumbnails
        if(next.length) {
            current.removeClass('active');
            next.addClass('active');
            updateButtons();
            updateThumbnails();
        }
    });

    // Event handler for clicking the "prev" button
    $('.prev').click(function(e) {
        e.preventDefault(); // Prevent the default action of the click event
        var current = $('.active'); // The currently displayed image
        var prev = current.prev('img'); // The previous image

        // If there is a previous image, make it the active image and update the buttons and thumbnails
        if(prev.length) {
            current.removeClass('active');
            prev.addClass('active');
            updateButtons();
            updateThumbnails();
        }
    });

    // Function to update which thumbnail is marked as active
    function updateThumbnails() {
        var current = $('.gallery-image-container .active'); // The currently displayed image
        var index = $('.gallery-image-container img').index(current); // The index of the currently displayed image

        // Remove the "active" class from all thumbnails and add it to the thumbnail corresponding to the currently displayed image
        $('.thumbnail').removeClass('active').eq(index).addClass('active');
    }

    // Call these functions once to initialize the buttons and thumbnails
    updateButtons();
    updateThumbnails();

    // Event handler for clicking a thumbnail
    $('.thumbnail').click(function() {
        var index = $('.thumbnail').index(this); // The index of the clicked thumbnail

        // Remove the "active" class from all images and thumbnails, and add it to the clicked thumbnail and corresponding image
        $('.active').removeClass('active');
        $('.gallery-image-container img').eq(index).addClass('active');
        $(this).addClass('active');

        // Update the visibility of the navigation buttons
        updateButtons();
    });
});