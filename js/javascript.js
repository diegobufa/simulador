let generoUsuario;
let alturaEnCentimetros= parseInt(prompt("Cual es tu altura en cm?"));
let alturaEnMetros = alturaEnCentimetros / 100;
let pesoFinal = parseInt(prompt("Cual es tu peso en kg?"));  
let calcularImc = Math.round (pesoFinal / (alturaEnMetros **2));           
let clasificacion;
let edad = parseInt(prompt("Cual es tu edad? "));
let dato = alert("Recorda la expectativa de vida en Argetina es de: 80 años para el Hombre y para la mujer es de 82 años" );
let edadFinal;
let obesidad1;



function expectativaDeVida (edadFinal, edad){
    
    return calculoDeVida = edadFinal - edad; 
       
}
function vidaObesidad (calculoDeVida, obesidad1){
    let vidaObesidad1 = calculoDeVida - obesidad1;
    document.write("La expectativa de vida segun tu condicion es de: " + (vidaObesidad1 + edad)  + " años." + "<br>");
}


do{
    generoUsuario = prompt("Necesito saber para poder calcular tu IMC si eres Hombre o Mujer?").toLowerCase();
}
while (generoUsuario === "hombre" && generoUsuario === "mujer"){
    
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
                expectativaDeVida (80, edad);
                vidaObesidad (calculoDeVida, 5);
            }
            else if ( calcularImc <= 39.9 && calcularImc > 34.9) {
                clasificacion = "Obesidad 2";
                expectativaDeVida (80, edad);
                vidaObesidad (calculoDeVida, 6);
            }
            else if (calcularImc > 40){
                clasificacion = "Obesidad 3";
                expectativaDeVida (80, edad);
                vidaObesidad (calculoDeVida, 7);
            }
            let repuesta = "Para Hombre el calculo de IMC es: " + calcularImc + " y tu condicion es: " + clasificacion;        
       
            document.write(repuesta);
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
                expectativaDeVida (82, edad);
                vidaObesidad (calculoDeVida, 5);
             }
             else if ( calcularImc <= 39.9 && calcularImc > 38) {
                clasificacion = "Obesidad 2";
                expectativaDeVida (82, edad);
                vidaObesidad (calculoDeVida, 6);
             }
             else if (calcularImc > 40){
                clasificacion = "Obesidad 3";
                expectativaDeVida (82, edad);
                vidaObesidad (calculoDeVida, 7);
               
             }
            let repuesta = " Para Mujer el  calculo de IMC es: " + calcularImc + " y tu condicion es: " + clasificacion;        
        
            document.write(repuesta);
         }
            
         break;
         default:
             alert("No hay un genero elejido, por favor escribe correctamente el genero. ");
             break;

} 

}
 


   


