

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
// https://ihatetomatoes.net/how-to-make-page-transitions-in-html/



function init(){
    
    const loader = document.querySelector('.loader');

    // reset position of the loading screen
    gsap.set(loader, {
        scaleX: 0, 
        rotation: 10, 
        xPercent: -5,
        yPercent: -50, 
        transformOrigin: 'left center', 
        autoAlpha: 1
    });

    function loaderIn() {
        // GSAP tween to stretch the loading screen across the whole screen
        return gsap.fromTo(loader, 
            {
                rotation: 20,
                scaleX: 0,
                xPercent: -5
            },
            { 
                duration: 1.3,
                xPercent: 0,
                scaleX: 1, 
                rotation: 0,
                ease: 'Power4.inOut', 
                transformOrigin: 'center'
            });
    }

    async function loaderAway() {
        // GSAP tween to hide the loading screen
        await sleep(500);
        return gsap.to(loader, { 
            duration: 1.3, 
            scaleX: 0,
            xPercent: 5, 
            rotation: -20, 
            transformOrigin: 'center', 
            ease: 'Power4.inOut'
        });
    }

    // do something before the transition starts
    barba.hooks.before(() => {

        document.querySelector('html').classList.add('is-transitioning');
        barba.wrapper.classList.add('is-animating');

    });

    // do something after the transition finishes
    barba.hooks.after(() => {

        document.querySelector('html').classList.remove('is-transitioning');
        barba.wrapper.classList.remove('is-animating');
        

    });

    // scroll to the top of the page
    barba.hooks.enter(() => {

        window.scrollTo(0, 0);

    });



    
    barba.init({
        sync:false,
        transitions: [{
            async leave() {

              await loaderIn();

                
        
            },

            enter() {
              
              loaderAway();

              // sleep for 1000ms to wait for webpage to load
              //add shit here
            }
        }],
      preventRunning: true
    
    })

}
  


window.addEventListener('load', function(){
  
  init();

});



// minor functions begin



function mailTo(){
  window.location.href = "mailto:sebastian.ong@hotmail.com"
  
}


