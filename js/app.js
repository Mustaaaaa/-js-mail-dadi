/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/
/* creare le mail con permesso di accesso */
let emailsconsentite = ['amimojo@comcast.net', 'jacks@msn.com', 'peterhoeg@mac.com', 'evilopie@aol.com', 'mccurley@att.net', 'juliano@yahoo.com'];
/* creare il prompt */
const emailuser = prompt('Inserisci la tua email');
console.log(emailuser);
/* creare variabile di controllo della mail */
let emailscritta = false;
/* creo il ciclo */
for (let i = 0; i < emailsconsentite.length; i++){
    let emails = emailsconsentite[i];
    if(emailuser == emails){
      emailscritta = true;
    }
}
/* se l'utente ha l'email giusta e ha l'accesso constentito allora gioca 
al gioco dei dadi altrimenti deve ricaricare la pagina per scrivere 
un'altra email */
/* riportare gli id che mi serviranno */
const cpusubmit = document.getElementById('cpu')
const lanciaildadosubmit = document.getElementById('lanciaildado')
/* se l'email è sbagliata riprova ad inserire un'altra email altrimenti vai allo step succesisvo */
if (emailscritta == false) {
    console.log('email senza permesso di accesso');
}
/* se l'email è giusta puoi fare il gioco dei dadi */
else {
    console.log('email con permesso di accesso');
    /* array vuoto */
    const numbers = [];
    /* creazione del buttone */
    lanciaildadosubmit.addEventListener('click', function getRndInteger(min, max) {
        /* riportare le classi che mi serviranno */
        const dado1 = document.querySelector('.dado1')
        const dado2 = document.querySelector('.dado2')
        /* creazione del ciclo che mi darà un numero casuale per i 2 giocatori da 1 a 6 */
        for (let iterations = 1; iterations <= 6; iterations++) {
            const randomNumbercpu = Math.floor((Math.random() * (7 - 0)));
            const randomNumbergiocatore = Math.floor((Math.random() * (7 - 0)));

            numbers.push(randomNumbercpu);
            numbers.push(randomNumbergiocatore);

            dado2.innerHTML = `
		    <div>${randomNumbercpu}</div>
		    `
            dado1.innerHTML = `
            <div>${randomNumbergiocatore}</div>
            `
            /* condizione se in caso di vittoria o pareggio dei diversi giocatori */
            if (randomNumbergiocatore > randomNumbercpu) {
                const pElement = document.getElementsByClassName('p')
                const risultato = document.querySelector('.risultato')
                let winner = pElement

                risultato.innerHTML = `
                <p class="risultato">${"Il vincitore è: Moustafa"} </p>
                `
               
                console.log(winner)
            }
            else if (randomNumbercpu > randomNumbergiocatore) {
                const pElement = document.getElementsByClassName('p')
                const risultato = document.querySelector('.risultato')
                let winner = pElement

                risultato.innerHTML = `
                <p class="risultato">${"Il vincitore è: CPU"} </p>
                `
                console.log(winner)
            }
            else if (randomNumbercpu == randomNumbergiocatore) {
                const pElement = document.getElementsByClassName('p')
                const risultato = document.querySelector('.risultato')
                let winner = pElement

                risultato.innerHTML = `
                <p class="risultato">${"Nessun vincitore, è un pareggio riprova"} </p>
                `
                console.log(winner)
            }
        }
        
        console.log(numbers);
        
    })
    
    

    console.log(emailsconsentite);
}

