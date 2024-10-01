sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: Estructura Html de la pagina web
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: Estilos css
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: Logica de JavaScript
    deactivate server

    Note right of browser: El navegador ejecuta el código JavaScript que recupera el JSON del servidor.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [ {content: "Jonathan", date: "2024-10-01T18:10:55.409Z"} ]
    deactivate server

    Note right of browser: El navegador ejecuta la función de devolución que muestra las notas.