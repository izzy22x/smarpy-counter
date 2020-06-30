const getCount = () => { 
    axios.get('/api/counter/get')
        .then(response => {
            if (response.status === 200 && response.data.success) {
                const span = document.querySelector('#count');
                span.innerHTML = response.data.count;
            }
        })
        .catch(err => {
            console.error(err);
        }
    );
}

document.addEventListener('DOMContentLoaded', () => {
    getCount();
    setInterval(getCount, 2000);
});