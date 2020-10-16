(function() {
  var appendContent = function() {
    var text = '<p>Hii Sani,</br> Tere birthday par kehne ka socha tha, lekin tu us din apne dosto k saath busy hoga isliye ajj bol rhi hu. Tere birthday aur us se pehle mil nahi paayi uske liye abhi bhi bura lagta hai lekin isi ek virtual gift hi samajle ;) </br></br> Shayad humne june me baate karna chaalu kiya tha jab tujhe pata chala k kya suffer kar rahi hu, starting me raat ko mere rone k karan tu jaag kr call krta taaki mai rou na, mai bimaar hoti hu phir bhi tu raat tak jaga tha jab bhi mera mood off hota hai ro turant aa jata hai, itna koi sacha dost hi kar sakta hai.</br></br> Mujhe pata hai ke mai tujhe bohot pareshan karti hu kabhi kabhi message karke aur memes bhejkr lekin muze pareshan karne me maza ata hai. Tu khud Ko bhura bhura bolta hai lekin tu hai nahi. Tu ander se bohot achha hai ye matter karta hai. Ichha hoti hai milne ki lekin tere phaltu k daapan aur misunderstanding se nahi mil paaye uske liye tere par bohot gussa ata hai. Beech me tune baat karna chhod diya tha aur mere saath tab bohot kuch hua tha</br></br> Isliye bete maine sabko snap par se nikaal diya tha lekin aisa kuch personal lene ki jarurat nahi hai aur haan mere follower following me T hai iska mtlb ye nahi ki mai koi relationship me hu. Aisa kuch nahi hai. Tu bhi mere liye bohot important hai. Infact sab me se favourite hai. Kabhi bhi koi misunderstanding aa jaye dimaag me to please clear kar liya kar dimaag mat chala jyada apna. Aur meri kisi bhi baat ka bura mat mana kar agar lage bura to bol diya kar jitna bole itna sorry tere liye lekin phaltu me itni achhi bonding mat toda kar. Apni jaisi friendship haina vaisa bohot kam hoti hai logo ki. Itni understanding kahi nahi milegi jitni apne me hai. Aur maine itni baat ladkiyo se bhi closely share nahi ki hogi jitni tujhse ki hai. Aur ye baate dil se nikli hai dimaag se nahi. Itna to kabhi pyaar de na paau dost k tareeke aur aage jaakr apne kabhi baat bhi na kar paaye lekin kam se kam duao me to yaad rakhna.</br></br> Yours truly,</br> Gunjan.</p>',
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
