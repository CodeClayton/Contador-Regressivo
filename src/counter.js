const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

document.body.onload = () => {
    const presentDay = 30;
    const presentHour = 13;
    const presentMin = 30;

   const counterTime =  setInterval(() => {
        const now = new Date();
        const remainingTime = new Date(now.getFullYear(), now.getMonth(), presentDay, presentHour, presentMin) - now;

        //Quantidade de dias restantes em milisegundos
        const daysLeft = Math.floor(remainingTime / (24 * 60 * 60 * 1000));
        
        //Quantidade de horas restantes em milisegundos
        //Pega o resto dos milisegundos apos os dias inteiros restantes
        const hoursLeft = Math.floor((remainingTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));

        //Quantidade de minutos restantes em milisegundos
        //Pega o resto da divisao das horas e transforma em minutos
        const minutesLeft = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));

        //Quantidade de segundos restantes em milisegundos
        //Pega o resto da divisao dos minutos e transforma em segundos
        const secondsLeft = Math.floor((remainingTime % (60 * 1000)) / 1000);

        //condicional para colocar zero a esquerda
        function formatZero(n){
            if(n < 10){
                return "0"+n;
            }else{
                return n;
            }
        }
        days.textContent = formatZero(daysLeft);
        hours.textContent = formatZero(hoursLeft);
        minutes.textContent = formatZero(minutesLeft);
        seconds.textContent = formatZero(secondsLeft);

        console.log(remainingTime);
        if(remainingTime < 1){
            window.location.href = 'https://www.google.com';
            clearInterval(counterTime);
        }
    }, 1000);
};
