const candidates = ['Alice', 'Bob', 'Charlie'];

function vote(candidate) {
    let votes = JSON.parse(localStorage.getItem('votes')) || {};

    if (!votes[candidate]) {
        votes[candidate] = 0;
    }

    votes[candidate]++;
    localStorage.setItem('votes', JSON.stringify(votes));

    displayResults();
}

function displayResults() {
    const resultsDiv = document.getElementById('results');
    const votes = JSON.parse(localStorage.getItem('votes')) || {};

    resultsDiv.innerHTML = '';
    candidates.forEach(candidate => {
        const voteCount = votes[candidate] || 0;
        resultsDiv.innerHTML += `<p><strong>${candidate}:</strong> ${voteCount} vote(s)</p>`;
    });
}

function resetVotes() {
    localStorage.removeItem('votes');
    displayResults();
}

window.onload = displayResults;
