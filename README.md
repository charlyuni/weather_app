## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [FAQs](#faqs)

### General Info
***
El proyecto es una APP que permite consultar el estado de clima y el pronostico de los proximos 5 dias de una ciudad en particular, la de tu actual ubicacion o de las 5 ciudades preseleccionadas. 
Se puede visualizar el clima tanto en metrica celsius como en fahrenheit.
El resumen de la informacion mostrada es el clima actual, el icono de referencia y datos generales (presion, Humedad, Viento, Amanecer, Anochecer, Temperatura Minima y Maxima).
El background va cambiando de color segun el pronostico.
Cada vez que se cambie la localidad o la unidad de medida se actualizara la informacion. 

La API utilizada es de https://api.openweathermap.org/ .

### Desplegado en:

https://weather-app-dusky-mu.vercel.app/

### Screenshot
(https://drive.google.com/file/d/1Ry1E2U60dr3KMnWNt_bmvFFMt8SaKY7q/view?usp=sharing)
## Technologies
***
A list of technologies used within the project:
* [react](https://reactjs.org/): Version 18.2.0
* [typescript](https://www.typescriptlang.org/): Version 4.8.4
* [tailwind](https://tailwindcss.com/): Version 3.1.8
* [luxon](https://github.com/moment/luxon): Version 3.0.1
* [jest](https://jestjs.io/): Version 27.5.2

## Installation
***
```
$ git clone https://github.com/carlosactis/app_telecom.git
$ npm install
$ npm start
```
## Testing (jest + testing-library/react)

$ npm run test 

## FAQs
***
1. **Se realiza busquedas con input vacios?**
Se requiere al menos 3 caracteres para realizar la busqueda.
2. **Que pasa si el usuario tiene bloqueda la ubicacion?**
Dara un error, se activara una pantalla avisando al usuario y no podra usar esta funcionalidad.
