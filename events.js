// Event handling module.

export default class EventHandler {
    static actionHandlers = {
        hamburger: EventHandler.handleHamburger
    };
    
    static init() {
        document.addEventListener("click", EventHandler.handleClick);
    }
    static handleClick(e) {
        const action = e.target.dataset.action;
        // Execute the associated function, passing the e onto the next function.
        if (action) EventHandler.actionHandlers[action](e);
        // If the clicked element has no data-action, then ignore the click.
        else return;
    }
    static handleHamburger(e) {
        const sidebar = document.querySelector('nav.sidebar-nav');
        if (sidebar.className.includes('visible')){
            sidebar.classList.remove('visible');
        } else sidebar.classList.add('visible');
    }

}