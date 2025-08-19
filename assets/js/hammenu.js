document.addEventListener('DOMContentLoaded', () => {
  const hamBtn = document.getElementById('ham-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  // Debug: Check if hamburger button and mobile menu exist
  if (!hamBtn) console.error('Hamburger button (#ham-btn) not found');
  if (!mobileMenu) console.error('Mobile menu (#mobile-menu) not found');

  // Toggle mobile menu like an accordion
  if (hamBtn && mobileMenu) {
    hamBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      // Close all accordion menus when toggling mobile menu
      document.querySelectorAll('[id^="menu-"]').forEach(menu => {
        menu.classList.add('max-h-0', 'opacity-0', 'invisible');
        menu.classList.remove('max-h-96', 'opacity-100', 'visible');
      });
      document.querySelectorAll('[id^="icon-"]').forEach(icon => {
        icon.classList.remove('rotate-180');
      });

      // Toggle mobile menu
      mobileMenu.classList.toggle('max-h-0');
      mobileMenu.classList.toggle('max-h-[40rem]'); // Fixed height for accordion-like behavior
      mobileMenu.classList.toggle('opacity-0');
      mobileMenu.classList.toggle('opacity-100');
      mobileMenu.classList.toggle('invisible');
      mobileMenu.classList.toggle('visible');
      console.log('Mobile menu toggled');
    });

    // Close mobile menu and accordion menus when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !hamBtn.contains(e.target)) {
        mobileMenu.classList.add('max-h-0', 'opacity-0', 'invisible');
        mobileMenu.classList.remove('max-h-[40rem]', 'opacity-100', 'visible');
        // Close all accordion menus
        document.querySelectorAll('[id^="menu-"]').forEach(menu => {
          menu.classList.add('max-h-0', 'opacity-0', 'invisible');
          menu.classList.remove('max-h-96', 'opacity-100', 'visible');
        });
        document.querySelectorAll('[id^="icon-"]').forEach(icon => {
          icon.classList.remove('rotate-180');
        });
        console.log('Mobile menu and accordions closed');
      }
    });
  }

  // Accordion dropdowns
  const accordionButtons = document.querySelectorAll('.accordion-btn');
  if (accordionButtons.length === 0) {
    console.error('No accordion buttons (.accordion-btn) found');
  }

  accordionButtons.forEach(button => {
    const target = button.getAttribute('data-target');
    const menuElement = document.getElementById(`menu-${target}`);
    const iconElement = document.getElementById(`icon-${target}`);

    // Debug: Check if menu and icon elements exist
    if (!menuElement) console.error(`Menu element #menu-${target} not found`);
    if (!iconElement) console.error(`Icon element #icon-${target} not found`);

    if (menuElement && iconElement) {
      button.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent closing mobile menu
        console.log(`Clicked accordion button for ${target}`);
        // Close other accordion menus
        document.querySelectorAll('[id^="menu-"]').forEach(menu => {
          if (menu !== menuElement) {
            menu.classList.add('max-h-0', 'opacity-0', 'invisible');
            menu.classList.remove('max-h-96', 'opacity-100', 'visible');
          }
        });
        document.querySelectorAll('[id^="icon-"]').forEach(icon => {
          if (icon !== iconElement) icon.classList.remove('rotate-180');
        });

        // Toggle current menu
        menuElement.classList.toggle('max-h-0');
        menuElement.classList.toggle('max-h-96');
        menuElement.classList.toggle('opacity-0');
        menuElement.classList.toggle('opacity-100');
        menuElement.classList.toggle('invisible');
        menuElement.classList.toggle('visible');
        iconElement.classList.toggle('rotate-180');
      });
    }
  });
});