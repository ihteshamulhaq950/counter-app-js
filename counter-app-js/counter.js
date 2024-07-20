document.addEventListener('DOMContentLoaded', () => {
    // Create container
    const container = document.createElement('div');
    container.style.textAlign = 'center';
    container.style.backgroundColor = '#fff';
    container.style.padding = '20px 30px';
    container.style.borderRadius = '10px';
    container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    container.style.fontFamily = 'Arial, sans-serif';
    container.style.position = 'absolute';
    container.style.top = '50%';
    container.style.left = '50%';
    container.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(container)
    console.log(container)
    // container.textContent = 123


    // Create counter display
    const counterDisplay = document.createElement('h1');
    counterDisplay.innerHTML = 'Counter: <span id="counter">0</span>';
    container.appendChild(counterDisplay);

    // Create buttons
    const createButton = (id, text) => {
        const button = document.createElement('button');
        button.id = id;
        button.textContent = text;
        button.style.margin = '5px';
        button.style.padding = '10px 20px';
        button.style.fontSize = '16px';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.style.backgroundColor = '#007bff';
        button.style.color = 'white';
        button.onmouseover = () => button.style.backgroundColor = '#0056b3';
        button.onmouseout = () => button.style.backgroundColor = '#007bff';
        button.onmousedown = () => button.style.backgroundColor = '#004099';
        button.onmouseup = () => button.style.backgroundColor = '#007bff';
        return button;
    };

    const incrementButton = createButton('increment', 'Increment');
    const decrementButton = createButton('decrement', 'Decrement');
    const resetButton = createButton('reset', 'Reset');

    // Add buttons to container
    container.appendChild(incrementButton);
    container.appendChild(decrementButton);
    container.appendChild(resetButton);

    let counter = 0;
    const counterSpan = document.getElementById('counter');

    const updateCounter = () => {
        counterSpan.textContent = counter;
        console.log(counterSpan);

    };

    incrementButton.addEventListener('click', () => {
        counter++;
        updateCounter();
    });

    decrementButton.addEventListener('click', () => {
        if (counter > 0) {
            counter--;
            updateCounter()
        }
    });

    resetButton.addEventListener('click', () => {
        counter = 0;
        updateCounter();
    });

    // Initial render
    updateCounter();
});
