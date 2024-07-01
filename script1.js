 const navHeight = document.querySelector('.header-section').offsetHeight;
    const links = document.querySelectorAll('.a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const targetPosition = targetElement.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    content.style.display='block';

    
    setTimeout(() => {
        loader.style.opacity = '0';

       
        setTimeout(() => {
            loader.style.display = 'none';
            
        }, 10); 
    }, 800); 

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }