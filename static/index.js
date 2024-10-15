document.getElementById('translationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const text = document.getElementById('text').value;
    const targetLanguage = document.getElementById('language').value;

    fetch('/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'text': text,
            'language': targetLanguage
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.translatedText) {
            document.getElementById('translatedText').innerText = data.translatedText;
        } else {
            document.getElementById('translatedText').innerText = "Translation failed. Please try again.";
        }
    })
    .catch(error => {
        document.getElementById('translatedText').innerText = "An error occurred. Please try again.";
    });
});
