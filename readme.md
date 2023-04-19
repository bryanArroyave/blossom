## Ejecución de la aplicación

- Ejecutar el comando
```nodejs
npm run dev
```


## Estructura de la aplicación

Se implementó la siguiente estructura de carpetas:

1. domain

    - rick-and-morty
        - **constanst** se guardan todas las constantes que se usan en la aplicación dentro del dominio de rick-and-
        - **dtos** Interfaces del dominio
        - **ports** servicios que se van a usar en la aplicación
        

2. infra 

    - **adapters** Se implementan los adaptadores para los servicios de rick-and-morty y para graphQL
    - **dtos** interfaces de infraestructura, de cómo vienen los datos de la api que se consumió
    - **pages** se encuentran los componentes que se usaron para la página de personajes de rick and 
    - **redux** Se utilizó redux como gestor del "store" de la aplicación, ahí se guardan los personajes y filtros 
    - **styled-components** Se enceuntran los layouts de la aplicación