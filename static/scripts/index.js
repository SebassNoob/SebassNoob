

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

//controls which nav-pills are active and inactive based on pathname
function navbar_active(){
  try{
    let path= window.location.pathname;
    let lis = document.getElementById("nav-content").getElementsByTagName("li");
  
    for (let i=0; i<lis.length ; i++ ){
      let selected_a = lis[i].children[0];
      if (selected_a.pathname.toString() == path.toString()){
        selected_a.classList.add('disabled');
        selected_a.classList.add('active');
      }
      else{
      
        selected_a.classList.remove('active');
      }
    
    }
  } catch(e){
    console.log(e)
  }
}


//Stack Overflow code that is now MINE!!
function reloadCss()
{
    let links = document.getElementsByTagName("link");
    for (var cl in links)
    {
        var link = links[cl];
        if (link.rel === "stylesheet")
            
            link.href += "";
    }
}

function removeCss()
{
    let links = document.getElementsByTagName("link");
    for (var cl in links)
    {
      
        var link = links[cl];

        if (link.rel === "stylesheet"){


          document.getElementsByTagName("head")[0].removeChild(link);          
        }
            
    }
}




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
                duration: 0.3,
                xPercent: 0,
                scaleX: 1, 
                rotation: 0,
                ease: 'Power4.inOut', 
                transformOrigin: 'center'
            });
    }

    function loaderAway() {
        // GSAP tween to hide the loading screen

        return gsap.to(loader, { 
            duration: 0.5,
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
      //exp_edu.css hates loading
      navbar_active();
      
      

      
        

    });

    // scroll to the top of the page
    barba.hooks.enter(async () => {
        await sleep(500);
        window.scrollTo(0, 0);

    });

    barba.hooks.beforeEnter(()=>{
      
      removeCss();
      
    });

    
    barba.init({
        sync:false,
        transitions: [{
            async leave() {

              await loaderIn();

                
        
            },

            enter() {

              loaderAway();
              
              //for some reason exp_edu.css DOES NOT want to load on transition 
              //so here is a manual check

              if (window.location.pathname === '/exp_edu'){

            let link = document.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "static/exp_edu.css");
            document.getElementsByTagName("head")[0].appendChild(link);

              }
              reloadCss();
              //add shit here
            }
        }],
      preventRunning: true
    
    })

}
  


window.addEventListener('load', function(){
  
  navbar_active();
  init();
  reloadCss();
});



// minor functions begin



function mailTo(){
  window.location.href = "mailto:sebastian.ong@hotmail.com"
  
}


