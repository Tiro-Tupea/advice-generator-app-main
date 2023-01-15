window.onload = () => {
    getAdvice();

    const btnDice   = document.querySelector('.dice');
    const nbrAdvice = document.querySelector('.nbr-advice');
    const quote     = document.querySelector('.quote');


    btnDice.onclick= () => {
        getAdvice();
    }


    function getAdvice (){
        fetch('https://api.adviceslip.com/advice').then(reponse => {
            return reponse.json();
        }).then(adviceData => {
            const advices = adviceData.slip;
            quote.innerHTML = `${advices.advice}`;
            nbrAdvice.innerHTML = `${advices.id}`;

            console.log(quote);
        }).catch(error => {
            console.log(error);
        })

    }      

}
