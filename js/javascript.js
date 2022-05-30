//Variable de eleccion
let eleccion = "";

//Funcion para saber si desea activar el simulador o no
function simulador(){
    
    eleccion = prompt("Quieres utilizar el simulador debes contestar SI o NO ?").toUpperCase();
   while(eleccion != "NO"){
       
      if(eleccion === "SI"){
          simuladorImc();
      }else{
          alert("No has elejido una opcion valida");
          simulador();
      }
   }alert("Fin del simulador.");
}

// Llamada a la funcion
simulador();


//Funcion del simulador para el calculo del IMC
function simuladorImc(){

// Variables
let generoUsuario= prompt("Necesito saber para poder calcular tu IMC si eres Hombre o Mujer?").toLowerCase(); 
let alturaEnCentimetros= parseInt(prompt("Cual es tu altura en cm?"));
let alturaEnMetros = alturaEnCentimetros / 100;
let pesoFinal = parseInt(prompt("Cual es tu peso en kg?")); 
let calcularImc = Math.round (pesoFinal / (alturaEnMetros **2)); 
let clasificacion; 


// Switch para ejecutar segun el genero elejido por el usuario
    switch (generoUsuario){

        case "hombre":

            if ( pesoFinal !=="" && alturaEnMetros !==""){
            
            
                if (calcularImc <= 15.9){
                    clasificacion = "Desnutricion Severa";
                }
                else if (calcularImc <= 16.99) {
                    clasificacion = "Desnutricion Moderada";
                }
                else if ( calcularImc <= 18.49) {
                    clasificacion = "Desnutricion Leve";
                }
                else if ( calcularImc <= 24.9) {
                    clasificacion = "Normal";
                }
                else if (calcularImc <= 29.9) {
                    clasificacion = " Sobrepeso";
                }
                else if (calcularImc <= 34.9 && calcularImc > 29.9) {
                    clasificacion = " Obesidad 1"; 
                    
                }
                else if ( calcularImc <= 39.9 && calcularImc > 34.9) {
                    clasificacion = "Obesidad 2";
                 
                }
                else if (calcularImc > 40){
                    clasificacion = "Obesidad 3";
                    
                }
                //Mostrar en pantalla el resultado
                alert("Para Hombre el calculo de IMC es: " + calcularImc + " y tu condicion es: " + clasificacion);
                simulador();
               
            }  
             
            break;
        
        case "mujer":
            if ( pesoFinal !=="" && alturaEnMetros !==""){
                let calcularImc = Math.round (pesoFinal / (alturaEnMetros **2));
                
                let clasificacion;
            
                if (calcularImc <= 15.4){
                    clasificacion = "Desnutricion Severa";
                }
                else if (calcularImc <= 16.5) {
                    clasificacion = "Desnutricion Moderada";
                }
                else if ( calcularImc <= 18) {
                    clasificacion = "Desnutricion Leve";
                }
                else if ( calcularImc <= 23) {
                    clasificacion = "Normal";
                }
                else if (calcularImc <= 29) {
                    clasificacion = " Sobrepeso";
                }
                else if (calcularImc <= 38 && calcularImc > 29) {
                    clasificacion = " Obesidad 1";
                  
                }
                else if ( calcularImc <= 39.9 && calcularImc > 38) {
                    clasificacion = "Obesidad 2";
                   
                }
                else if (calcularImc > 40){
                    clasificacion = "Obesidad 3";
                    
                
                }
                      
                //Mostrar en pantalla el resultado
                alert("Para Mujer el  calculo de IMC es: " + calcularImc + " y tu condicion es: " + clasificacion);
                simulador();
            }
               
            break;
        default:
                // Mostrar si no se ha elejido genero
                alert("No hay un genero elejido, por favor escribe correctamente el genero. ");
            break;

    } 
  
}

 


   


