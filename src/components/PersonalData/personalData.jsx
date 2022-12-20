import MyServices from '../MyServices/MyServices'
import {Container, ContainerData, Tittle, InfoMe, MyDescription } from './PersonalData.styles'
import MyPortfolio from '../MyPortfolio/MyPortFolio'
import MyFormation from '../MyFormation/MyFormatio'

const PersonalData = () => {
  return (
    <Container>
    <ContainerData id='about'>
       <Tittle>About Me</Tittle>
       <InfoMe>35 años  /  Lujan, Bs As  /  Freelance</InfoMe>
       <MyDescription>
          Front end Developer apacionado por las tecnologias y en el aprendisaje de lo nuevo. Soy una persona aplicada y responsable, que comenzo el camino del programador de forma autodidacta y luego realice cursos para poder avalar mis conocimiento en las bases del desarrollo WEB donde aprendi HTML, CSS, JS y el framework que mas me gusta, React.<br/> Me gusta el trabajo en equipo, ya que soy empatico y se que es la mejor manera de poder llevar a cabo cualquier objetivo. Ademas conosco y aplico metodologias agiles, en especial SCRUM. 
       </MyDescription>
       <MyServices />
       <MyPortfolio />
       <MyFormation />
    </ContainerData>

    </Container>
  )
}

export default PersonalData