const toggleSidebar = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const dashboard = document.getElementById('dashboard');

// Set sidebar height to match dashboard height on mobile
function setSidebarHeight() {
    if (window.innerWidth < 1024) { // Below lg breakpoint
        const dashboardHeight = dashboard.offsetHeight;
        sidebar.style.height = `${dashboardHeight}px`;
        //sidebar.style.height = `380px`;
        sidebar.style.overflowY = 'auto';
    } else {
        sidebar.style.height = 'auto';
        sidebar.style.overflowY = 'visible';
    }
}

// Initial height adjustment
setSidebarHeight();

// Adjust height on window resize
window.addEventListener('resize', setSidebarHeight);

// Toggle sidebar on mobile devices
toggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
    sidebar.classList.toggle('left-[-4rem]');
});

// Close sidebar when clicking outside on mobile devices
document.addEventListener('click', (e) => {
    if (
        !sidebar.contains(e.target) &&
        !toggleSidebar.contains(e.target) &&
        !sidebar.classList.contains('-translate-x-full') &&
        window.innerWidth < 1024
    ) {
        sidebar.classList.add('-translate-x-full');
        sidebar.classList.add('left-[-4rem]');
    }
});