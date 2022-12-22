import { useForm } from "react-hook-form";
import {Container, BtnSubmit} from './myForm.styles'
import { useCallback, useEffect } from "react";

const MyForm = () => {

    const { register, formState: { errors }, watch, handleSubmit, reset } = useForm({
      defaultValues: {
        nombre: '',
        email: '',
        mensaje: '',
      }
    });

 

    const onSubmit = (data) => {
        console.log(data);
        reset({
          nombre: '',
          email: '',
          mensaje: '',
        })
        
    }
    
    

    return( 
      <Container id ='contact'>
        <h2>Contact</h2>
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre</label>
                <input placeholder="Tu nombre..." type="text" {...register('nombre', {
                    required: true,
                    maxLength: 20
                })} />
                {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 20 caracteres</p>}
            </div>
            <div>
                <label>Email</label>
                <input placeholder="Tu email..." type="text" {...register('email', {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
                {errors.email?.type === 'required' && <p>El campo email debe estar completo</p>}
            </div>
            <div>
                <label>Dejame tu mensaje</label>
                <textarea placeholder="Tu mensaje..." cols="30" rows="10" {...register('mensaje', {
                    required: true,
                })} />
                {errors.mensaje?.type === 'required' && <p>Dejame un mensaje</p>}
            </div>
            <p>Gracias <span>{watch('nombre')}</span> por contactarte con migo. </p>
            <BtnSubmit type="submit" value="Enviar" />
        </form>
      </Container>
  )}

export default MyForm;