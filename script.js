(function() {
  var appendContent = function() {
    var text = '<p>HII didi,</br>   Mujhe nahi pata</p>',
        contentDiv = document.querySelector('.content'),
        card = document.querySelector('#loadingCard');
    
    var letShow = function() {
          TweenMax.to(contentDiv, .3,
          {
            x: 50,
            rotation: '5deg'
            
          })},
        letHide = function() {
      TweenMax.to(contentDiv, .3,
      {
        x: 0,
        rotation: '0deg'
      })
    };
                  
    
    card.addEventListener('mouseover', letShow)
    card.addEventListener('mouseleave', letHide)
    
    contentDiv.innerHTML = text;
    contentDiv.offsetWidth = loadingWidth;
    
    card.addEventListener('click', function() {
      var contentAnimation = new TimelineMax();
      this.removeEventListener('mouseover', letShow);
      letHide();
      contentAnimation.add(TweenMax.to(card, 1.2, {
                  width: loadingWidth*2,
        ease: Elastic.easeOut
                }));
      
      console.log( loadingWidth );
      
      
      
    })
    
    
    
  }
  
  
  var animation = new TimelineMax(),
      loadingWidth = document.querySelector('#loadingCard').offsetWidth;
  
  animation.add(TweenMax.to('.cover', 3, {
                  width: loadingWidth
                }));
  animation.add(TweenMax.to('#loadingCard', 1, {
                  height: 384,
                  ease: Elastic.easeOut,
                  cursor: 'pointer'
                }));
  animation.add(TweenMax.staggerTo('.stagger', .7, {
                  opacity: 1,
                  display: 'block',
                  delay: -1,
                }, 0.2, appendContent));


}())
