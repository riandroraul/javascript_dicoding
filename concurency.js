// console.log("Selamat datang!");
// setTimeout(pesan => {
//     pesan = "Terima kasih sudah mampir, silakan datang kembali!";
//   console.log(pesan);
// }, 1000);
// console.log("Ada yang bisa dibantu?");

// const orderCoffee = () => {
//     let coffee = null;
//     console.log("Sedang membuat kopi, silakan tunggu...");
//     setTimeout(() => {
//         coffee = "Kopi sudah jadi!";
//     }, 3000);
//     return coffee; // => coffee akan selalu bernilai null
// }
 
// const coffee = orderCoffee();
// console.log(coffee); 

const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        callback(coffee);
    }, 3000);
}
orderCoffee(coffee => {
    console.log(coffee);
});