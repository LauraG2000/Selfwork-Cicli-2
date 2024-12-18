let sommaDispari = 0;
let countDispari = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log("Numero pari:   " + i);
    } else {
        sommaDispari = sommaDispari + i;
        countDispari++;
    }
}

if (countDispari > 0) {
    let mediaDispari = sommaDispari / countDispari;
    console.log("La media dei numeri dispari è:     " + mediaDispari);
} else {
    console.log("Non ci sono numeri dispari.");
}
