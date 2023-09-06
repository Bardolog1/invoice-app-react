import { invoice } from '../data/invoice';

export const getInvoice =  () => {
 
   const total = calculateTotal(invoice.items);

   return {...invoice, total};
}



  /*let total = 0;
   invoice.items.forEach(item => {
      total += item.price * item.quantity;
   });
   invoice.total = total;*/

   // reduce, la función reduce recibe dos parámetros, el primero es una función que se ejecuta por cada elemento del array, el segundo es el valor inicial del acumulador
   // reduce((acumulador, elemento) => {}, valorInicial)
   // esto lo hacemos para no mutar el objeto invoice, sino que devolvemos un nuevo objeto con el total calculado
export const calculateTotal = (items) => {
   return items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
   }, 0);
}