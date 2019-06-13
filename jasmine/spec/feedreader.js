/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    
    describe('RSS Feeds', function () {
        //checks to see if allFeeds variable is defined and not empty
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        //loops through allFeeds object to test if the URL is defined and makes sure its not empty
        it('should have URL defined and is not empty', () => {

            for (let index = 0; index < allFeeds.length; index++) {

                expect(allFeeds[index].url).toBeDefined;
                expect(allFeeds[index].url.length).not.toBe(0);

            }
        });


        //loops through allFeeds object to test if the name is defined and makes sure its not empty
        it('should have name defined and is not empty', () => {

            for (let index = 0; index < allFeeds.length; index++) {

                expect(allFeeds[index].name).toBeDefined;
                expect(allFeeds[index].name.length).not.toBe(0);

            }
        });

    });


    
    describe('The menu', () => {
       //checking to see if the menu is hidden by default
        it('is hidden by default', () => {

            const body = document.getElementsByTagName('body')[0];
            expect(body.classList.contains('menu-hidden')).toBe(true);



        });

        //checks to see that when the menu icon is clicked it changes the visibility of the menu
        it('changes visibility when the menu icon is clicked', () => {

            const body = document.getElementsByTagName('body')[0];

            const menuIcon = document.querySelector('.menu-icon-link');
            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);

        });
    });

   
    describe('Initial Entries', () => {

        //makes sure loadFeed is done before testing
    beforeEach((done) => {
        loadFeed(0, done);
    });
        //tests to see if theres atleast one entry within the feed container
        it('should have atleast a single entry within the feed container', () => {
            const feed = document.querySelector('.feed');
            expect(feed.hasChildNodes()).toBe(true);
        });
        
    });       

    
    describe('New Feed Selection', () => {

        let feedOne;
        let feedTwo;
        //before testing load 2 separate feeds and store them in variables to compare them later
        beforeEach((done) => {            
            loadFeed(0, function(){
                const feed = document.querySelector('.feed');
                feedOne = feed.innerHTML;
                done();
            });

            loadFeed(1, function(){
                const feed = document.querySelector('.feed');
                feedTwo = feed.innerHTML;
                done();
            });
        });
        // tests the 2 feeds to see if the content changed
        it('when new feed is loaded, content should change', () => {
            
            expect(feedOne === feedTwo).toBe(false);

        });
    });

    
}());