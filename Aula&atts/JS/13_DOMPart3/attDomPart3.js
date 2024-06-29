document.getElementById('btnChangeColor').addEventListener('click', function() {
    document.querySelector('#section1 p').style.backgroundColor = 'lightblue';
});

// Marcar todos os parágrafos da seção 2
document.getElementById('btnMarkParagraphs').addEventListener('click', function() {
    const paragraphs = document.querySelectorAll('#section2 p');
    paragraphs.forEach(paragraph => {
        paragraph.classList.toggle('highlight');
    });
});