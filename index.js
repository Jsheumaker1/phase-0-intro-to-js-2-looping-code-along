function writeCards(cards, event){
    const newCards=[]
        for (let i = 0; i < cards.length; i++){
            newCards.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
        }
    
    return newCards;
}

writeCards(["Lisa", "Kaitlin", "Jan"], surprise)

function countDown(integer){
    while (integer>=0){
        console.log(integer);
        integer--;
    }
}

countDown (6);
