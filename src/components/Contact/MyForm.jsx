import { useForm } from "react-hook-form";
import {Container, BtnSubmit} from './myForm.styles'
import { useCallback, useEffect, useState } from "react";
import emailjs from 'emailjs-com'

const MyForm = () => {

  const frmContact = { userEmail:'', emailTitle:'', emailDetails:'' };
  const [contact,setContact] = useState(frmContact);
  const [showMessage, setShowMessage] = useState(false);
  const {emailTitle,
    userEmail,
    emailDetails} = contact
  const handleChange = e => { 
   
		const {name,value} = e.target;
  
		setContact({...contact,[name]:value}); 
  };

  const handleSubmit = e =>{
    e.preventDefault();
   
  emailjs.send(`service_wfjygl9`,`template_5u0wa9r`, contact, `Jwbw4Sk5XJFAfd-TV`)
  .then((response) => {
         console.log(`SUCCESS!`, response.status, response.text);
         setContact(frmContact);
         setShowMessage(true);
         setTimeout(() => {
          setShowMessage(false);
         }, 5000);
  }, (err) => {
         console.log(`FAILED...`, err);
  });

 
 }

    const { register, formState: { errors }, watch, reset } = useForm({
      defaultValues: {
        emailTitle,
        userEmail,
        emailDetails,
      }
    });

 
    
    

    return( 
      <Container id ='contact'>
        <h2>Contact</h2>
        
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre</label>
                <input placeholder="Tu nombre..." value={contact.emailTitle} required type="text" name="emailTitle" onChange={handleChange} />
                {errors.emailTitle?.type === 'required' && <p>El campo nombre es requerido</p>}
                {errors.emailTitle?.type === 'maxLength' && <p>El campo nombre debe tener menos de 20 caracteres</p>}
            </div>
            <div>
                <label>Email</label>
                <input placeholder="Tu email..." value={contact.userEmail} name="userEmail" onChange={handleChange} type="email" /* {...register('userEmail', {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })}  *//>
                {errors.userEmail?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
                {errors.userEmail?.type === 'required' && <p>El campo email debe estar completo</p>}
            </div>
            <div>
                <label>Dejame tu mensaje</label>
                <textarea required name="emailDetails" onChange={handleChange} className="form-control" value={contact.emailDetails} placeholder="Tu mensaje..." cols="30" rows="10" /* {...register('emailDetails', {
                    required: true,
                })}  *//>
                {errors.emailDetails?.type === 'required' && <p>Dejame un mensaje</p>}
            </div>
            <p>Gracias <span>{contact.emailTitle}</span> por contactarte con migo. </p>
            <BtnSubmit type="submit" value="Enviar" />
        </form>
        { showMessage ? <p role="alert">Email enviado correctamente!!</p> : ``}
      </Container>
  ) 

}

export default MyForm;