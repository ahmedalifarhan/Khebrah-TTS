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

  // Sticky Scroll Section - Image Change on Scroll
  // يعمل فقط على الشاشات الأكبر من 991 بكسل
  const stickyScrollSection = document.querySelector('.sticky-scroll-section');
  
  // إضافة الصور للمقاطع على الشاشات الصغيرة
  function addImagesToMobileBlocks() {
    if (stickyScrollSection) {
      const textBlocks = stickyScrollSection.querySelectorAll('.sticky-text-block');
      
      if (window.innerWidth <= 991) {
        // على الشاشات الصغيرة: إضافة الصور
        textBlocks.forEach(function(block) {
          let imageElement = block.querySelector('.block-image-mobile');
          if (!imageElement) {
            const imageSrc = block.getAttribute('data-image');
            if (imageSrc) {
              imageElement = document.createElement('div');
              imageElement.className = 'block-image-mobile';
              imageElement.innerHTML = '<img src="' + imageSrc + '" alt="Professional Image">';
              block.insertBefore(imageElement, block.firstChild);
            }
          }
        });
      } else {
        // على الشاشات الكبيرة: إزالة الصور
        const mobileImages = stickyScrollSection.querySelectorAll('.block-image-mobile');
        mobileImages.forEach(function(img) {
          img.remove();
        });
      }
    }
  }
  
  // استدعاء الدالة عند تحميل الصفحة وتغيير الحجم
  addImagesToMobileBlocks();
  window.addEventListener('resize', addImagesToMobileBlocks);
  
  if (stickyScrollSection && window.innerWidth > 991) {
    const stickyImage = document.getElementById('sticky-feature-image');
    const stickyImageContainer = stickyScrollSection.querySelector('.sticky-image-container');
    const textBlocks = stickyScrollSection.querySelectorAll('.sticky-text-block');
    
    if (stickyImage && textBlocks.length > 0 && stickyImageContainer) {
      let currentImageIndex = -1;
      const firstTextBlock = textBlocks[0];
      
      function updateStickyImage() {
        const windowHeight = window.innerHeight;
        const sectionTop = stickyScrollSection.offsetTop;
        const scrollPosition = window.scrollY;
        const viewportCenter = scrollPosition + windowHeight / 2;
        
        // حساب موضع أول مقطع نصي
        const firstBlockTop = sectionTop + firstTextBlock.offsetTop;
        const firstBlockCenter = firstBlockTop + firstTextBlock.offsetHeight / 2;
        
        // حساب موضع آخر مقطع نصي
        const lastTextBlock = textBlocks[textBlocks.length - 1];
        const lastBlockTop = sectionTop + lastTextBlock.offsetTop;
        const lastBlockBottom = lastBlockTop + lastTextBlock.offsetHeight;
        
        // حساب المسافة والموضع مرة واحدة
        const totalScrollDistance = lastBlockBottom - firstBlockTop;
        const scrollProgress = viewportCenter - firstBlockTop;
        const segmentSize = totalScrollDistance / textBlocks.length;
        
        // حساب نقاط التغيير مع تأخير للصورة الثانية والثالثة
        const firstToSecondThreshold = segmentSize * 1.2; // تأخير 20% إضافية للصورة الثانية
        const secondToThirdThreshold = segmentSize * 2.3; // تأخير ظهور الصورة الثالثة (230% من الجزء الأول)
        
        // حساب الفهرس بناءً على المسافة المتساوية مع تأخير للصورة الثانية والثالثة
        let activeBlockIndex = 0;
        
        if (scrollProgress < firstToSecondThreshold) {
          // الصورة الأولى: حتى 120% من الجزء الأول
          activeBlockIndex = 0;
        } else if (scrollProgress < secondToThirdThreshold) {
          // الصورة الثانية: من 120% إلى 230% من الجزء الأول
          activeBlockIndex = 1;
        } else {
          // الصورة الثالثة: من 230% فما فوق - تثبت ولا تختفي
          activeBlockIndex = 2;
        }
        
        // التأكد من أن الفهرس في النطاق الصحيح
        activeBlockIndex = Math.max(0, Math.min(activeBlockIndex, textBlocks.length - 1));
        
        // حساب إذا كانت الصورة الثالثة نشطة
        const isThirdImageActive = activeBlockIndex === 2;
        
        // الصورة تبدأ sticky عند وصول أول مقطع (بداية أول نص)
        const shouldStartSticky = scrollPosition + windowHeight / 2 >= firstBlockTop;
        
        // الصورة تنتهي sticky عند نهاية آخر مقطع (نهاية آخر نص)
        // لكن إذا كانت الصورة الثالثة نشطة، تبقى sticky
        const shouldEndSticky = scrollPosition + windowHeight / 2 >= lastBlockBottom;
        
        // تفعيل/إلغاء sticky بناءً على موضع أول وآخر نص
        // الصورة تبدأ sticky عند بداية أول نص
        // إذا كانت الصورة الثالثة نشطة، تبقى sticky حتى بعد نهاية آخر نص
        if (shouldStartSticky && (!shouldEndSticky || isThirdImageActive)) {
          stickyImageContainer.classList.add('sticky-active');
        } else if (!isThirdImageActive) {
          stickyImageContainer.classList.remove('sticky-active');
        }
        
        // Check if we're within the text blocks range
        const textBlocksStart = firstBlockTop;
        const textBlocksEnd = lastBlockBottom;
        
        if (shouldStartSticky && (!shouldEndSticky || isThirdImageActive) && scrollPosition <= textBlocksEnd) {
          
          // Update image if index changed
          if (activeBlockIndex !== currentImageIndex) {
            currentImageIndex = activeBlockIndex;
            const newImageSrc = textBlocks[activeBlockIndex].getAttribute('data-image');
            if (newImageSrc) {
              const fullImagePath = new URL(newImageSrc, window.location.href).href;
              
              // Only change if different
              if (stickyImage.src !== fullImagePath) {
                // Fade out
                stickyImage.style.transition = 'opacity 0.3s ease-in-out';
                stickyImage.style.opacity = '0';
                
                setTimeout(function() {
                  stickyImage.src = newImageSrc;
                  // Fade in
                  setTimeout(function() {
                    stickyImage.style.opacity = '1';
                  }, 50);
                }, 300);
              }
            }
          }
        }
      }
      
      // Use IntersectionObserver for better performance
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      };
      
      const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            updateStickyImage();
          }
        });
      }, observerOptions);
      
      sectionObserver.observe(stickyScrollSection);
      
      // Also listen to scroll for real-time updates (فقط على الشاشات الكبيرة)
      let scrollTimeout;
      const scrollHandler = function() {
        if (window.innerWidth > 991) {
          if (scrollTimeout) {
            clearTimeout(scrollTimeout);
          }
          scrollTimeout = setTimeout(updateStickyImage, 16); // ~60fps
        }
      };
      
      window.addEventListener('scroll', scrollHandler, { passive: true });
      
      // إعادة التحقق عند تغيير حجم الشاشة
      window.addEventListener('resize', function() {
        if (window.innerWidth <= 991) {
          // إلغاء sticky على الشاشات الصغيرة
          stickyImageContainer.classList.remove('sticky-active');
        } else {
          // إعادة تفعيل على الشاشات الكبيرة
          updateStickyImage();
        }
      });
      
      // Initial call
      updateStickyImage();
    }
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















// Hero CTA Button - يبقى ظاهراً أثناء السكرول في الهيرو
window.addEventListener("scroll", function() {
  const hero = document.querySelector(".hero");
  const cta = hero ? hero.querySelector(".cta-btn-fixed") : null;
  
  if (!hero || !cta) return;
  
  const heroTop = hero.offsetTop;
  const heroBottom = hero.offsetTop + hero.offsetHeight;
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  
  // حساب نقطة العودة (قبل نهاية الهيرو بـ 100px)
  const returnPoint = heroBottom - 100;
  
  // إذا كنا داخل الهيرو ولكن لم نصل لنقطة العودة
  if (scrollPosition >= heroTop && scrollPosition < returnPoint) {
    // الزر ثابت وظاهر
    cta.classList.add("cta-fixed");
    cta.classList.remove("cta-hidden");
  } else if (scrollPosition >= returnPoint && scrollPosition < heroBottom) {
    // قبل نهاية الهيرو - الزر يرجع لمكانه الأصلي
    cta.classList.remove("cta-fixed");
    cta.classList.remove("cta-hidden");
  } else {
    // خارج الهيرو - الزر يختفي
    cta.classList.remove("cta-fixed");
    cta.classList.add("cta-hidden");
  }
});