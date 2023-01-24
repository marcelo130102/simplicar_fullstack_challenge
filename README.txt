# Fullstack Challenge

El objetivo del reto es hacer un tablero kanban con sólo 3 columnas (buffer, working y done). con las siguientes características:
- Antes de ingresar al tablero debe existir un registro y autenticación del usuario.   (Los datos a considerar son name, email y password)
- Cada card debe pertenecer en base de datos a un usuario
- Se debe poder agregar tarjetas. Las tarjetas tendrán nombre y descripcion.   
- Al hacer click al card se podrá editar los valores.
- El dashboard debe iniciar con los siguientes cards:
   - 1 card en buffer con el nombre "Agregar subtareas al kanban".
   - 1 card en working con el nombre "Testing Kanban".
- Tener unos ejemplos de postman para ejecutar API calls al backend

Referencia del diseño 
![Kanban-board](https://user-images.githubusercontent.com/11076563/128603762-e0433ea7-36ce-4550-925c-eb68dea8e363.png)

## Especificaciones técnicas para el proyecto:
- El frontend tiene que ser en node.js
- Antes de ingresar al kanban debe existir un login, de otra forma no se puede acceder al tablero.
- El esquema de base de datos debe utilizar MongoDB
- Se acepta el uso de librerias para backend y frontend

# Entregable o Expectativa del reto
- El reto tiene una duración de 72hrs (3 días) desde el momento que se recibe
- La limpieza y legibilidad del código será considerada.
- La validación del formulario será a criterio personal
- Incluir Collection de postman utilizado en el git
- Se entrega enviando el link al fork de este git
