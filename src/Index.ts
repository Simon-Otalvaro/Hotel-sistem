import { Hotel } from './models/hotel';
import { Reserva } from './models/reserva';
import promptSync from 'prompt-sync';

const prompt = promptSync();

function mainMenu() {
    const hotel = new Hotel();

    console.log("Bienvenido al interfaz del hotel!!!");

    let choice = 0;
    while (choice !== 6) {
        console.log("\nMenú:");
        console.log("1. Buscar reservación por ID");
        console.log("2. Obtener todas las reservaciones ordenadas por fecha de check-in");
        console.log("3. Agregar nueva reservación");
        console.log("4. Eliminar reservación por ID");
        console.log("5. Mostrar todas las reservaciones");
        console.log("6. Salir");

        const input = prompt("Ingrese el número de la opción deseada:");
        choice = input ? parseInt(input) : 0;

        switch (choice) {
            case 1:
                try {
                    const id = parseInt(prompt("Ingrese el ID de la reservación a buscar:") || '0');
                    const reserva = hotel.searchReserva(id);
                    console.log("Reservación encontrada:", reserva);
                } catch (error) {
                    console.log()
                }
                break;
            case 2:
                const sortedReservas = hotel.getSortReservas();
                console.log("Reservaciones ordenadas por fecha de check-in:", sortedReservas);
                break;
            case 3:
                try {
                    const newReserva = new Reserva(
                        parseInt(prompt("Ingrese el ID de la nueva reservación:") || '0'),
                        prompt("Ingrese el nombre:") || '',
                        prompt("Ingrese la fecha de entrada (dd/mm):") || '',
                        prompt("Ingrese la fecha de salida (dd/mm):") || '',
                        parseInt(prompt("Ingrese el número de habitación:") || '0')
                    );
                    hotel.addReserva(newReserva);
                    console.log("Nueva reservación agregada:", newReserva);
                } catch (error) {
                    console.log()
                }
                break;
            case 4:
                try {
                    const idToRemove = parseInt(prompt("Ingrese el ID de la reservación a eliminar:") || '0');
                    const removedReserva = hotel.removeReserva(idToRemove);
                    console.log("Reservación eliminada:", removedReserva);
                } catch (error) {
                   
                }
                break;
            case 5:
                const allReservas = hotel.getSortReservas();
                console.log("Todas las reservaciones:", allReservas);
                break;
            case 6:
                console.log("Saliendo del sistema...");
                break;
            default:
                console.log("Opción inválida. Por favor, ingrese un número del 1 al 6.");
                break;
        }
    }
}

mainMenu();
