/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 
window.addEventListener('DOMContentLoaded', event => {
    // Activate SimpleLightbox plugin for portfolio items
    for (i in projects) {
        var elems = '#portfolio a.project-' + i.toString();
        new SimpleLightbox(elems, { captionSelector: "self", captions: false });
    }

    function loadNavigationBar() {
        makeElementText(brand_name, "navbar-brand");
        makeElementText(navbar_content_1, "navbar-content-1");
        makeElementText(navbar_content_2, "navbar-content-2");
    }

    function loadBiography() {
        makeElementText(title, "title");
        makeElementText(bio, "bio");
        makeElementText(bio_button, "bio-button");
    }

    function loadContactInfo() {
        makeElementText(contact_info_header, "contact-info-header");
        makeElementText(contact_info_text, "contact-info-text");
        makeElementText(contact_info_name, "contact-info-name");
        makeElementText(contact_info_email, "contact-info-email");
        makeElementText(contact_info_phone, "contact-info-phone");
        makeElementText(contact_info_message, "contact-info-message");
        makeElementText(contact_button, "contact-button");
    }

    function loadPortfolio() {
        const project = "project-";
        const title = "-title";
        const subtitle = "-subtitle";
        for (i in projects) {
            let html_title = getTitle(i);
            let html_subtitle = getSubtitle(i);
            if (html_title) {
                var project_title = project + i.toString() + title;
                makeElementText(html_title, project_title);
            }
            if (html_subtitle) {
                var project_subtitle = project + i.toString() + subtitle;
                makeElementText(html_subtitle, project_subtitle);
            }
        }
    }

    function loadFooter() {
        makeElementText(copyright, "copyright");
        makeElementText(last_updated, "last-updated");
    }

    // Load the dynamic contents
    function loadContents() {
        loadNavigationBar();
        loadBiography();
        loadContactInfo();
        loadFooter();
        loadPortfolio();
    }
    loadContents();

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    function makeElementText(html, id) {
        let x = document.getElementById(id);
        x.innerHTML = html;
    }

    function getTitle(index) {
        if (projects[index]) {
            return projects[index].title;
        }
        return null;
    }

    function getSubtitle(index) {
        if (projects[index]) {
            return projects[index].subtitle;
        }
        return null;
    }
});
