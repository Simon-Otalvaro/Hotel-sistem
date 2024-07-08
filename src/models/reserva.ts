export class Reserva {
       id: number;
       nombre: string;
       checkIn: string; // formato "dd/mm"
       checkOut: string; 
       numHabitacion: number;
   
       constructor(
       id: number, 
       nombre: string, 
       checkIn: string, 
       checkOut: string, 
       numHabitacion: number) 
       {
           this.id = id;
           this.nombre = nombre;
           this.checkIn = checkIn;
           this.checkOut = checkOut;
           this.numHabitacion = numHabitacion;
       }
   }
   