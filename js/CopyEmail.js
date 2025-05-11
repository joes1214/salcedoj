class CopyEmail {
    constructor() {
        this.active = false;
        this.elements = this.createElements();
    }

    appendTo(element) {
        element.append(this.elements.notification);
    }

    createElements() {
        const notification = document.createElement('div');
        notification.classList.add('notif-copied', 'd-none');
        notification.textContent = 'Email copied!'

        const input = this.createEmailInput();
        
        return {notification: notification, input: input};
    }

    createEmailInput() {
        const input = document.createElement('input');
        input.classList.add('d-none');
        input.type = 'text';
        input.value = 'joe.salcedo100@gmail.com';
        input.contentEditable = true;
        input.readOnly = false;

        return input;
    }

    copyToClipboard() {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(this.elements.input.value);
            return;
        }

        this.elements.input.select()
        this.elements.input.setSelectionRange(0, 999999);

        if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            const range = document.createRange();
            range.selectNodeContents(this.elements.input);
        
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
    
            this.elements.input.setSelectionRange(0, 999999);
          } 

          document.execCommand('copy');
    }

    displayNotification() {
        if (!this.active) {
            setTimeout(() => {
                this.elements.notification.classList.add('d-none');
                this.active = false;
            }, 3000);

            this.elements.notification.classList.remove('d-none');
        }

        this.active = true;
    }
}