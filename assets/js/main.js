document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Fullscreen scroll behavior (desktop only)
    let currentSection = 0;
    const sections = document.querySelectorAll('.section-panel');
    const scrollContainer = document.querySelector('.scroll-container');
    let canScroll = true;
    let scrollAccumulator = 0;
    let scrollTimeout;
    const SCROLL_THRESHOLD = 100; // Minimum accumulated scroll to trigger section change
    const SCROLL_RESET_DELAY = 150; // Time to reset accumulator if no scroll events
    
    // Check if device is mobile
    const isMobile = window.matchMedia('(max-width: 900px)').matches;
    
    // Handle mouse wheel scrolling with accumulation (desktop only)
    if (!isMobile) {
        window.addEventListener('wheel', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // If can't scroll, ignore everything
            if (!canScroll) return;
            
            // Accumulate scroll delta
            scrollAccumulator += Math.abs(e.deltaY);
            
            // Clear existing timeout
            clearTimeout(scrollTimeout);
            
            // Set timeout to reset accumulator if no more scroll events
            scrollTimeout = setTimeout(() => {
                scrollAccumulator = 0;
            }, SCROLL_RESET_DELAY);
            
            // Only trigger section change if we've accumulated enough scroll
            if (scrollAccumulator >= SCROLL_THRESHOLD) {
                canScroll = false; // Block further scrolls
                scrollAccumulator = 0; // Reset accumulator
                clearTimeout(scrollTimeout);
                
                const delta = e.deltaY;
                
                if (delta > 0 && currentSection < sections.length - 1) {
                    // Scroll down
                    currentSection++;
                    scrollToSection(currentSection);
                } else if (delta < 0 && currentSection > 0) {
                    // Scroll up
                    currentSection--;
                    scrollToSection(currentSection);
                } else {
                    // If we can't scroll in that direction, re-enable scrolling
                    canScroll = true;
                }
            }
        }, { passive: false });
    }
    
    // Handle touch scrolling and keyboard navigation (desktop only)
    if (!isMobile) {
        let touchStartY = 0;
        let touchEndY = 0;
        
        window.addEventListener('touchstart', function(e) {
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });
        
        window.addEventListener('touchend', function(e) {
            touchEndY = e.changedTouches[0].screenY;
            handleSwipe();
        }, { passive: true });
        
        function handleSwipe() {
            if (!canScroll) return;
            
            const swipeThreshold = 50;
            const diff = touchStartY - touchEndY;
            
            if (Math.abs(diff) > swipeThreshold) {
                canScroll = false; // Block further scrolls
                
                if (diff > 0 && currentSection < sections.length - 1) {
                    // Swipe up (scroll down)
                    currentSection++;
                    scrollToSection(currentSection);
                } else if (diff < 0 && currentSection > 0) {
                    // Swipe down (scroll up)
                    currentSection--;
                    scrollToSection(currentSection);
                } else {
                    // If we can't scroll in that direction, re-enable scrolling
                    canScroll = true;
                }
            }
        }
        
        // Handle keyboard navigation (desktop only)
        window.addEventListener('keydown', function(e) {
            if (!canScroll) return;
            
            if ((e.key === 'ArrowDown' || e.key === 'PageDown') && currentSection < sections.length - 1) {
                canScroll = false;
                currentSection++;
                scrollToSection(currentSection);
            } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && currentSection > 0) {
                canScroll = false;
                currentSection--;
                scrollToSection(currentSection);
            }
        });
    }
    
    // Scroll to section function
    function scrollToSection(index) {
        if (index < 0 || index >= sections.length) return;
        
        const targetSection = sections[index];
        
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Re-enable scrolling after animation completes
        setTimeout(() => {
            canScroll = true;
        }, 1000); // Wait for animation to complete
    }
    
    
    // Form handling
    const form = document.querySelector('.waitlist-form') || document.querySelector('.signup-form');
    const emailInput = form.querySelector('.waitlist-email-input') || form.querySelector('.email-input');
    const submitBtn = form.querySelector('.waitlist-btn-submit') || form.querySelector('.btn-submit');
    const originalBtnText = submitBtn.innerHTML;
    
    // Email validation
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Show error message
    function showError(message) {
        // Remove existing error
        const existingError = form.querySelector('.form-error');
        if (existingError) {
            existingError.remove();
        }
        
        // Create new error element
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        errorDiv.textContent = message;
        form.appendChild(errorDiv);
        
        // Auto-remove error after 5 seconds
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.remove();
            }
        }, 5000);
    }
    
    // Show success message
    function showSuccess() {
        const successHtml = `
            <div class="success-message" style="display: block;">
                <div class="success-content">
                    <i data-lucide="check-circle"></i>
                    <h3>You're on the list!</h3>
                    <p>Thanks for signing up! We'll notify you as soon as Lemonoid launches.</p>
                    <div class="success-actions">
                        <button class="btn-close" onclick="this.closest('.success-message').remove();">
                            Got it!
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', successHtml);
        
        // Initialize icons in the new content
        lucide.createIcons();
        
        // Auto-remove after 6 seconds
        setTimeout(() => {
            const successMsg = document.querySelector('.success-message');
            if (successMsg) {
                successMsg.remove();
            }
        }, 6000);
    }
    
    // Set loading state
    function setLoading(loading) {
        if (loading) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i data-lucide="loader-2" class="loading"></i> Signing up...';
            lucide.createIcons();
        } else {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
            lucide.createIcons();
        }
    }
    
    // Real-time email validation
    emailInput.addEventListener('input', function() {
        const email = this.value.trim();
        
        // Remove error styling
        this.classList.remove('error');
        
        // Remove any existing error messages
        const existingError = form.querySelector('.form-error');
        if (existingError) {
            existingError.remove();
        }
        
        // Validate if there's content
        if (email && !validateEmail(email)) {
            this.classList.add('error');
        }
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        // Validation
        if (!email) {
            showError('Please enter your email address');
            emailInput.focus();
            return;
        }
        
        if (!validateEmail(email)) {
            showError('Please enter a valid email address');
            emailInput.classList.add('error');
            emailInput.focus();
            return;
        }
        
        // Set loading state
        setLoading(true);
        
        // Prepare form data for Netlify
        const formData = new FormData(form);
        
        // Submit to Netlify
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(function() {
            // Success
            form.reset();
            emailInput.classList.remove('error');
            showSuccess();
        })
        .catch(function(error) {
            console.error('Error:', error);
            showError('Something went wrong. Please try again.');
        })
        .finally(function() {
            setLoading(false);
        });
    });
    
    // Keyboard navigation enhancement
    emailInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            form.dispatchEvent(new Event('submit'));
        }
    });
    
    // Focus management
    emailInput.addEventListener('focus', function() {
        this.classList.remove('error');
        
        // Remove any existing error messages
        const existingError = form.querySelector('.form-error');
        if (existingError) {
            existingError.remove();
        }
    });
    
    // Smooth scrolling for anchor links (updated for section panels)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Find the index of the target section
                const targetIndex = Array.from(sections).findIndex(section => 
                    section.contains(targetSection) || section.id === targetId
                );
                
                if (targetIndex !== -1) {
                    currentSection = targetIndex;
                    scrollToSection(currentSection);
                }
            }
        });
    });
});