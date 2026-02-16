// Riya's World Of Beauty - Interactive Features

document.addEventListener("DOMContentLoaded", function() {

  // Header scroll effect
  const header = document.querySelector("header");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    });
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe product cards and feature items
  const animatedElements = document.querySelectorAll(".product-card, .feature-item, .section-title");
  animatedElements.forEach(el => observer.observe(el));

  // Product card hover effect enhancement
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach(card => {
    card.addEventListener("mouseenter", function() {
      this.style.transition = "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
    });
  });

  // Add subtle parallax effect to hero section
  const hero = document.querySelector(".hero");

  if (hero) {
    window.addEventListener("scroll", function() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.3;
      hero.style.transform = `translateY(${rate}px)`;
    });
  }

  // Contact CTA button interaction
  const ctaButton = document.querySelector(".cta-button");

  if (ctaButton) {
    ctaButton.addEventListener("click", function(e) {
      e.preventDefault();
      const contactSection = document.querySelector("#contact");
      if (contactSection) {
        const offsetTop = contactSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    });
  }

});
