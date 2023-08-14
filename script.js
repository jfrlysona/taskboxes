let selectBox, selectAnimation, durationOfAnimation;

setTimeout(() => {
    selectBox = prompt('Select box to animate:\n1. pink\n2. green\n3. orange', '1');
    
    setTimeout(() => {
        selectAnimation = prompt('Select animation:\n1. move on edges\n2. rotate and scale\n3. random color\n4. all at the same time', '4');
        
        setTimeout(() => {
            durationOfAnimation = prompt('Enter animation duration:', '2.5');
            
            startAnimation();
        }, 0);
    }, 0);
}, 1000);

function startAnimation() {
    let element = document.querySelectorAll('.box');
    
    element.forEach((box, index) => {
        box.style.animation = '';
        
        if ((selectBox === '1' && index === 0) ||
            (selectBox === '2' && index === 1) ||
            (selectBox === '3' && index === 2)) {
            applySelectedAnimation(box);
        }
    });
}

function applySelectedAnimation(box) {
    switch (selectAnimation) {
        case '1':
            box.style.animation = `moveOnEdges ${durationOfAnimation}s`;
            box.style.position = 'relative';
            break;
        case '2':
            box.style.animation = `rotateAndScale ${durationOfAnimation}s`;
            break;
        case '3':
            box.style.animation = `randomColor ${durationOfAnimation}s`;
            break;
        case '4':
            box.style.animation = `all ${durationOfAnimation}s`;
            box.style.position = 'relative';
            break;
        default:
            alert('Chose the number from 1 to 4!');
            break;
    }
}
