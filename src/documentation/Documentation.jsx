
import './Documentation.css'

const Documentation = () => {
    return (
        <>
            <div>

                <details open>
                    <summary>
                        INTRODUCCIÓN
                    </summary>
                    <div>
                        <p>
                            El propósito de este documento es brindar una guía para instalar y configurar el proyecto en un entorno de desarrollo local. Se presenta información detallada acerca de la definición, diseño y estructura del sistema, con el fin de llevar a cabo tareas como mantenimiento, instalación y exploración del sitio web Red JODS Aliados, ofreciendo la información de cómo está organizado para que los desarrolladores que deseen contribuir al proyecto lo hagan de manera adecuada.<br /><br />
                            El objetivo principal del proyecto es crear una plataforma web en la que los miembros de la organización faciliten la gestión y seguimiento de los Aliados, incluyendo información de contacto y actividades realizadas.<br /><br />
                            Terminado el proceso de desarrollo y las pruebas realizadas, se mostrará al cliente la forma correcta para instalar y manipular la aplicación en el computador asignado o destinado para tal proceso. El aplicativo web desarrollado no genera código objeto que se pueda distribuir en un único archivo, por tal motivo la estructura del proyecto del aplicativo contiene varios archivos en diferentes carpetas que se entregará en un repositorio GitHub con la respectiva documentación técnica. Adicional se creó una documentación en swagger para la prueba de todas las peticiones de la API REST.<br /><br />
                            La aplicación fue diseñada para la construcción e implementación de un sistema de información (aplicación web) para la gestión de Aliados de la comunidad; apoyada en las tecnologías web disponibles como son: React, La interfaz de usuario ha sido diseñada utilizando Bootstrap y para la validación del formulario se empleó la librería React Hook Form, además fue desarrollada en ambiente suministrado por la herramienta Express que integra el servidor, el lenguaje de programación de JavaScript, la base de datos Mongo y hemos utilizado el entorno integrado o IDE Visual Studio Code para la codificación.<br />
                        </p>
                    </div>
                </details>

                <details>
                    <summary>
                        CONVENCIONES DE CODIFICACIÓN
                    </summary>
                    <div>
                        <p>
                            Para el desarrollo de software, fue importante tener en cuenta buenas prácticas para garantizar la calidad del programa. Entre estas prácticas se encuentra la estructura de carpetas, que permite organizar y gestionar eficientemente los diferentes componentes del software. Asimismo, la arquitectura Modelo, Vista y Controlador (MVC) es una metodología de diseño que separa el programa en tres componentes. La aplicación de estas prácticas facilita su mantenimiento y escalar de manera efectiva.<br /><br />
                            Se hizo uso de comentarios en la construcción del código, para explicar su funcionamiento. Además, el código también fue formateado para facilitar su lectura y comprensión por parte de otros programadores.<br /><br />
                            En cuanto a convención de nombres la nomenclatura que se usó para nombrar los archivos, variables, funciones y otros elementos en el código fue CamelCase.  Esto permite reducir el esfuerzo necesario para leer y entender el código fuente, ya que los nombres son más claros y consistentes.<br />
                        </p>
                    </div>
                </details>

                <details>
                    <summary>
                        REQUISITOS MÍNIMOS
                    </summary>
                    <div>
                        <details>
                            <summary>HARDWARE</summary>
                            <div>
                                <p>
                                    Con el requerimiento de visualizar y consultar la aplicación desde cualquier dispositivo, se entrega el debido despliegue en front y back en una plataforma gratuita y copia del código más la debida documentación. No incluye Dominio – hosting y mantenimientos futuros.<br />
                                </p>
                            </div>
                        </details>
                        <details>
                            <summary>SOFTWARE</summary>
                            <div>
                                <p>
                                    La aplicación web Red JODS Aliados está estructurada en un repositorio GitHub, donde reposan el código fuente, y el script de la base de datos. Igualmente se encontrará la Documentación Técnica.<br /><br />
                                    Para que la aplicación pueda visualizar e interactuar con ella, el computador de destino requiere sin duda alguna conexión a internet y cumplir con ciertos requisitos:
                                </p>
                                <ul>Navegador web: Microsoft Edge o Google Chrome para la visualización de la aplicación.</ul>
                                <ul>Gestor de base de datos Mongo para la administración de los registros almacenados.</ul>
                                <ul>Un emulador de servidor: Express para procesar las solicitudes HTTP, aloja un sitio web y almacena contenido estático como imágenes, HTML, CSS y JavaScript.</ul>
                                <ul>Una aplicación de desarrollo web (Visual Studio Code) y conexión con GIT para la actualización y modificación del código fuente incluyendo diseño.</ul>
                            </div>
                        </details>
                    </div>
                </details>

                <details>
                    <summary>
                        INSTALACIÓN DEL PROGRAMA Y COMPONENTES
                    </summary>
                    <div>
                        <p>Para instalar el aplicativo web y sus componentes, podemos identificar los siguientes pasos:<br /></p>
                        <details>
                            <summary>INSTALADOR DE LA APLICACIÓN</summary>
                            <div>
                                <p>
                                    <a target="blank" href="https://github.com/programateacademy/red-jods-aliados-frontend">Repositorio Frontend</a><br />
                                </p>
                            </div>
                        </details>
                        <details>
                            <summary>INSTALACIÓN DE HERRAMIENTAS EN EL EQUIPO DE CÓMPUTO DESTINADO PARA EL PROCESO</summary>
                            <div>
                                <li><a target="blank" href="https://nodejs.org/es/download/">Node</a><br /></li>
                                <li><a target="blank" href="https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Instalaci%C3%B3n-de-Git">Git</a><br /> </li>
                                <li><a target="blank" href="https://code.visualstudio.com/download">Visual Studio Code</a></li>
                            </div>
                        </details>
                        <details>
                            <summary>CONFIGURACIÓN DEL PROGRAMA Y COMPONENTES</summary>
                            <div>
                                <li>1. Crear carpeta red-jods-aliados-frontend</li>
                                <li>2. Abrir Visual Studio Code desde la carpeta creada anteriormente</li>
                                <li>3. Abrir Terminal</li>
                                <li>4. Ingresar comando git clone https://github.com/programateacademy/red-jods-aliados-frontend</li>
                                <li>5. Ingresar comando npm install</li>
                                <li>6. Instalar librerías y paquetes ingresando el comando:</li>
                                <ul>npm install @fontsource/poppins</ul>
                                <ul>npm install axios</ul>
                                <ul>npm install bootstrap</ul>
                                <ul>npm install react</ul>
                                <ul>npm install react-bootstrap</ul>
                                <ul>npm install react-dom</ul>
                                <ul>npm install react-hook-form</ul>
                                <ul>npm install react-icons</ul>
                                <ul>npm install react-router-dom</ul>
                                <ul>npm install react-table</ul>
                                <ul>npm install sweetalert2</ul>
                                <li>7. Ejecutar desde el navegador, ingresando el comando npm run dev</li>
                            </div>
                        </details>
                    </div>

                </details>

                <details>
                    <summary>
                        DESCRIPCIÓN DE MÓDULOS
                    </summary>
                    <div>
                        <li><span className='title'>Módulo de Inicio de Sesión:</span> Los usuarios pueden iniciar sesión en la plataforma.</li>
                        <li><span className='title'>Módulo de Usuarios:</span> Este módulo presenta la creación de 2 roles:</li>
                        <ul>Superadministrador: Accede a los módulos de aliados, actividades y se le otorga todos los permisos (crear, consultar, actualizar y eliminar usuarios).</ul>
                        <ul>Administrador: Accede a los módulos de aliados y actividades, con permisos para consultar usuarios.</ul>
                        <li><span className='title'>Módulo de Aliados:</span> Permite crear, consultar, actualizar y eliminar aliados.</li>
                        <li><span className='title'>Módulo de Actividades:</span> Permite crear, consultar, actualizar y eliminar actividades</li>
                        <li><span className='title'>Módulo de Perfil de Aliados:</span> Permite visualizar la información del aliado de forma detallada.</li>
                        <li><span className='title'>Módulo de Lista de Aliados:</span> Permite visualizar la información principal del aliado en una tabla.</li>

                    </div>
                </details>

                <details>
                    <summary>
                        DESCRIPCIÓN DE CÓDIGO FUENTE
                    </summary>
                    <div>
                        <p>El proyecto está estructurado en Frontend y Backend que separa los datos de una aplicación, la interfaz de usuario y la lógica de control, las carpetas están organizadas según la funcionalidad. La aplicación web se desarrolló en el lenguaje de programación JavaScript, además se usó frameworks en la parte del Front React y en la parte del Back Express y la base de datos fue diseñada en Mongo.<br /></p>
                        <details>
                            <summary>ESTRUCTURA DE PROYECTO FRONTEND</summary>
                            <div>
                                <li><span className='title'>src:</span> Carpeta donde se encuentran los archivos principales del proyecto.</li>
                                <li><span className='title'>apis:</span> Carpeta donde se implementa axios</li>
                                <li><span className='title'>assets:</span> Contiene las imágenes</li>
                                <li><span className='title'>componentes:</span> Contiene los componentes reutilizables utilizados en el proyecto.</li>
                                <li><span className='title'>routes:</span> contiene los archivos que indican las rutas</li>
                                <li><span className='title'>styles:</span> contienen los estilos generales de la aplicación.</li>
                                <li><span className='title'>views:</span> Contiene las páginas principales del proyecto. </li>
                                <li><span className='title'>index.html</span></li>
                                <li><span className='title'>package-lock.json</span></li>
                                <li><span className='title'>package.json</span></li>
                            </div>
                        </details>
                        <details>
                            <summary>EXPLICACIÓN DE COMPONENTES</summary>
                            <div>
                                <details>
                                    <summary>Login</summary>
                                    <div>
                                        <li><span className='title'>Función:</span> El componente Login es un formulario que se utiliza para manejar el inicio de sesión del usuario, siempre y cuando el usuario se encuentre registrado en el sistema.</li>
                                        <li><span className='title'>Variables:</span>
                                            <ul>register: Función para registrar los campos del formulario con la librería react-hook-form.</ul>
                                            <ul>submitHandler Función que se encarga de manejar el envío de los datos del formulario.</ul>
                                            <ul>errors: Objeto que contiene los errores de validación del formulario.</ul>
                                            <ul>navigate: Objeto que se utiliza para navegar a otras páginas.</ul>
                                        </li>
                                        <li><span className='title'>Diseño:</span> Se empleó Bootstrap y CSS para definir los estilos del formulario, además se tuvo en cuenta la carta gráfica e imagen corporativa del cliente.</li>
                                        <li><span className='title'>Vista:</span> El componente renderiza un formulario de inicio de sesión que contiene los campos de correo electrónico y contraseña. También se proporciona un botón de envío que llama a la función submitHandler cuando se presiona. Si se ingresan credenciales inválidas, se muestran mensajes de alerta utilizando el componente PopUp. Una vez que el usuario envía el formulario, se envían las credenciales al servidor utilizando Axios Instance, si la autenticación es exitosa, se navega a la página de lista de aliados.</li>
                                    </div>
                                </details>
                                <details>
                                    <summary>AlliesList</summary>
                                    <div>
                                        <li><span className='title'>Función:</span> Renderiza una lista de aliados en una tabla con ciertas funcionalidades, como un botón para agregar nuevos aliados, un campo de búsqueda y un switch para cambiar el estado del aliado.</li>
                                        <li><span className='title'>Variables:</span>
                                            <ul>testData: Es una variable que almacena datos.</ul>
                                            <ul>search: Es una variable de estado que almacena el valor actual del campo de búsqueda.</ul>
                                            <ul>setSearch: Es una función de estado que actualiza el valor de search cuando se escribe algo en el campo de búsqueda.</ul>
                                        </li>
                                        <li><span className='title'>Diseño:</span> Se utiliza Bootstrap para estilizar la tabla y algunos otros elementos como los botones y el campo de búsqueda. También se utilizan algunos iconos de React para añadir funcionalidades visuales como el botón de búsqueda y el botón de agregar aliados.</li>
                                        <li><span className='title'>Vista:</span> El componente devuelve un contenedor principal con dos secciones: la sección "addsearch" y la sección "table". La sección "addsearch" contiene un botón "Agregar", un ícono de filtro y un campo de búsqueda con el ícono de búsqueda. La sección "table" contiene una tabla que muestra información sobre los aliados.<br /><br />La tabla se crea utilizando la librería react-bootstrap y tiene un encabezado con los nombres de las columnas de la tabla: Organización, Descripción, Responsable, Eje, ODS, Fecha de inicio también incluye un botón de interruptor (switch) que permite al usuario cambiar el estado del aliado. La información se encuentra en una fila con las clases CSS de la tabla y los estilos de los componentes se encuentran en un módulo CSS separado.<br />
                                        </li>
                                    </div>
                                </details>
                                <details>
                                    <summary>NewUser</summary>
                                    <div>
                                        <li><span className='title'>Función:</span> Es un componente que utiliza hooks para crear, consultar, actualizar y eliminar usuarios, así mismo para otorgar permisos a los módulos de la aplicación.</li>
                                        <li><span className='title'>Variables:</span>
                                            <ul>users: Es una matriz que contiene la lista de usuarios.</ul>
                                            <ul>showModal: Indica si la ventana modal de creación/edición de usuarios está abierta o no.</ul>
                                            <ul>selectedUser: Es un objeto que representa al usuario seleccionado para edición.</ul>
                                            <ul>permissions: Esta variable es un objeto que contiene los permisos de cada módulo de la aplicación, y se actualiza mediante una función setPermissions que se llama cuando se cambian los permisos de un usuario.</ul>
                                        </li>
                                        <li><span className='title'>Diseño:</span> El diseño del componente utiliza la librería de estilos Bootstrap para crear una tabla que muestra los usuarios registrados en la aplicación, así como botones para crear, editar y eliminar usuarios.<br /><br />
                                            Cuando se hace clic en el botón "Crear usuario", se muestra una ventana modal que permite crear un nuevo usuario o editar uno existente.
                                        </li>
                                        <li><span className='title'>Vista:</span> La vista del componente se compone de dos partes principales: la tabla de usuarios y la ventana modal de creación/edición de usuarios.
                                            <ul>La tabla de usuarios muestra el nombre y correo electrónico de cada usuario registrado en la aplicación. Para cada usuario, se muestran botones para editar o eliminar el usuario.</ul>
                                            <ul>La ventana modal de creación/edición de usuarios se muestra al hacer clic en el botón "Crear usuario" o "Editar" en la tabla de usuarios. La ventana modal contiene un formulario que permite introducir el nombre y correo electrónico del usuario, y botones para guardar o cancelar la acción.</ul>
                                        </li>
                                    </div>
                                </details>
                                <details>
                                    <summary>NewPartner</summary>
                                    <div>
                                        <li><span className='title'>Función:</span> Permite la creación de un nuevo aliado.</li>
                                        <li><span className='title'>Variables:</span>
                                            <ul>useForm: Es un hook que se utiliza para trabajar con formularios en React.</ul>
                                            <ul>IoEyeSharp, IoAttach y FaTrash: Son iconos importados desde la librería de React Icons.</ul>
                                            <ul>Container, Row, Col: Son componentes importados desde la librería de diseño Bootstrap, y se utilizan para estructurar el diseño del formulario. </ul>
                                            <ul>fileList: Es una variable de estado que utiliza el hook useState para manejar la lista de archivos seleccionados por el usuario para cargar en el formulario.</ul>
                                            <ul>register: Se utiliza para registrar los campos del formulario y establecer las reglas de validación. Se utiliza junto con el hook useForm.</ul>
                                            <ul>handleSubmit: Permite enviar el formulario cuando se hace clic en el botón de envío. </ul>
                                            <ul>errors: Se utiliza para almacenar los errores de validación de los campos del formulario</ul>
                                        </li>
                                        <li><span className='title'>Diseño:</span> Se utilizó varios componentes de Bootstrap y CSS para dar estilos al formulario, algunos de esos elementos son "Container", "Row" y "Col" para organizar los diferentes campos del formulario. Los campos incluyen el nombre y la imagen del Aliado, los objetivos de desarrollo sostenible, el contacto del Aliado (número de teléfono y correo electrónico), y la opción de adjuntar archivos al formulario.</li>
                                        <li><span className='title'>Vista:</span> La vista final del formulario se define en la función "return", que devuelve el formulario completo y sus diferentes campos. Algunos campos son obligatorios y se indican con un asterisco (*). El formulario también incluye botones para cargar imágenes, archivos, y enviar la información del formulario a la base de datos.</li>
                                    </div>
                                </details>
                                <details>
                                    <summary>NewEvent</summary>
                                    <div>
                                        <li><span className='title'>Función:</span> Permite crear y/o programar una actividad.</li>
                                        <li><span className='title'>Variables:</span>
                                            <ul>register: Función proporcionada por la librería react-hook-form que registra un campo del formulario y devuelve un objeto que contiene una serie de métodos para controlar la validación y el manejo de errores.</ul>
                                            <ul>handleSubmit: Es una función proporcionada por useForm que se utiliza para enviar los datos del formulario cuando se hace clic en el botón de enviar.</ul>
                                            <ul>onSubmit: Es una función definida por el usuario que se ejecuta cuando se envía el formulario y que en este caso simplemente imprime los datos del formulario en la consola.</ul>
                                        </li>
                                        <li><span className='title'>Diseño:</span> Se utiliza CSS para personalizar el estilo del formulario y algunos componentes de React-Bootstrap, como Container, Row y Col, para proporcionar un diseño flexible y responsivo y CSS para personalizar el estilo del formulario.</li>
                                        <li><span className='title'>Vista:</span> Es un formulario que contiene varios campos para que el usuario pueda ingresar información sobre una nueva actividad/evento. Los campos incluyen la fecha, el tipo, el nombre y el organizador del evento. Los campos obligatorios están marcados con un asterisco. Cuando el usuario hace clic en el botón de enviar, se ejecuta la función handleSubmit, que valida los datos del formulario y los envía a la función onSubmit para su almacenamiento en la base de datos.</li>
                                    </div>|
                                </details>
                            </div>
                        </details>
                    </div>
                </details>

            </div>
        </>
    );
}

export default Documentation;