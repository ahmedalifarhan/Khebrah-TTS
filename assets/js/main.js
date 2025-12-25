$(document).ready(function () {
  //Nav
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".sticky").addClass("active");
    } else {
      $(".sticky").removeClass("active");
    }
  });

  // Mobile Menu
  if ($(".mobile-menu").length) {
    $(".mobile-menu .menu-box");

    var mobileMenuContent = $(".main-header .nav-outer .main-menu").html();
    $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);
    $(".sticky-header .main-menu").append(mobileMenuContent);

    //Menu Toggle Btn
    $(".mobile-nav-toggler").on("click", function () {
      $("body").addClass("mobile-menu-visible");
    });

    //Menu Toggle Btn
    $(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on(
      "click",
      function () {
        $("body").removeClass("mobile-menu-visible");
      }
    );
    $(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on(
      "click",
      function () {
        $("body").removeClass("mobile-menu-visible");
      }
    );
  }

  $(".mobile-menu .sub-menu").hide();
  $(".mobile-menu .menu-item-has-children > a").click(function (e) {
    // Close all open windows
    $(".sub-menu").stop().slideUp(300);
    // Toggle this window open/close
    $(this).next(".sub-menu").stop().animate({
      height: "toggle",
    });
    e.stopPropagation();
    e.preventDefault();
  });

  // Odometer and Viewport Interaction

  //Odometer
  $(".counter-item").each(function () {
    // $(this).isInViewport(function (status) {
    //     if (status === "entered") {
    setTimeout(function () {
      for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
        var el = document.querySelectorAll(".odometer")[i];
        el.innerHTML = el.getAttribute("data-odometer-final");
      }
    }, 1400);
    //     }
    // });
  });
 

  // Helper function to check if the element is sufficiently in the viewport
  function isElementInViewport(el) {
    var rect = el[0].getBoundingClientRect();
    var windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= windowHeight * 0.9 && // Adjust visibility threshold (e.g., 90% visible)
      rect.right <= windowWidth
    );
  }

  $(".designs_1").owlCarousel({
    rtl: true,
    items: 3, // Only one item will be visible at a time
    dots: false,
    nav: true,
    margin: 20,
    autoplay: true,
    loop: true,
    autoplayTimeout: 3000, // Duration for each item to stay visible
    autoplayHoverPause: true,
    smartSpeed: 1000, // Speed of fade transition
    animateIn: "fadeIn", // Fade-in animation
    animateOut: "fadeOut", // Fade-out animation
    responsive: {
      0: {
        items: 1, // Show 1 item on screens smaller than 600px
      },
      600: {
        items: 2, // Show 2 items on screens between 600px and 899px
      },
      1000: {
        items: 3, // Show 3 items on screens 1000px and larger
      },
    },
  });

  $(".testmonials_2").owlCarousel({
    rtl: true,
    items: 4, // Only one item will be visible at a time
    dots: false,
    nav: false,
    margin: 20,
    autoplay: true,
    loop: true,
    autoplayTimeout: 3000, // Duration for each item to stay visible
    autoplayHoverPause: true,
    smartSpeed: 1000, // Speed of fade transition
    animateIn: "fadeIn", // Fade-in animation
    animateOut: "fadeOut", // Fade-out animation
    responsive: {
      0: {
        items: 1, // Show 1 item on screens smaller than 600px
      },
      600: {
        items: 2, // Show 2 items on screens between 600px and 899px
      },
      1000: {
        items: 3, // Show 3 items on screens 1000px and larger
      },
      1200: {
        items: 4, // Show 4 items on screens 1200px and larger
      },
    },
  });
 

  // init wow
  new WOW({
    // reset: false,
  }).init();

  // Testimonial Slider
  const testimonials = [
    {
      text: "ساعدتنا خبرة على أتمتة العمليات وتحليل بيانات الطلاب والزوّار بشكل جميل ودقيق.",
      name: "عبدالله الأسمري",
      position: "مدير ادارة التنسيق والتحسينات للجودة.",
      image: "./assets/images/Frame_48980.svg"
    },
    {
      text: "نظام خبرة سهل الاستخدام وفعال جداً في إدارة العمليات اليومية. وفر علينا الكثير من الوقت والجهد.",
      name: "سارة أحمد",
      position: "مديرة قسم التسجيل والقبول",
      position: "مدير قسم التخطيط الاستراتيجي",
      image: "./assets/images/Frame_48980.svg"
    },
    {
      text: "خدمة العملاء ممتازة والدعم الفني متاح دائماً. تجربة رائعة مع فريق خبرة.",
      name: "فاطمة العلي",
      position: "مديرة قسم الموارد البشرية",
      image: "./assets/images/Frame_48980.svg"
    }
  ];

  let currentTestimonialIndex = 0;

  function updateTestimonial(index) {
    const testimonial = testimonials[index];
    const slide = $(".testimonial-slide");
    const mainImage = $(".testimonial-main-image");
    
    // Fade out slide and image
    slide.removeClass("active").addClass("fade-out");
    mainImage.addClass("fade-out");
    
    setTimeout(function() {
      // Update content
      slide.find(".testimonial-text").text(testimonial.text);
      slide.find(".testimonial-author").html(
        '<span class="text-dark fw-bold">' + testimonial.name + '</span><br><br><span>' + testimonial.position + '</span>'
      );
      
      // Update image
      if (testimonial.image) {
        mainImage.attr("src", testimonial.image);
      }
      
      // Fade in
      slide.removeClass("fade-out").addClass("active");
      mainImage.removeClass("fade-out");
    }, 400);
  }

  function nextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    updateTestimonial(currentTestimonialIndex);
  }

  function prevTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentTestimonialIndex);
  }

  // Event listeners
  $(".testimonial-next").on("click", function(e) {
    e.preventDefault();
    nextTestimonial();
  });

  $(".testimonial-prev").on("click", function(e) {
    e.preventDefault();
    prevTestimonial();
  });

  // Partners Section Scroll Animation
  const partnersObserver = new IntersectionObserver(
    function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const logos = entry.target.querySelectorAll('.partner-logo-lazy');
          logos.forEach(function(logo, index) {
            setTimeout(function() {
              logo.style.animationDelay = (index * 0.1) + 's';
              logo.classList.add('animate');
            }, 50);
          });
          
          // Animate title
          const title = entry.target.querySelector('.partner-title-lazy');
          if (title) {
            title.classList.add('animate');
          }
          
          // Stop observing after animation starts
          partnersObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of the element is visible
      rootMargin: '0px 0px -50px 0px'
    }
  );

  // Observe partners section
  const partnersSection = document.querySelector('.partners-section');
  if (partnersSection) {
    partnersObserver.observe(partnersSection);
  }

  // Professional Section Scroll Animation
  const professionalObserver = new IntersectionObserver(
    function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          // Animate title
          const title = entry.target.querySelector('.professional-title-lazy');
          if (title) {
            title.classList.add('animate');
          }
          
          // Animate items
          const items = entry.target.querySelectorAll('.professional-item-lazy');
          items.forEach(function(item, index) {
            setTimeout(function() {
              item.classList.add('animate');
            }, 100 * index);
          });
          
          // Stop observing after animation starts
          professionalObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  // Observe professional section
  const professionalSection = document.querySelector('.professional-section-lazy');
  if (professionalSection) {
    professionalObserver.observe(professionalSection);
  }

  // Why Professional Section Scroll Animation
  const whyProfessionalObserver = new IntersectionObserver(
    function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          // Animate title
          const title = entry.target.querySelector('.why-professional-title-lazy');
          if (title) {
            title.classList.add('animate');
          }
          
          // Animate items
          const items = entry.target.querySelectorAll('.why-professional-item-lazy');
          items.forEach(function(item, index) {
            setTimeout(function() {
              item.classList.add('animate');
            }, 100 * index);
          });
          
          // Stop observing after animation starts
          whyProfessionalObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  // Observe why professional section
  const whyProfessionalSection = document.querySelector('.why-professional-section-lazy');
  if (whyProfessionalSection) {
    whyProfessionalObserver.observe(whyProfessionalSection);
  }

  // Consultation Methods Section Scroll Animation
  const consultationObserver = new IntersectionObserver(
    function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          // Animate title
          const title = entry.target.querySelector('.consultation-title-lazy');
          if (title) {
            title.classList.add('animate');
          }
          
          // Animate pointing arrow image
          const pointingImage = entry.target.querySelector('.consultation-image-lazy');
          if (pointingImage) {
            pointingImage.classList.add('animate');
          }
          
          // Animate content
          const content = entry.target.querySelector('.consultation-content-lazy');
          if (content) {
            content.classList.add('animate');
          }
          
          // Animate main image
          const mainImage = entry.target.querySelector('.consultation-main-image-lazy');
          if (mainImage) {
            setTimeout(function() {
              mainImage.classList.add('animate');
            }, 600);
          }
          
          // Stop observing after animation starts
          consultationObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  // Observe consultation methods section
  const consultationSection = document.querySelector('.consultation-methods-section-lazy');
  if (consultationSection) {
    consultationObserver.observe(consultationSection);
  }

  // Testimonials Section Scroll Animation
  const testimonialsObserver = new IntersectionObserver(
    function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          // Animate image
          const image = entry.target.querySelector('.testimonial-image-lazy');
          if (image) {
            image.classList.add('animate');
          }
          
          // Animate content
          const content = entry.target.querySelector('.testimonial-content-lazy');
          if (content) {
            setTimeout(function() {
              content.classList.add('animate');
            }, 200);
          }
          
          // Stop observing after animation starts
          testimonialsObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  // Observe testimonials section
  const testimonialsSection = document.querySelector('.testimonials-section-lazy');
  if (testimonialsSection) {
    testimonialsObserver.observe(testimonialsSection);
  }
});















window.addEventListener("scroll", function() {
  const hero = document.querySelector(".hero");
  const cta = hero.querySelector(".btn.btn_outline");
  const heroTop = hero.offsetTop;
  const heroBottom = hero.offsetTop + hero.offsetHeight;

  if (window.scrollY > heroTop && window.scrollY < heroBottom) {
    // أثناء المرور بالـ Hero → الزر ثابت وظاهر
    cta.classList.add("fixed");
    cta.classList.remove("hidden");
  } else {
    // خارج الـ Hero → الزر يختفي
    cta.classList.remove("fixed");
    cta.classList.add("hidden");
  }
});