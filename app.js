document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', () => {
        // Seçilen seçeneğin yeşil olmasını sağlar
        option.style.backgroundColor = 'green';

        // Diğer seçeneklerin kırmızı olmasını sağlar
        document.querySelectorAll('.option').forEach(otherOption => {
            if (otherOption !== option) {
                otherOption.style.backgroundColor = 'red';
            }
        });
    });
});
