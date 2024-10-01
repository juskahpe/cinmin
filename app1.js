const form = document.getElementById('controlForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const selectedChoice = document.querySelector('input[name="selectedChoice"]:checked').value; // Yönetim panelinden seçilen şık
  const correctChoice = document.getElementById('correctChoice').value; // Doğru şık

  // Firebase'e gönder
  firebase.database().ref('game').set({
    question: document.getElementById('question').value,
    choices: {
      A: document.getElementById('choiceA').value,
      B: document.getElementById('choiceB').value,
      C: document.getElementById('choiceC').value,
      D: document.getElementById('choiceD').value
    },
    selectedChoice: selectedChoice,
    correctChoice: correctChoice
  });
});
