document.querySelectorAll('.star-rating input').forEach(input => {
    input.addEventListener('change', function() {
        const movieId = this.closest('.star-rating').dataset.movieId;
        const rating = this.value;
        console.log(`Filme ID: ${movieId}, Nova Classificação: ${rating}`);
    });
});