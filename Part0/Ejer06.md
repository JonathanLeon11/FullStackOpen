sequenceDiagram
    participant usuario
    participant servidor

    usuario->>servidor: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate servidor
    servidor-->>usuario: Respuesta HTML simple con referencia a JavaScript
    deactivate servidor

    usuario->>servidor: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate servidor
    servidor-->>usuario: Aplicación SPA con estilo
    deactivate servidor

    usuario->>servidor: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate servidor
    servidor-->>usuario: Inicializa Funcionalidad SPA
    deactivate servidor

    usuario->>servidor: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate servidor
    servidor-->>usuario: Renderizado de Notas
    deactivate servidor

    usuario->>servidor: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate servidor
    servidor-->>usuario: [ {content: "Prueba", date: "2024-10-01T18:35:18.144Z"} ]
    deactivate servidor