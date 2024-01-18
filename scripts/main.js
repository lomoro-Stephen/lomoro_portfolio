var typewriter = document.getElementById('typewriter');
var texts = [' Graphics Designer', 'UI & UX Designer', 'Web Designer'];
var currentText = 0;
var letterCount = 0;

function type() {
    if (letterCount < texts[currentText].length) {
        letterCount++;
        typewriter.textContent = texts[currentText].substring(0, letterCount);
        setTimeout(type, 100);
    } else {
        currentText++;
        if (currentText >= texts.length) {
            currentText = 0;
        }
        letterCount = 0;
        setTimeout(type, 2000);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    type();
});

//lazy load of images

const lazyImage =document.querySelectorAll('.lazy');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            let img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('loading');
            img.classList.add('loaded')
            observer.unobserve(img);
        }
    })
});
lazyImage.forEach(img => {
    observer.observe(img);
});



function openForm() {
    document.getElementById("myForm").style.display = "block";
    setTimeout(closeForm, 500000);  // close the form after 5 seconds
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//popup
function submitHireForm() {
    // You can add your own logic to handle the form submission
    // For simplicity, this example just displays the popup

    // Display the custom popup
    document.getElementById('successPopup').style.display = 'block';
    // Close the popup after 5 minutes (300,000 milliseconds)
    setTimeout(closeThanksPopup, 500000);
}

function closeThanksPopup() {
    document.getElementById('successPopup').style.display = 'none';

}
