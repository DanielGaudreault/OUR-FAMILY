// ===== script.js – all interactions =====

// Function to display popup message
function showMessage(platform) {
    Swal.fire({
        title: platform,
        text: 'You clicked on ' + platform,
        icon: 'info',
        confirmButtonText: 'Close'
    });
}

// Function to navigate to home page
function goToHomePage() {
    window.location.href = 'index.html';
}

// Function to toggle side tab visibility
function toggleSideTab() {
    var sideTab = document.getElementById('sideTab');
    sideTab.classList.toggle('active');
}

// Close side tab when clicking outside
document.addEventListener('click', function(event) {
    var sideTab = document.getElementById('sideTab');
    var toggleBtn = document.querySelector('.side-tab-toggle');
    
    if (sideTab.classList.contains('active')) {
        if (!sideTab.contains(event.target) && !toggleBtn.contains(event.target)) {
            sideTab.classList.remove('active');
        }
    }
});

// Add active class to current page link
document.addEventListener('DOMContentLoaded', function() {
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('.side-tab a');
    
    links.forEach(function(link) {
        var linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Update footer year
    var footerYear = document.querySelector('footer p');
    if (footerYear) {
        var year = new Date().getFullYear();
        footerYear.textContent = footerYear.textContent.replace('2026', year);
    }
});

console.log('🌳 Family Roots — website loaded!');
