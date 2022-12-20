import {Container, Tittle} from './myPorfolio.styles'
import imgProyect1 from '../../assets/Proyectos/ecommerce.png'
import imgProyect2 from '../../assets/Proyectos/webClima.png'
import imgProyect3 from '../../assets/Proyectos/proyectoGAC.png'
import imgProyect4 from '../../assets/Proyectos/project.jpg'
import imgProyect5 from '../../assets/Proyectos/ReactBasicos.png'
import imgProyect6 from '../../assets/Proyectos/ProyectoSpot2.png'
import CardPortfolio from '../CardPortfolio/CardPortfolio'

const MyPortfolio = () => {
  return(
    <Container id='portfolio'>
      <Tittle>my portfolio</Tittle>
      <CardPortfolio
        tittle={'Ecommerce'}
        description={'Proyecto React de un Ecommerce donde utilizo distintos tipos de vista como modales o ruteo con React Router, distintos tipos de filtrados, context para el manejo de carrito, Firebase para el manejo de base de datos, entre otras cosas.'}
        img={imgProyect1}
        demo={"https://ecommercereactcoderhouse.netlify.app"}
        code={"https://github.com/Nicofnx/EcommerceReact"}
      />
      <CardPortfolio
        tittle={'Weather App'}
        description={'En esta APP utilizo vainilla JS para el desarrollo de toda la apliacion. En la cual mediante fetch asincrono llamo a la API "Open Weather API" la cual me devuelve el pronostico de los proximos 5 dias. Genero una pequeña interaccion con el usuario el cual permite guardase las ciudades favoritas. Esta data se almacena en el localStorage.'}
        img={imgProyect2}
        demo={"https://nicofnx.github.io/wheaterApp/"}
        code={"https://github.com/Nicofnx/wheaterApp/"}

      />
      <CardPortfolio
        tittle={'Sitio web GAC SRL'}
        description={'Pagina web de 5 secciones con formulario para solicitud de presupuesto y envio de CV. Para el diseño utilice Figma para presentar al cliente la visual y para programar Boostrap junto con SASS.'}
        img={imgProyect3}
        demo={"https://gacsrl.com.ar"}
        code={"https://github.com/Nicofnx/gac-web"}

      />
      <CardPortfolio
        tittle={'Movies con React'}
        description={'En este proyecto utilizo React JS puro con algunas dependencias dentro del ecosistema de React como lo es React Router V6 para el enlazado de las distintas páginas. Además, implemento el uso de hooks predeterminados como el useState y useEffect como también algunos hooks personalizados, los cuales utilice para el buscador.Por otro lado realizo el consumo de la api https://www.themoviedb.org, api gratuita para este tipo de proyectos.'}
        img={imgProyect4}
        demo={"https://moviesreactjsapp.netlify.app/"}
        code={"https://github.com/Nicofnx/moviesReact.git"}

      />
      <CardPortfolio
        tittle={'Primeros pasos con React'}
        description={'Para poner en practica lo visto en mis primeros pasos en React realice algunas cards para practicar el concepto de componente y props de los mismos, ademas un contador para practicar el uso de estados y sus cambios, también una calculadora y por ultimo una lista de tareas donde por medio de props, estado y funciones, agrego, quito o tacho tareas a realizar.'}
        img={imgProyect5}
        demo={"https://reactbasicos.netlify.app/"} 
        code={"https://github.com/Nicofnx/React-primeros-pasos"}

      />
      <CardPortfolio
        tittle={'Challenge tecnico'}
        description={'En este desafio debia utilizar un filtrado para mostrar distintos spots dependiendo de parametros como el tamaño y ubicacion. Ademas utilizar un mapa donde se visualizaran los markets, para ello utilice Context. Ademas hice uso de PropTypes, ReactRouter, styled Component y axios para realizar la request al endpoint.(Ya no tengo acceso a la api de los spot por ello no aparecen en el mapa.)'}
        img={imgProyect6}
        demo={"https://spot2challenge.netlify.app/"}
        code={"https://github.com/Nicofnx/Spot2Challenge.git"}

      />

    </Container>
  )
}

export default MyPortfolio