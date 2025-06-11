
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Add some interactive bus movement
        function animateBuses() {
            const buses = document.querySelectorAll('.bus-pin');
            buses.forEach((bus, index) => {
                setInterval(() => {
                    const currentTop = parseInt(bus.style.top) || 20;
                    const currentLeft = parseInt(bus.style.left) || 30;
                    
                    const newTop = Math.max(10, Math.min(85, currentTop + (Math.random() - 0.5) * 10));
                    const newLeft = Math.max(10, Math.min(85, currentLeft + (Math.random() - 0.5) * 10));
                    
                    bus.style.top = newTop + '%';
                    bus.style.left = newLeft + '%';
                }, 3000 + index * 1000);
            });
        }

        // Start bus animation after page load
        window.addEventListener('load', () => {
            setTimeout(animateBuses, 2000);
        });

        // Header scroll effect
        let lastScrollTop = 0;
        const header = document.querySelector('.header');

        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });

        // Add loading animation
        window.addEventListener('load', function() {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease-in-out';
            
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });