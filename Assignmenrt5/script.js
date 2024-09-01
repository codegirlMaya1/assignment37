function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
const paragraph = document.getElementById('myParagraph');

paragraph.addEventListener('mouseover', function() {
    paragraph.style.color = 'blue';
    paragraph.style.textTransform = 'uppercase';
});

paragraph.addEventListener('mouseout', function() {
    paragraph.style.color = 'black';
    paragraph.style.textTransform = 'none';
});
document.querySelectorAll('.input-box').forEach(input => {
    input.addEventListener('click', (event) => {
        event.target.focus();
    });
});
const img = document.getElementById('myImage');

        img.addEventListener('mouseover', () => {
            img.src = 'hello.png';
        });

        img.addEventListener('mouseout', () => {
            img.src = 'flower.png';
        });