/** 
 * We’d like you to perform the same test we looked at during the interview, and would like to see what your solution would look like given more time and out of interview conditions.

The main things we’re looking for is good structure and tests which aren’t too brittle. Aim for coverage of key things (the most useful tests),
it doesn’t necessarily need to be fully comprehensive (carefully select what you can get done in the time).

Please provide your solution in a Github repo (or your git hosting platform of choice).
For Github please add the usernames byrion and chisnet to the project so we can view.
 * 
 * 
*/

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

        1/**
          * Purpose of this test is to check that Most Recent songs displays the last four played songs.
          */
         cy.get('article.track')
         .should('have.length', 4);
        
     })

     it('Apple music link should have href attribute and link should include apple.com', () => {
      
         /**
          * The purpose of this test is to check that the href attribute is present and also that the link has either itunes.apple.com
          * or music.apple.com
          * If either of them are not present the we state that the element  'a[class="itunes_download_lrg"' does not exist
          */

         cy.on('uncaughtException', (err, runnable) => {
             expect(err.message).to.include('something about the error');
             done();
             return false;
         })

           
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
         *  to the Last Played Songs list page
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