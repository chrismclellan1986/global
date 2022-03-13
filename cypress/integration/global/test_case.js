import 'cypress-iframe'

describe('Capital FM Now Playing Module', () => {
    beforeEach(() => {
        const iframe = '#sp_message_iframe_475592';

        const url = 'https://www.capitalfm.com/';
        cy.visit(url);
        cy.frameLoaded(iframe)
        cy.iframe().find('#notice > div.message-component.message-row > button.message-component.message-button.no-children.focusable.sp_choice_type_11.last-focusable-el').should('have.text', 'ACCEPT')
        .click()
        
    })

    afterEach(function () {
        cy.end();
    })

     it('Most Recent Songs display four songs', () => {

        /**
          * Purpose of this test is to check that Most Recent songs displays the last four played songs.
          */
         cy.get('article.track')
         .should('have.length', 4);
        
     })

     it('Apple music link should have href attribute and link should include apple.com', () => {
      
         /**
          * The purpose of this test is to check that the href attribute is present and also that the link has either itunes.apple.com
          * or music.apple.com
          * 
          * Note: While testing I noticed that some songs didn't have either link 'music.apple.com' or ''itunes.apple.com'
          * To further this test I would add a check to the conditional logic which would check if ''a[class="itunes_download_lrg"' existed
          */
            
         cy.get('a[class="itunes_download_lrg"').then(($a) => {
            if ($a.text().includes('music.apple.com')) {
                cy.should('have.attr', 'href')
                .and('include', 'music.apple.com');
            }
            else if ($a.text().includes('itunes.apple.com')){
                cy.should('have.attr', 'href')
                .and('include', 'itunes.apple.com');
            }
         })

     });

    it('See More link takes user to goes to last play song page', () => {
        /**
         * The purpose of this test is to check that the See More link takes user
         * to the Last Played Songs list page
         */

        cy.get('a[class="see_more"').click();
        cy.get('head > title')
        .should('contain.text', 'Last Played Songs');

    });

     it('Recently Played Songs should contain minutes ago text', () => {
        /**
         * Purpose of this test is to check that the cards under the Recently Play containers contains
         * the text 'minutes ago'.
         */

        cy.get('.last_played')
        .should('contain.text', 'minutes ago');
     });

    

})