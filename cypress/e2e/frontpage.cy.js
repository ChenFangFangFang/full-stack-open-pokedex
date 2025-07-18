
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('/')
    cy.contains('ivysaur')
  })

  it('can navigate to a pokemon page', function() {
    cy.visit('/')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})