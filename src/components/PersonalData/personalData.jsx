import MyServices from '../MyServices/MyServices'
import {Container, ContainerData, Tittle, InfoMe, MyDescription, ContainerSkills } from './PersonalData.styles'
import MyPortfolio from '../MyPortfolio/MyPortFolio'
import MyFormation from '../MyFormation/MyFormatio'
import MyForm from '../Contact/MyForm'

const PersonalData = () => {
  return (
    <Container>
    <ContainerData id='about'>
       <Tittle>About Me</Tittle>
       <InfoMe>35 años  /  Lujan, Bs As  /  Freelance</InfoMe>
       <MyDescription>
          Front end Developer apacionado por las tecnologias y en el aprendisaje de lo nuevo. Soy una persona aplicada y responsable, que comenzo el camino del programador de forma autodidacta y luego realice cursos para poder avalar mis conocimiento en las bases del desarrollo WEB donde aprendi HTML, CSS, JS y el framework que mas me gusta, React.<br/> Me gusta el trabajo en equipo, ya que soy empatico y se que es la mejor manera de poder llevar a cabo cualquier objetivo. Ademas conosco y aplico metodologias agiles, en especial SCRUM. <br/><br/>
          <p>Aquí hay algunas tecnologías con las que he estado trabajando recientemente:</p> 
          <ContainerSkills>
            <ul>
              <li><span>HTML5</span></li>
              <li><span>CSS3</span></li>
              <li><span>JS</span></li>
              <li><span>React</span></li>
            </ul>
            <ul>
              <li><span>Boostrap</span></li>
              <li><span>SASS</span></li>
              <li><span>Firebase</span></li>
            </ul>
          </ContainerSkills>
       </MyDescription>
       <MyServices />
       <MyPortfolio />
       <MyFormation />
       <MyForm />
    </ContainerData>

    </Container>
  )
}

export default PersonalData