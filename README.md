# TS Indra #

Curso de TypeScrip para Indra (Minsait)

## Creación del entorno ##

- Navegador
- VSC - Plugins de TS (TSLint) y Angular
- Git
- Github: <https://github.com/IconoTraining/ts_indra/>
- Node / nmp

## Instalación y configuración de TS ##

- Instalaciones con npm: typescript, tslint y ts-node
- typescript --init -> tsconfig.json
- tslint --init -> tslint.json

## Hola mundo ##

- Compilación directa
- Ejecución en ts-node
- Automatización de la compilación del proyecto.
    comando `tsc -w`: compila a nivel de la carpeta

## VSC ##

### Tareas ###

- F1 (paleta de comandos): configure task runner
    (se crea en el proyecto .vscode/tasks.json)
- Terminal -> Ejecutar compilar tarea...

## Otras características de VSC ##

- Aparición de errores en el terminal
- Ir -> Ir al symbolo...
- Menu contextual: Ir a la definición (F12)
- Cambios de configuración para ocultar determinados archivos, e.g. .map
    Archivo -> Preferencias -> Confiuracion -> Working Area : Exclude Files
    (se crea en el proyecto .vscode/settings.json)

## Depuración ##

- Depurar -> Inicia Depuración (Ejecutar archivo, F5)
- Seleccionar entorno Node.JS
    (se crea en el proyecto .vscode/launch.json)

## Elementos de ES6 ##

- Datos y variables. Tipos debiles y dinámicos.
- Ambito (scope). let / const
- Constantes: mutabilidad de elementales / referencia
- Clonación de objetos y arrays.
- Funciones: asignación y declaración.
- Arrow functions. Uso del this
- Uso de parámetros por defcto.
- Operadores rest y spread. Destructuring
- Modulos. Diferencias entre Node (CommonJS) y ES6
- Arrays. Formas de iteración. Bucle for-of en ES6
