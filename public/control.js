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

const setCount = (count) => {
    axios.get(`/api/counter/set/${count}`)
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

const increaseCount = (count) => {
    axios.get(`/api/counter/increase/${count}`)
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

const decreaseCount = (count) => {
    axios.get(`/api/counter/decrease/${count}`)
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

    const increaseBtn = document.querySelector('#increase');
    const decreaseBtn = document.querySelector('#decrease');
    const setBtn = document.querySelector('#set');

    increaseBtn.addEventListener('click', () => {
        const increaseVal = document.querySelector('#increaseVal');
        if (!isNaN(increaseVal.value)) {
            increaseCount(increaseVal.value);
        }
    });
    decreaseBtn.addEventListener('click', () => {
        const decreaseVal = document.querySelector('#decreaseVal');
        if (!isNaN(decreaseVal.value)) {
            decreaseCount(decreaseVal.value);
        }
    });
    setBtn.addEventListener('click', () => {
        const setVal = document.querySelector('#setVal');
        if (!isNaN(setVal.value)) {
            setCount(setVal.value);
        }
    });

    hotkeys('*', function (event, handler){
        if (hotkeys.isPressed(19)){
            const increaseVal = document.querySelector('#increaseVal');
            if (!isNaN(increaseVal.value)) {
                increaseCount(increaseVal.value);
            }
        }
        else if (hotkeys.isPressed(33)) {
            const decreaseVal = document.querySelector('#decreaseVal');
            if (!isNaN(decreaseVal.value)) {
                decreaseCount(decreaseVal.value);
            }
        }
    });
})