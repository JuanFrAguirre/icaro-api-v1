Este proyecto es una API de ejemplo para los estudiantes de la Diplomatura en Programación Web Full Stack de Icaro.
Ellos deberán replicar las funcionalidades provistas por la misma en sus propios proyectos para la entrega final de la Diplomatura.

Toda la documentación está en la [página principal de la API](https://icaro-api-v1.herokuapp.com)

<div class="container">

# ICARO API v1

### Trabajo Integrador

A continuación están los _endpoints_ de los cuales se obtendrán los recursos para completar el Trabajo Integrador de la Diplomatura. 😎  

Esta API es **pública** por lo que puede darse que algún recurso no retorne lo esperado 🙅🏼, puesto que otra persona puede estar en simultáneo borrando o agregando algún recurso. 📚

### Recursos

*   **GET** 🧐 Listado Usuarios 👉🏼 [.../api/users](/api/users)

*   **GET** 🧐 Listado Mensajes Recibidos 👉🏼 .../api/users/_username_/messages/inbox

*   **GET** 🧐 Listado Mensajes Enviados 👉🏼 .../api/users/_username_/messages/sent

*   **POST** 📫 Envio Datos Register 👉🏼 .../api/users

    Esta petición deberá enviar por _body_ un objeto que contenga los siguientes seis campos:

    <div class="code">

    <div>`{  

    }`</div>

    </div>

    El campo _id_ es auto generado por la API

*   **POST** 📫 Envio Datos Login 👉🏼 .../api/login

    Esta petición deberá enviar por _body_ un objeto que contenga los siguientes campos:

    <div class="code">

    <div>`{  

    }`</div>

    </div>

*   **POST** 📫 Envio Datos Mensaje 👉🏼 .../api/users/_username_/messages

    Esta petición deberá enviar por _body_ un objeto que contenga los siguientes campos:

    <div class="code">

    <div>`{  

    }`</div>

    </div>

    El campo _senderId_ se obtiene automáticamente desde los params de la URL a través del _username_

*   **DELETE** 🗑 Borrado Mensaje por ID 👉🏼 .../api/messages/_messageId_

#### [🏠 Ésta es la URL base](/api)

</div>
