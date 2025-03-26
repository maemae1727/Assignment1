window.onload = function () {
    const sidebarAd = document.getElementById('sidebarAd');
    const adContent = [
        {
            image: 'assets/sidebar1.png', // Replace with your image path
            text: ''
        },
        {
            image: 'assets/sidebar2.png', // Replace with your image path
            text: ''
        },
        {
            image: 'assets/sidebar3.png', // Replace with your image path
            text: ''
        }
    ];

    let currentAdIndex = 0;

    function showAd(index) {
        const ad = adContent[index];
        sidebarAd.innerHTML = `
            <div class="ad-content" style="opacity: 1;">
                <img src="${ad.image}" alt="Ad Image" style="width: 100%; height: auto;">
                <div class="overlay">${ad.text}</div>
                <div class="ad-info">Angel Mae Galera | 1579941</div>
            </div>
        `;
        sidebarAd.querySelector('.ad-content').style.opacity = 1;
    }

    function cycleAds() {
        sidebarAd.querySelector('.ad-content').style.opacity = 0; // Fade out
        setTimeout(() => {
            currentAdIndex = (currentAdIndex + 1) % adContent.length;
            showAd(currentAdIndex);
        }, 500); // Wait for fade out before showing next ad
    }

    // Show the first ad
    showAd(currentAdIndex);

    // Cycle through ads every 5 seconds
    setInterval(cycleAds, 5000);

    // Click event to open the URL
    sidebarAd.addEventListener('click', function () {
        window.open('https:/www.newzealand.com/nz/', '_blank');
    });

    // Replay button functionality
    document.getElementById('replayButton').addEventListener('click', function () {
        currentAdIndex = 0; // Reset to the first ad
        showAd(currentAdIndex); // Show the first ad
    });
};