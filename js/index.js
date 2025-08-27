// Reusable function
function getElement(id) {
    const element = document.getElementById(id);
    return element;
}

// Love button
const loveBtns = document.getElementsByClassName('btn-love');
for (const loveBtn of loveBtns) {
    loveBtn.addEventListener('click', function () {
        const loveCount = Number(getElement('love-count').innerText);
        const totalLoveCount = loveCount + 1;
        getElement('love-count').innerText = totalLoveCount;
    })
}



// Call button
const callBtns = document.getElementsByClassName('btn-call');
for (const callBtn of callBtns) {
    callBtn.addEventListener('click', function () {
        // Cutting coins
        const coinCount = Number(getElement('coin-count').innerText);
        if (coinCount < 20) {
            return alert('❌Insufficient Coin. Need 20 coins for each call');
        }
        remainingCoin = coinCount - 20;
        getElement('coin-count').innerText = remainingCoin;

        // Showing alert message
        const title = callBtn.parentNode.parentNode.children[1].innerText;
        const number = callBtn.parentNode.parentNode.children[3].innerText;
        alert(`📞Calling ${title} ${number}...`);

        // Showing call in the History

        const now = new Date().toLocaleTimeString();

        const historyContainer = document.getElementById('history-container');
        const history = document.createElement('div');
        history.innerHTML = `
        <div class="flex justify-between items-center bg-gray-200 mt-2 p-3">
                    <div>
                        <h1>${title}</h1>
                        <p>${number}</p>
                    </div>
                    <p>${now}</p>
                </div>
        `
        historyContainer.append(history);
    })
}

// Clear the history 

const btnClear = document.getElementById('btn-clear');
btnClear.addEventListener('click', function () {
    document.getElementById('history-container').innerHTML = '';
})

// Copy button

