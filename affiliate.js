document.addEventListener('DOMContentLoaded', function() {
  const scrollBtn = document.querySelector('.scroll-to-top');

  scrollBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const targetElement = document.querySelector('body');
      targetElement.scrollIntoView({
          behavior: 'smooth'
      });
  });
});

const items = document.querySelectorAll('.item');

items.forEach(item => {
    const keywordSection = item.querySelector('.keyword');
    const keywords = keywordSection.dataset.keywords.split(',').map(keyword => keyword.trim());

    console.log(keywords); // Output: ["keyword1", "keyword2", "keyword3"] for the first item section
    // Process the keywords as needed for each item section
});
