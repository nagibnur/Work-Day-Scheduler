const currentDay = document.querySelector('#currentDay')
const textarea = document.querySelector('.description')


const interval = setInterval(() => {
    const date = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentDay.textContent = date
    }, 1000);
    

