    //Code For Displaying Selected content on button
    const selectableButtons = document.querySelectorAll('.button');
    const displayButton = document.getElementById('btn');

    let output = '';
    selectableButtons.forEach(button => {
    button.addEventListener('click', () => {
    output = button.value || button.textContent;
    document.querySelector('.output').textContent = output;
        });
    });
    //Code for Scrolling Image Background
    const image = document.getElementById("scrolling-image");
    let imagePosition = 0;
                    
    function scrollImage() {
        imagePosition++;
    image.style.transform = `translateY(-${imagePosition}px)`;
                    
    if (imagePosition >= image.height - 200) { 
        imagePosition = 0;
        }
    requestAnimationFrame(scrollImage);
        }
    scrollImage();