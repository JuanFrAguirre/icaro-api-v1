# ICARO API v1

### Trabajo Integrador

Esta es la API que se ha creado para la **Diplomatura Universitaria en Programación Web Full Stack** de Icaro.

A continuación están los _endpoints_ de los cuales se obtendrán los recursos para completar el Trabajo Integrador de la Diplomatura. 😎

Esta API es **pública** por lo que puede darse que algún recurso no retorne lo esperado 🙅🏼, puesto que otra persona puede estar en simultáneo borrando o agregando algún recurso. 📚

### Recursos

- **GET** 🧐 Listado Usuarios 👉🏼 [.../api/users](/api/users)

- **GET** 🧐 Listado Mensajes Recibidos 👉🏼 .../api/users/_username_/messages/inbox

- **GET** 🧐 Listado Mensajes Enviados 👉🏼 .../api/users/_username_/messages/sent

- **POST** 📫 Envio Datos Register 👉🏼 .../api/users

  Esta petición deberá enviar por _body_ un objeto que contenga los siguientes seis campos:

        {
            "username": "xxxxxx",
            "firstName": "xxxxxx",
            "lastName": "xxxxxx",
            "password": "xxxxxx",
            "country": "xxxxxx",
            "city": "xxxxxx"
        }

  El campo _id_ es auto generado por la API

- **POST** 📫 Envio Datos Login 👉🏼 .../api/login

  Esta petición deberá enviar por _body_ un objeto que contenga los siguientes campos:

        {
            "username": "xxxxxx",
            "password": "xxxxxx",
        }

- **POST** 📫 Envio Datos Mensaje 👉🏼 .../api/users/_username_/messages

  Esta petición deberá enviar por _body_ un objeto que contenga los siguientes campos:

        {
            "receiverId": "xxxxxx",
            "text": "xxxxxx",
        }

  El campo _senderId_ se obtiene automáticamente desde los params de la URL a través del _username_

- **DELETE** 🗑 Borrado Mensaje por ID 👉🏼 .../api/messages/_messageId_

#### [🏠 Ésta es la URL base](/api)
