
  // Select all FAQ items
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const h3 = item.querySelector('h3');
    const faqContent = item.querySelector('.faq-content');
    const faqToggle = item.querySelector('.faq-toggle');

    // Function to toggle the FAQ
    const toggleFaq = () => {
      item.classList.toggle('faq-active'); // Toggle active class

      // Animate the height change smoothly
      if (item.classList.contains('faq-active')) {
        faqContent.style.maxHeight = faqContent.scrollHeight + "px"; // Expand content
      } else {
        faqContent.style.maxHeight = "0px"; // Collapse content
      }
    };

    // Add click event listener to the h3 (question)
    h3.addEventListener('click', toggleFaq);

    // Add click event listener to the toggle icon
    faqToggle.addEventListener('click', toggleFaq);
  });

