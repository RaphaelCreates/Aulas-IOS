
//elseif

let nota01, nota02, media, faltas;
nota01 = 7.3;
nota02 = 6.4;
faltas = 4;
media = (nota01 + nota02) /2

if(media >=7 && faltas <=5 ) {
console.log(`o aluno foi aprovado com a media ${media} com ${faltas} faltas`);
} 
else if (media >=6.5 && faltas <=5){
    console.log(`aprovado pelo conselho com a media de ${media}`);
    
}
else {
console.log(` o aluno foi reprovado com a media ${media} e com ${faltas} faltas`);
}

//&&                                   //
// v + v = v                         v + v = v
// v + f = f                         v + f = v  
// f + v = f                         f + v = v
// f + f = f                         f + f = f
