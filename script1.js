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


    


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }