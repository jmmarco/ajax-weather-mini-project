# Weather API

## Inicio Rápido

1. Clona el repositorio:
`git clone https://github.com/jmmarco/weather/tree/spanish-version`

2. Necesitas correr un sevidor web local desde la carpeta raiz del proyecto (sino la API no va a funcionar)
Hay muchos programas y formas de correr un servidor web local en tu compu, yo recomiendo que se bajen [esta extension para el navegador Google Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en) que nos permite correr un simple servidor web desde nuestra compu con un minímo de configuración.

Importante: Esta extensión es para Google Chrome. Si no usas Google Chrome vas a tener que buscar otra forma de correr un servidor web local.

3. Una vez que el servidor web esta corriendo apuntar el navegador a: `http://127.0.0.1:8887` para usar la aplicación.


**Importante**: Si no corres un servidor web local la aplicacion no va funcionar porque la API usa [CORS](https://www.maxcdn.com/one/visual-glossary/cors/) para protegerse de ataques de gente mala (Crackers, Piratas, Bots, etc).

Recursos adicionales:

- [¿Que es CORS? (en español)](https://developer.mozilla.org/es/docs/Web/HTTP/Access_control_CORS)
- [Stackoverflow: Cross origin requests are only supported for HTTP (en inglés)](https://stackoverflow.com/questions/20041656/xmlhttprequest-cannot-load-file-cross-origin-requests-are-only-supported-for-ht)
