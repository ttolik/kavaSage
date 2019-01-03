function setup() {
    
    TweenMax.set("#main", {
    scale:0,
    transformOrigin:"bottom center"
  });
  
    TweenMax.set(".st1", {
    scale:0,
    transformOrigin:"center"
  });
  
     TweenMax.set(".st2", {
    scale:0,
    transformOrigin:"center"
  });
  
  TweenMax.set("#s-branch-1", {
    scale:0,
    transformOrigin:"right top"
  });
  
   TweenMax.set("#s-branch-2", {
    scale:0,
    transformOrigin:"right bottom"
  });
  
     TweenMax.set("#s-branch-3", {
    scale:0,
    transformOrigin:"right bottom"
  });
  

  TweenMax.set("#s-branch-4", {
    scale:0,
    transformOrigin:"center bottom"
  });
  
    
     TweenMax.set("#s-branch-5", {
    scale:0,
    transformOrigin:"right bottom"
  });
  
  TweenMax.set("#s-branch-6", {
    scale:0,
    transformOrigin:"right bottom"
  });
  
  TweenMax.set("#s-branch-7", {
    scale:0,
    transformOrigin:"right bottom"
  });
  
  TweenMax.set("#s-branch-8", {
    scale:0,
    transformOrigin:"right bottom"
  });
  
  TweenMax.set("#s-branch-9", {
    scale:0,
    transformOrigin:"right bottom"
  });
  
    TweenMax.set("#s-branch-10", {
    scale:0,
    transformOrigin:"left bottom"
  });
  
    TweenMax.set("#s-branch-11", {
    scale:0,
    transformOrigin:"left bottom"
  });
  
    TweenMax.set("#s-branch-12", {
    scale:0,
    transformOrigin:"right bottom"
  });
  
    TweenMax.set("#s-branch-13", {
    scale:0,
    transformOrigin:"right bottom"
  });
  
    TweenMax.set("#s-branch-14", {
    scale:0,
    transformOrigin:"right bottom"
  });
  
    TweenMax.set("#s-branch-15", {
    scale:0,
    transformOrigin:"left top"
  });
  
    TweenMax.set("#s-branch-16", {
    scale:0,
    transformOrigin:"left center"
  });
  
    TweenMax.set("#s-branch-17", {
    scale:0,
    transformOrigin:"right bottom"
  });
  
    TweenMax.set("#s-branch-18", {
    scale:0,
    transformOrigin:"left top"
  });
  
    TweenMax.set("#s-branch-19", {
    scale:0,
    transformOrigin:"right bottom"
  });
  
   TweenMax.set("#s-branch-20", {
    scale:0,
    transformOrigin:"left bottom"
  });
  
  TweenMax.set("#m-branch-1", {
    scale:0,
    transformOrigin:"right bottom"
  });
  
   TweenMax.set("#m-branch-2", {
    scale:0,
    transformOrigin:"right bottom"
  });
   TweenMax.set("#m-branch-3", {
    scale:0,
    transformOrigin:"right bottom"
  });
   TweenMax.set("#m-branch-4", {
    scale:0,
    transformOrigin:"left bottom"
  });
   TweenMax.set("#m-branch-5", {
    scale:0,
    transformOrigin:"left bottom"
  });
     TweenMax.set("#m-branch-6", {
    scale:0,
    transformOrigin:"left bottom"
  });
  TweenMax.set("#shadow", {
    scale:0,
    transformOrigin:"15px 8px"
  });
  TweenMax.set("#tree", {
    scale:0,
    transformOrigin:"154px bottom"
  });
  TweenMax.set("#leaf-rb", {
    scale:0,
    rotation:'-60cw',
    y: -15,
    transformOrigin:"left bottom"
  });
  TweenMax.set("#leaf-rm", {
    scale:0,
    rotation:'-50cw',
    y: 30,
    transformOrigin:"left bottom"
  });
  TweenMax.set("#leaf-lb", {
    scale:0,
    rotation:'60cw',
    y: -80,
    transformOrigin:"right bottom"
  });
  TweenMax.set("#leaf-lm", {
    scale:0,
    rotation:'40cw',
    y: -90,
    transformOrigin:"right bottom"
  });

  TweenMax.set("#leaf-top", {
    scale:0,
    transformOrigin:"center bottom"
  });

  TweenMax.set("#leaf-rb g", {
    scale:0,
    transformOrigin:"left 60px"
  });
  TweenMax.set("#leaf-rm g", {
    scale:0,
    transformOrigin:"22px 140px"
  });
  TweenMax.set("#leaf-lb g", {
    scale:0,
    transformOrigin:"right 56px"
  });
  TweenMax.set("#leaf-lm g", {
    scale:0,
    transformOrigin:"106px bottom"
  });
}

// This should be called on document.load
function animate() {
var tl = new TimelineMax({
      delay: 0.42,
      repeat: 0,
      repeatDelay: 2,
      yoyo: true
    });
  
   tl.to("#tinybranch", 2, {
      scale:1,
       delay:2.35,
    rotation:'0cw'

   },0).to("#shadow", 2, {
      scale:1
    }, 0).to("#tree", 2, {
      scale:1
    }, 0).to("#main",2, {
        scale:1
         }, 0).to(".st1",2, {
        scale:1,
      delay:4.5
     
        }, 0).to(".st2",2, {
        scale:1,
      delay:5.5
    }, 0).to("#s-branch-1",2, {
        scale:1,
        delay:3.0
     }, 0).to("#s-branch-2",2, {
        scale:1,
        delay:3.0
     }, 0).to("#s-branch-3",2, {
        scale:1,
        delay:3.0
     }, 0).to("#s-branch-4",2, {
        scale:1,
        delay:3.0
      }, 0).to("#s-branch-5",2, {
        scale:1,
        delay:3.0
      }, 0).to("#s-branch-4",2, {
        scale:1,
        delay:3.0
      }, 0).to("#s-branch-5",2, {
        scale:1,
        delay:3.0
      }, 0).to("#s-branch-4",2, {
        scale:1,
        delay:3.0
      }, 0).to("#s-branch-5",2, {
        scale:1,
        delay:3.0
     
      }, 0).to("#s-branch-9",2, {
        scale:1,
        delay:3.0
     
      }, 0).to("#s-branch-10",2, {
        scale:1,
        delay:3.2
     
      }, 0).to("#s-branch-11",2, {
        scale:1,
        delay:3.0
     
      }, 0).to("#s-branch-12",2, {
        scale:1,
        delay:3.0
      }, 0).to("#s-branch-13",2, {
        scale:1,
        delay:3.0
     
      }, 0).to("#s-branch-14",2, {
        scale:1,
        delay:3.0
     
      }, 0).to("#s-branch-15",2, {
        scale:1,
        delay:3.0
     
      }, 0).to("#s-branch-16",2, {
        scale:1,
        delay:3.9
      }, 0).to("#s-branch-17",2, {
        scale:1,
        delay:3.0
      }, 0).to("#s-branch-18",2, {
        scale:1,
        delay:3.0
      }, 0).to("#s-branch-19",2, {
        scale:1,
        delay:3.0
     }, 0).to("#s-branch-20",2, {
        scale:1,
        delay:3.0
    }, 0).to("#m-branch-1",2, {
        scale:1,
        delay:1.1
    }, 0).to("#m-branch-2",2, {
        scale:1,
        delay:2.6
      }, 0).to("#m-branch-3",2, {
        scale:1,
        delay:1.6
      }, 0).to("#m-branch-4",2, {
        scale:1,
        delay:1.6
      }, 0).to("#m-branch-5",2, {
        scale:1,
        delay:1.1
     }, 0).to("#m-branch-6",2, {
        scale:1,
        delay:1.1
    }, 0).to("#leaf-rb", 2, {
      scale:1,
      rotation:'0cw',
      y: 0,
      delay: 0.35
    }, 0).to("#leaf-rm", 2, {
      scale:1,
      rotation:'0cw',
      y: 0,
      delay: 0.35
    }, 0).to("#leaf-lb", 2, {
      scale:1,
      rotation:'0cw',
      y: 0,
      delay: 0.35
    }, 0).to("#leaf-lm", 2, {
      scale:1,
      rotation:'0cw',
      y: 0,
      delay: 0.35
    }, 0).to("#leaf-top", 2.5, {
      scale:1,
      delay: 0.35
    }, 0).to("#leaf-lb g", 2.25, {
      scale:1,
      delay: 0.5
    }, 0).to("#leaf-lm g", 2.25, {
      scale:1,
      delay: 0.6
    }, 0).to("#leaf-rb g", 2.25, {
      scale:1,
      delay: 0.5
    }, 0).to("#leaf-rm g", 2.25, {
      scale:1,
      delay: 0.6
    }, 0);

    return tl;
}

function stopAndReset() {
  TweenMax.killAll(false, true, false);
      TweenMax.set("#main", {clearProps:"all"});

  TweenMax.set("#tree", {clearProps:"all"});
  TweenMax.set("#shadow", {clearProps:"all"});
  TweenMax.set("#leaf-top", {clearProps:"all"});
  TweenMax.set("#leaf-rb", {clearProps:"all"});
  TweenMax.set("#leaf-rm", {clearProps:"all"});
  TweenMax.set("#leaf-lb", {clearProps:"all"});
  TweenMax.set("#leaf-lm", {clearProps:"all"});
  TweenMax.set("#leaf-top", {clearProps:"all"});
  TweenMax.set("#leaf-rb g", {clearProps:"all"});
  TweenMax.set("#leaf-rm g", {clearProps:"all"});
  TweenMax.set("#leaf-lb g", {clearProps:"all"});
  TweenMax.set("#leaf-lm g", {clearProps:"all"});
}

function playAgain() {
  stopAndReset();
  setup();
  animate();
}

stopAndReset();
setup();
window.onload = animate;