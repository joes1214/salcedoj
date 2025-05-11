const Globals = {}

function main() {
    Globals.elements = {
        page: document.documentElement,
        lightSwitch: document.getElementById('light-switch-btn'),
        copyEmail: document.getElementById('email-notif'),
        contactLink: document.getElementById('contact-link'),
    };

    
    Globals.elements.lightSwitch.addEventListener('click', switchThemes);
    Globals.elements.contactLink.addEventListener('click', copyEmail);
    
    Globals.emailNotification = new CopyEmail();
    Globals.emailNotification.appendTo(Globals.elements.copyEmail);
}

function switchThemes() {
    const page = document.documentElement;
    if (page.dataset.theme === 'light') {
        page.dataset.theme = 'dark';
    } else {
        page.dataset.theme = 'light';
    }
}

function copyEmail() {
    Globals.emailNotification.displayNotification();
    Globals.emailNotification.copyToClipboard();
}
