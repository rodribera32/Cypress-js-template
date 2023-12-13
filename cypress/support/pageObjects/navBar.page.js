class NavBarPage {

    get navBarIcon () {
        return cy.get(".logo-switch")
    }

    get searchField () {
        return cy.get("#search-box")
    }
}

export default new NavBarPage();
