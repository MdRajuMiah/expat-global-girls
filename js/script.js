const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
        const icon = question.querySelector('i');
        const answer = question.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        } else {
            answer.style.display = 'block';
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        }
    });
});
