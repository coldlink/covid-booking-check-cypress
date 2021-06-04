describe('NHS Covid', () => {
  it('fails attempts to book covid test', () => {
    cy.visit('https://www.nhs.uk/conditions/coronavirus-covid-19/coronavirus-vaccination/book-coronavirus-vaccination/')

    cy.contains(`Book my appointments`).click()
    
    cy.get(`#option_Yes_input`).click()
    
    cy.get(`#submit-button`).click()
    
    cy.get(`#NhsNumber`).type(Cypress.env('NHS_NUMBER'))

    cy.get(`#submit-button`).click()
    
    cy.get(`#Date_Day`).type(Cypress.env('DOB_DAY'))
    
    cy.get(`#Date_Month`).type(Cypress.env('DOB_MONTH'))
    
    cy.get(`#Date_Year`).type(Cypress.env('DOB_YEAR'))
    
    cy.get(`#submit-button`).click()
    
    cy.get(`#submit-button`).click()
    
    cy.get(`#option_Neither_input`).click()
    
    cy.get(`#submit-button`).click()
    
    cy.contains(`You are not currently eligible to book through this service`)
  })
})