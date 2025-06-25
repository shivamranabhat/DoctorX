document.addEventListener('DOMContentLoaded', function() {
  // Get all tab buttons and content sections
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  // Add click event listeners to each tab button
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Get the target content ID
      const targetId = this.getAttribute('data-target');
      const targetContent = document.querySelector(targetId);

      // Hide all content sections
      tabContents.forEach(content => {
        content.classList.add('hidden');
      });

      // Show the target content
      if (targetContent) {
        targetContent.classList.remove('hidden');
      }

      // Update active state of buttons
      tabButtons.forEach(btn => {
        btn.classList.remove('active', 'bg-button-green', 'text-white');
        btn.classList.add('text-thin-gray');
      });
      this.classList.add('active', 'bg-button-green', 'text-white');
      this.classList.remove('text-thin-gray');
    });
  });

  // Optionally, show the first tab by default
  const defaultTab = document.querySelector('.tab-btn.active');
  if (defaultTab) {
    defaultTab.click(); // This will trigger the click handler
  }
});
