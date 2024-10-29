document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.projects-row-1, .projects-row-2, .projects-row-3, .projects-row-4');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-fadeInSlideIn');
            entry.target.classList.remove('opacity-0', 'translate-y-12');
          }, index * 500); 
        }
      });
    }, {
      threshold: 0.1 
    });

    sections.forEach((section) => {
      observer.observe(section);
    });
});