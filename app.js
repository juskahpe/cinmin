// Örnek kullanım: Şıkları kontrol et
function highlightOption(option) {
    const options = ['optionA', 'optionB', 'optionC', 'optionD'];
    const correctAnswer = 'optionB'; // Doğru cevap için örnek
    options.forEach(opt => {
        const element = document.getElementById(opt);
        if (opt === correctAnswer) {
            element.style.color = 'green'; // Doğru şık yeşil
        } else {
            element.style.color = 'red'; // Yanlış şık kırmızı
        }
    });
}

// Bu fonksiyonu istediğin bir yerden çağırabilirsin
highlightOption();
