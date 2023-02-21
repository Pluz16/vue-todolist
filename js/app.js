// Descrizione:
// Rifare l’esercizio della to do list.
// Questa volta però lavoreretecon un array di oggeti, quindi ogni todo sarà un oggetto, formato da due proprietà:
// text, una stringa che indica il testo del todo
// done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// oltre al click sul pulsante aggiungi, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)


const app = Vue.createApp({
    data() {
        return {

            todo: [
                {
                    text: "cibo cane",
                    done: false,
                    content: "X",

                },
                {
                    text: "allenamento",
                    done: true,
                    content: 'V'

                },
                {
                    text: "esercizio pomeridiano",
                    done: false,
                    content: "X"
                }
            ]

        }
    },

methods: {
    eventChecked(i) {
        if (!this.todo[i].done) {
            this.todo[i].done = true;
            this.todo[i].content = "V"
        }
    }
}
});

app.mount('#app');
