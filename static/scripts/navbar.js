

function navbar_auto_disable(){
  
  let path = window.location.pathname;
  let listItems= document.getElementById('ul-of-el').getElementsByTagName('li');
  // returns list of li elements in navbar ul tag
  
  
  
  for (let i = 0; i <= listItems.length - 1; i++) {

    if(listItems[i]).href === path){
      listItems[i].classList.remove('active');
      listItems[i].classList.add('disabled');
      break;
    }
    
  }

}


function hi(){
  alert('hi')
}
//to debug