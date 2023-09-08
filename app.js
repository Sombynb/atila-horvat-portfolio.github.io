const copyYear = document.querySelector('#copy-year'),
    portfoliosDiv = document.querySelector('#portfolios'),
    portfoliosContainer = portfoliosDiv.querySelector('.container');


copyYear.innerText = new Date().getFullYear();


const portfolioArray = [
    {
        name: 'Fruits website',
        image: 'images/web-9.jpg',
        pageLink: 'https://sombynb.github.io/Fruits-website.github.io/',
        codeLink: 'https://github.com/Sombynb/Fruits-website.github.io'
    },
    {
        name: 'Space-x clone',
        image: 'images/web1.gif',
        pageLink: 'https://sombynb.github.io/Spece-x-clone.github.io/',
        codeLink: 'https://github.com/Sombynb/Spece-x-clone.github.io'
    },
    {
        name: 'Starbacks clone',
        image: 'images/web2.png',
        pageLink: 'https://sombynb.github.io/Starbucks-clone.github.io/',
        codeLink: 'https://github.com/Sombynb/Starbucks-clone.github.io'
    },
    {
        name: 'Hulu clone',
        image: 'images/web-3.jpg',
        pageLink: 'https://sombynb.github.io/Hulu-clone.github.io/',
        codeLink: 'https://github.com/Sombynb/Hulu-clone.github.io'
    },
    {
        name: 'Travel website clone',
        image: 'images/web-4.jpg',
        pageLink: 'https://sombynb.github.io/Travel-website-clone.github.io/',
        codeLink: 'https://github.com/Sombynb/Travel-website-clone.github.io'
    },
    {
        name: 'Watches website clone',
        image: 'images/web-5.jpg',
        pageLink: 'https://sombynb.github.io/Watches-website-clone.github.io/',
        codeLink: 'https://github.com/Sombynb/Watches-website-clone.github.io'
    },
    {
        name: 'Plant website clone',
        image: 'images/web-6.jpg',
        pageLink: 'https://sombynb.github.io/Plants-website-clone.github.io/',
        codeLink: 'https://github.com/Sombynb/Plants-website-clone.github.io'
    },
    {
        name: 'Restaurant website clone',
        image: 'images/web-7.jpg',
        pageLink: 'https://sombynb.github.io/Restaurant-clone.github.io/',
        codeLink: 'https://github.com/Sombynb/Restaurant-clone.github.io'
    },
    {
        name: 'Headphones landing page',
        image: 'images/web-8.jpg',
        pageLink: 'https://sombynb.github.io/Headphones-clone.github.io/',
        codeLink: 'https://github.com/Sombynb/Headphones-clone.github.io'
    },

    
    // {
    //     name: '',
    //     image: 'images/.png',
    //     pageLink: '',
    //     codeLink: ''
    // },
    // {
    //     name: '',
    //     image: 'images/.jpg',
    //     pageLink: '',
    //     codeLink: ''
    // },
    // {
    //     name: '',
    //     image: 'images/.gif',
    //     pageLink: '',
    //     codeLink: ''
    // },
]

portfolioArray.forEach(item => {
    const singlePortfolio = document.createElement('div');
    singlePortfolio.classList = 'portfolio';
    singlePortfolio.innerHTML = `
        <h3>${item.name}</h3>
        <img src="${item.image}" alt="">
        <div class="buttons">
            ${item.pageLink ? `<a href="${item.pageLink}" target="_blank" class="btn">View page</a>` : ''}
            ${item.codeLink ? `<a href="${item.codeLink}" target="_blank" class="btn">View code</a>` : ''}
        </div>
    `;
    portfoliosContainer.appendChild(singlePortfolio);
})


// Select all links with hashes
// scroll-behavior: smooth fallback
// Copyed from stackoverflow
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    let $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
