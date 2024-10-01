// Firebase'den veya API'den gelen veri
firebase.database().ref('game').on('value', function(snapshot) {
  const data = snapshot.val();
  const selectedChoice = data.selectedChoice; // Seçilen şık (A, B, C veya D)
  const correctChoice = data.correctChoice;   // Doğru şık (A, B, C veya D)

  // Soruyu ve şıkları güncelle
  document.getElementById('question').innerText = data.question;
  document.getElementById('choiceA').innerText = `A: ${data.choices.A}`;
  document.getElementById('choiceB').innerText = `B: ${data.choices.B}`;
  document.getElementById('choiceC').innerText = `C: ${data.choices.C}`;
  document.getElementById('choiceD').innerText = `D: ${data.choices.D}`;

  // Tüm butonların sınıflarını temizle
  const choices = ['choiceA', 'choiceB', 'choiceC', 'choiceD'];
  choices.forEach(choice => {
    document.getElementById(choice).classList.remove('selected', 'correct', 'wrong');
  });

  // Seçilen şıkkı sarıya boyama
  document.getElementById(`choice${selectedChoice}`).classList.add('selected');

  // Doğru şıkkı yeşile boyama
  document.getElementById(`choice${correctChoice}`).classList.add('correct');

  // Seçim yanlışsa, seçilen şıkkı kırmızı yap
  if (selectedChoice !== correctChoice) {
    document.getElementById(`choice${selectedChoice}`).classList.add('wrong');
  }
});
