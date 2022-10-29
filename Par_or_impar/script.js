show(3);
function show(number) {
   for (let contador=0; contador <= number; contador++) {
       if ( contador % 2 === 0)
            console.log(contador,'PAR');
       else
            console.log(contador,'IMPAR');
   }
}              
