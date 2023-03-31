let count = 0;
let value = document.querySelector('#count');
let selectedBtn = document.querySelectorAll('.btn');
selectedBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains("plus")) {
            count++;
        } else if (styles.contains('minus')) {
            count--;
        } else {
            count = 0;
        }
        (count > 0) ? value.style.color = 'green' : (count < 0) ? value.style.color = "red" : value.style.color = 'black';
        value.textContent = count;
    })
});