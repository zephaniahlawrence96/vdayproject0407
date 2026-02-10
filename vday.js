document.addEventListener('DOMContentLoaded', function(){

    // reveal on scroll
    var reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        var obs = new IntersectionObserver(function(entries){
            entries.forEach(function(entry){
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    obs.unobserve(entry.target);
                }
            });
        }, {threshold: 0.12});
        reveals.forEach(function(r){ obs.observe(r); });
    } else {
        // fallback
        reveals.forEach(function(r){ r.classList.add('in-view'); });
    };


    // document.addEventListener('scroll', function() {
    // const scrollPosition = window.scrollY;
    // const revealElements = document.querySelectorAll('.grow-on-scroll');

    //     revealElements.forEach(element => {
    //         const elementPosition = element.getBoundingClientRect().top + scrollPosition;
    //         const distance = Math.abs(scrollPosition - elementPosition);
    //         const scale = 1 + Math.min(distance / 500, 0.2); // Adjust the divisor for sensitivity

    //         element.style.transform = `scale(${scale})`;
    //         });
    // });


});


document.addEventListener('DOMContentLoaded', () => {

    const canvas = document.getElementById('canvas');
    const btns = document.querySelectorAll('button');

    document.addEventListener('mousemove', function(event) {
        canvas.style.pointerEvents = 'all';
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        btns.forEach(btn => {
            const btnspace = btn.getBoundingClientRect();

            if (
                mouseX >= btnspace.left && mouseX <= btnspace.right &&
                mouseY >= btnspace.top && mouseY <= btnspace.bottom
            ) {
                // Mouse is over the target element, change pointer-events of the other element
                // console.log(`In position`);
                canvas.style.pointerEvents = 'none';
                // targetElement.classList.add('active');
            }       
        });
    });

    document.addEventListener('touchmove', function(event) {
        canvas.style.pointerEvents = 'all';
        const touch = event.touches[0];
        const touchX = touch.clientX;
        const touchY = touch.clientY;

        btns.forEach(btn => {
            const btnspace = btn.getBoundingClientRect();

            if (
                touchX >= btnspace.left && touchX <= btnspace.right &&
                touchY >= btnspace.top && touchY <= btnspace.bottom
            ) {
                // Mouse is over the target element, change pointer-events of the other element
                // console.log(`In position`);
                canvas.style.pointerEvents = 'none';
                // targetElement.classList.add('active');
            }
        });
        event.preventDefault();
    }, { passive: false });
});


document.addEventListener('DOMContentLoaded', () => {
    const yesbtn = document.querySelector('.yesbtn');
    const yeshover = document.querySelector('.yeshover');
    const nobtn = document.querySelector('.nobtn');
    const nohover = document.querySelector('.nohover');
    const nobtn2 = document.querySelector('.nobtn2');
    const hopeful = document.querySelector('.hopeful');
    const smile = document.querySelector('.smile');
    const cry = document.querySelector('.cry');
    const sad = document.querySelector('.sad');
    const droop = document.querySelector('.droop');
    const message1 = document.querySelector('.message1');
    const message2 = document.querySelector('.message2');
    const envelope = document.querySelector('.envelope');
    const emotehover = document.querySelector('.emotehover');
    const emotehover2 = document.querySelector('.emotehover2');


    document.addEventListener('touchmove', function(event) {
        // canvas.style.pointerEvents = 'all';
        yeshover.classList.remove('hover');
        const touch = event.touches[0];
        const touchX = touch.clientX;
        const touchY = touch.clientY;

        const btnspace = yesbtn.getBoundingClientRect();

            if (
                touchX >= btnspace.left && touchX <= btnspace.right &&
                touchY >= btnspace.top && touchY <= btnspace.bottom
            ) {
                yeshover.classList.add('hover');
                hopeful.style.display = 'inline';
                smile.style.display = 'none';
                sad.style.display = 'none';
                cry.style.display = 'none';
                droop.style.display = 'none';
                message1.style.visibility = 'hidden';
                envelope.style.display = 'none';
            }  
        event.preventDefault(); 
    }, { passive: false });


    document.addEventListener('touchmove', function(event) {
        // canvas.style.pointerEvents = 'all';
        nohover.classList.remove('hover');
        const touch = event.touches[0];
        const touchX = touch.clientX;
        const touchY = touch.clientY;

        const btnspace = nobtn.getBoundingClientRect();

            if (
                touchX >= btnspace.left && touchX <= btnspace.right &&
                touchY >= btnspace.top && touchY <= btnspace.bottom
            ) {
                nohover.classList.add('hover');
                sad.style.display = 'inline';
                smile.style.display = 'none';
                cry.style.display = 'none';
                droop.style.display = 'none';
                hopeful.style.display = 'none';
                message1.style.visibility = 'hidden';
                envelope.style.display = 'none';
            }
        event.preventDefault();  
    }, { passive: false });


    document.addEventListener('touchmove', function(event) {
        // canvas.style.pointerEvents = 'all';
        emotehover.classList.remove('hover');
        const touch = event.touches[0];
        const touchX = touch.clientX;
        const touchY = touch.clientY;

        const btnspace = cry.getBoundingClientRect();

            if (
                touchX >= btnspace.left && touchX <= btnspace.right &&
                touchY >= btnspace.top && touchY <= btnspace.bottom
            ) {
                emotehover.classList.add('hover');
            }
        event.preventDefault();  
    }, { passive: false });


    document.addEventListener('touchmove', function(event) {
        // canvas.style.pointerEvents = 'all';
        emotehover2.classList.remove('hover');
        const touch = event.touches[0];
        const touchX = touch.clientX;
        const touchY = touch.clientY;

        const btnspace = envelope.getBoundingClientRect();

            if (
                touchX >= btnspace.left && touchX <= btnspace.right &&
                touchY >= btnspace.top && touchY <= btnspace.bottom
            ) {
                emotehover2.classList.add('hover');
            }
        event.preventDefault();  
    }, { passive: false });


    yesbtn.addEventListener('mouseover', (event) => {
        hopeful.style.display = 'inline';
        smile.style.display = 'none';
        sad.style.display = 'none';
        cry.style.display = 'none';
        droop.style.display = 'none';
        message1.style.visibility = 'hidden';
        envelope.style.display = 'none';
    })
    nobtn.addEventListener('mouseover', (event) => {
        sad.style.display = 'inline';
        smile.style.display = 'none';
        cry.style.display = 'none';
        droop.style.display = 'none';
        hopeful.style.display = 'none';
        message1.style.visibility = 'hidden';
        envelope.style.display = 'none';
    })
    nobtn2.addEventListener('mouseover', (event) => {
        // sad.style.display = 'inline';
        // smile.style.display = 'none';
        cry.style.display = 'none';
        droop.style.display = 'inline';
        hopeful.style.display = 'none';
        message1.style.visibility = 'hidden';
        envelope.style.display = 'none';
    })

    yesbtn.addEventListener('click', (event) => {
        smile.style.display = 'none';
        hopeful.style.display = 'none';
        cry.style.display = 'inline';
        message1.style.visibilty = 'visible';
        yesbtn.style.color = 'green';
        nobtn.style.color = '';
        nobtn2.style.color = '';
        message1.style.visibility = 'visible';
        // document.querySelector('.yeshover').color = 'green';
    })
    nobtn.addEventListener('click', (event) => {
        sad.style.display = 'none';
        smile.style.display = 'none';
        droop.style.display = 'inline';
        hopeful.style.display = 'none';
        // nobtn.style.color = 'red';
        nobtn.style.visibility = 'hidden';
        nobtn2.style.display = 'inline-block';
        nobtn2.style.color = 'red';
        yesbtn.style.color = '';
        // document.querySelector('.nohover').color = 'red';
        message1.style.visibility = 'hidden';
    })




    nobtn2.addEventListener('click', (event) => {
        sad.style.display = 'none';
        smile.style.display = 'none';
        droop.style.display = 'inline';
        hopeful.style.display = 'none';
        // nobtn.style.color = 'red';
        nobtn.style.visibility = 'hidden';
        nobtn.style.pointerEvents = 'none';
        nobtn2.style.display = 'inline-block';
        nobtn2.style.color = 'red';
        yesbtn.style.color = '';
        // document.querySelector('.nohover').color = 'red';
        message1.style.visibility = 'hidden';


        // Get current position and window dimensions
        const currentTop = parseInt(nobtn2.style.top);
        // const currentBottom = parseInt(nobtn2.style.bottom);
        const currentLeft = parseInt(nobtn2.style.left);
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const elementWidth = nobtn2.offsetWidth;
        const elementHeight = nobtn2.offsetHeight;

        // Calculate new, random position within the viewport
        // Math.random() generates a number between 0 and 1
        const newTop = Math.floor(Math.random() * (windowHeight - elementHeight));
        const newLeft = Math.floor(Math.random() * (windowWidth - elementWidth));


        // Ensure the new position is not too close to the current one (optional)
        // For simplicity, we just set the new position directly here

        nobtn2.style.top = newTop + 'px';
        nobtn2.style.left = newLeft + 'px';

    })




    cry.addEventListener('click', (event) => {
        smile.style.display = 'none';
        hopeful.style.display = 'none';
        cry.style.display = 'none';
        envelope.style.display = 'inline';
        message1.style.visibility = 'hidden';
        // message2.style.display = 'inline-block';
        // hider.style.display = 'inline';
        // document.querySelector('.message2').classList.toggle('active');
        // document.querySelector('.hider').classList.toggle('active');


    })


});


document.addEventListener('DOMContentLoaded', () => {
    // const video = document.getElementById('videoElement');
    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d"),
        things = [],
        thingsCount = 124,
        mouse = {
        x: -100,
        y: -100
        },
        minDist = 150;


    canvas.width = window.outerWidth;
    canvas.height = window.outerHeight;


    function resizeCanvas() {
        canvas.width = window.outerWidth;
        canvas.height = window.outerHeight;
        // ctx.canvas.width = window.innerWidth;
        // ctx.canvas.height = window.innerHeight;
    }
    resizeCanvas();

    // 5. Add an event listener to call the resize function whenever the window size changes
    window.addEventListener('resize', resizeCanvas);



    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    // canvas.style.background = 'transparent'

    // object image
    var image = new Image();
    image.src = 'images/bubbleheartpic1.png';
    // image.src = 'https://i.pinimg.com/originals/90/2c/2b/902c2bbccb72ca76cf3bbe95741174e9.png';
    // image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Love_heart_uidaodjsdsew.gif/1200px-Love_heart_uidaodjsdsew.gif';
    // image.src = 'https://static.wixstatic.com/media/2cd43b_57438aebde5a4b0fa20c6880a9fafabf~mv2.png/v1/fill/w_320,h_272,fp_0.50_0.50/2cd43b_57438aebde5a4b0fa20c6880a9fafabf~mv2.png';

    for (var i = 0; i < thingsCount; i++) {
    let opacity = Math.random() + 0.4;
    let thingWidth = (Math.floor(Math.random() * 20) + 20) * (opacity + 0.4);
    let thingHeight = image.naturalHeight / image.naturalWidth * thingWidth;
    let speed = Math.random() * 1 + 0.24;
    things.push({
        width: thingWidth,
        height: thingHeight,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - thingHeight,
        speed: speed,
        vY: speed,
        vX: 0,
        d: Math.random() * 1.2 - 0.6, // wind or something like that
        stepSize: (Math.random()) / 20,
        step: 0,
        angle: Math.random() * 180 - 90,
        rad: Math.random(),
        opacity: opacity,
        _ratate: Math.random() // ratate 正負
    });
    }



    // // Get references to the elements
    // const video = document.getElementById('videoElement');
    // const canvas = document.getElementById('canvasElement');
    // const ctx = canvas.getContext('2d');

    // Function to draw the video frame onto the canvas
    // function drawVideoFrame() {
    //     // Ensure the video and context are available
    //     if (video.paused || video.ended) {
    //         return;
    //     }

    //     // Draw the current video frame onto the canvas
    //     ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    //     // Call this function again on the next animation frame
    //     // This creates the continuous update loop
    //     requestAnimationFrame(drawVideoFrame);
    // }

    // // Add an event listener for when the video starts playing
    // // This is when we begin drawing
    // video.addEventListener('play', function() {
    //     // Match the canvas size to the video dimensions if necessary
    //     canvas.width = video.videoWidth;
    //     canvas.height = video.videoHeight;
    //     drawVideoFrame();
    // });

    // Ensure the video starts playing automatically or prompt a user interaction to start it
    // Due to browser autoplay policies, the video may need to be muted or require user interaction to start.




    function drawThings() {
    things.map((thing) => {
        ctx.beginPath();
        thing.rad = (thing.angle * Math.PI) / 180;
        ctx.save();
        var cx = thing.x + thing.width / 2;
        var cy = thing.y + thing.height / 2;
        ctx.globalAlpha = thing.opacity;
        ctx.setTransform(
        Math.cos(thing.rad),
        Math.sin(thing.rad),
        -Math.sin(thing.rad),
        Math.cos(thing.rad),
        cx - cx * Math.cos(thing.rad) + cy * Math.sin(thing.rad),
        cy - cx * Math.sin(thing.rad) - cy * Math.cos(thing.rad)
        );
        ctx.drawImage(image, thing.x, thing.y, thing.width, thing.height);
        ctx.restore();
    });
    }

    function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawThings();
    }

    function update() {
    things.map((thing) => {
        var dist = Math.sqrt((thing.x - mouse.x) ** 2 + (thing.y - mouse.y) ** 2);
        
        if (dist < minDist) {
        var force = minDist / (dist * dist),
            xcomp = (mouse.x - thing.x) / dist,
            ycomp = (mouse.y - thing.y) / dist,
            deltaV = force * 2; // deplay when hover mouse

        thing.vX -= deltaV * xcomp;
        thing.vY -= deltaV * ycomp;
        
        if (thing.d * xcomp > 0) {
            thing.d = 0 - thing.d;
        }
        } else {
        thing.vX *= .98;

        if (thing.vY < thing.speed) {
            thing.vY = thing.speed
        }

        thing.vX += Math.cos(thing.step += (Math.random() * 0.05)) * thing.stepSize;
        }
        
        thing.y += thing.vY;
        thing.x += thing.vX + thing.d;
        
        var _angle = Math.random() + 0.2;
        // stuff.angle += _angle;
        if (thing._ratate == 0) {
        thing.angle += _angle;
        } else {
        thing.angle -= _angle;
        }
        
        if (thing.y > canvas.height) {
        reset(thing);
        }

        if (thing.x > canvas.width || thing.x < (0 - thing.width)) {
        reset(thing);
        }
    });
    }

    function reset(thing) {
    thing.opacity = Math.random() + 0.4;
    thing.width = (Math.floor(Math.random() * 20) + 20) * (thing.opacity + 0.4);
    thing.height = image.naturalHeight / image.naturalWidth * thing.width;
    thing.x = Math.floor(Math.random() * canvas.width);
    thing.y = 0 - thing.height;
    thing.speed = Math.random() * 1 + 0.5
    thing.vY = thing.speed;
    thing.vX = 0;
    // thing.angle = 0;
    // thing.size = 0;
    thing._ratate = Math.random();
    }

    canvas.addEventListener('mousemove', function(e){
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    minDist=150;
    });
    canvas.addEventListener('click', function(e) {
        minDist=0;
    });

    canvas.addEventListener('touchstart', function(e){
        const touch = e.touches[0];
        mouse.x = touch.clientX;
        mouse.y = touch.clientY;

        minDist=190;
        
    }, { passive: false });

    canvas.addEventListener('touchmove', function(e){
        const touch = e.touches[0];
        mouse.x = touch.clientX;
        mouse.y = touch.clientY;
        e.preventDefault();
    }, { passive: false });
    
    canvas.addEventListener('touchend', function(e) {
        minDist=0;
    });


    function tick() {
    draw();
    update();
    requestAnimationFrame(tick);
    }

    tick();


});


