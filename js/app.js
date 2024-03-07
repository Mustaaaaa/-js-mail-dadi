/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/
/* creare le mail con permesso di accesso */
let emailsconstentite = ['amimojo@comcast.net', 'jacks@msn.com', 'peterhoeg@mac.com', 'evilopie@aol.com', 'mccurley@att.net', 'juliano@yahoo.com'];
/* creare il prompt */
const emailuser = prompt('Inserisci la tua email');
console.log(emailuser);
/* creare variabile di controllo della mail */
let emailcritta = false;
/* creo il ciclo */
for (let i = 0; i < emailsconstentite.length; i++){
    let emails = emailsconstentite[i];
    if(emailuser == emails){
      emailcritta = true;
    }
}
/* se l'utente ha l'email giusta e ha l'accesso constentito allora gioca 
al gioco dei dadi altrimenti deve ricaricare la pagina per scrivere 
un'altra email */
if (emailcritta == false) {
    console.log('email senza permesso di accesso');
}
else{
    console.log('email con permesso di accesso');

}
console.log(emailsconstentite);

