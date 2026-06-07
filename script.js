const noButton = document.getElementById('noBtn');

let hoverCount=0;

noButton.addEventListener('mouseenter', function() {
    hoverCount++;

    if(hoverCount>=5){
        window.location.href="please.html";

    } else{
        // Rip the button out of the layout so it can float freely
        noButton.style.position = 'fixed';

        // Calculate max boundaries
        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;

        // Generate random coordinates
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        // Apply BOTH coordinates with 'px' attached
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';
    }

});