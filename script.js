(function() {
  var appendContent = function() {
    var text = '<p>The <b>brain</b> is an <a href="/wiki/Organ_(anatomy)" title="Organ (anatomy)">organ</a> that serves as the center of the <a href="/wiki/Nervous_system" title="Nervous system">nervous system</a> in all <a href="/wiki/Vertebrate" title="Vertebrate">vertebrate</a> and most <a href="/wiki/Invertebrate" title="Invertebrate">invertebrate</a> animals. Only a few invertebrates such as <a href="/wiki/Sponge" title="Sponge">sponges</a>, <a href="/wiki/Cnidaria" title="Cnidaria">jellyfish</a>, adult <a href="/wiki/Tunicate" title="Tunicate">sea squirts</a> and <a href="/wiki/Echinoderm" title="Echinoderm">starfish</a> do not have a brain; diffuse or localised <a href="/wiki/Nerve_net" title="Nerve net">nerve nets</a> are present instead. The brain is located in the head, usually close to the primary sensory organs for such <a href="/wiki/Sense" title="Sense">senses</a> as <a href="/wiki/Visual_perception" title="Visual perception">vision</a>, <a href="/wiki/Hearing" title="Hearing">hearing</a>, <a href="/wiki/Balance_(ability)" title="Balance (ability)">balance</a>, <a href="/wiki/Taste" title="Taste">taste</a>, and <a href="/wiki/Olfaction" title="Olfaction">smell</a>. The brain is the most complex organ in a vertebrate\'s body. In a typical human, the <a href="/wiki/Cerebral_cortex" title="Cerebral cortex">cerebral cortex</a> (the largest part) is estimated to contain 15–33 billion <a href="/wiki/Neuron" title="Neuron">neurons</a>,<sup id="cite_ref-1" class="reference"><a href="#cite_note-1"><span>[</span>1<span>]</span></a></sup> each connected by <a href="/wiki/Synapse" title="Synapse">synapses</a> to several thousand other neurons. These neurons communicate with one another by means of long <a href="/wiki/Protoplasm" title="Protoplasm">protoplasmic</a> fibers called <a href="/wiki/Axon" title="Axon">axons</a>, which carry trains of signal pulses called <a href="/wiki/Action_potential" title="Action potential">action potentials</a> to distant parts of the brain or body targeting specific recipient cells.</p><p><a href="/wiki/Physiology" title="Physiology">Physiologically</a>, the function of the brain is to exert centralized control over the other organs of the body. The brain acts on the rest of the body both by generating patterns of muscle activity and by driving the secretion of chemicals called <a href="/wiki/Hormone" title="Hormone">hormones</a>. This centralized control allows rapid and coordinated responses to changes in the <a href="/wiki/Environment_(biophysical)" title="Environment (biophysical)">environment</a>. Some basic types of responsiveness such as <a href="/wiki/Reflex" title="Reflex">reflexes</a> can be mediated by the spinal cord or peripheral <a href="/wiki/Ganglion" title="Ganglion">ganglia</a>, but sophisticated purposeful control of behavior based on complex sensory input requires the information integrating capabilities of a centralized brain.</p><p>The operations of individual brain cells are now understood in considerable detail but the way they cooperate in ensembles of millions is yet to be solved.<sup id="cite_ref-2" class="reference"><a href="#cite_note-2"><span>[</span>2<span>]</span></a></sup> Recent models in modern neuroscience treat the brain as a biological <a href="/wiki/Computer" title="Computer">computer</a>, very different in mechanism from an electronic computer, but similar in the sense that it acquires information from the surrounding world, stores it, and processes it in a variety of ways, analogous to the <a href="/wiki/Central_processing_unit" title="Central processing unit">central processing unit</a> (CPU) in a computer.</p><p>This article compares the properties of brains across the entire range of animal species, with the greatest attention to vertebrates. It deals with the <a href="/wiki/Human_brain" title="Human brain">human brain</a> insofar as it shares the properties of other brains. The ways in which the human brain differs from other brains are covered in the human brain article. Several topics that might be covered here are instead covered there because much more can be said about them in a human context. The most important is <a href="/wiki/Brain_disease" title="Brain disease" class="mw-redirect">brain disease</a> and the effects of brain damage, covered in the human brain article because the most common diseases of the human brain either do not show up in other species, or else manifest themselves in different ways.</p>',
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