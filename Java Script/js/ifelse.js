// if(true){
//     console.log("Anjay");
// }else {
//     console.log("Blud");
// }

let nilai= 89;
let standar=55;
let baik = "lulus";
let gagal = "tidak lulus";
let batasatas = 100;
let batasbawah = 0;
let peringatan = "nilai salah";
if(nilai <= batasatas && nilai >= batasbawah ){
    if (nilai >= standar){
        console.log(baik);
    }else {
        console.log(gagal);
    }
}else {
    console.log(peringatan);

}

