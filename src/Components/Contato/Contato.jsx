import React from 'react';
import FormFields from './FormFields';
import FormArea from './FormArea';
import Button from '../Generics/Button';
import img from '../../assets/img/contact-pic.jpg';
import { formGroup, contato, label, input, area, title, button, image, form, fields } from './Contato.module.css';

const Contato = () => {
  return (
    <section className={contato}>
        <div class={title}>
          <h1>Contato</h1>
        </div>
        <section className={form}>
          <div className={image}>
            <img src={img} alt="logo" />
          </div>
          <form className={fields}>
            <div className={formGroup}>
              <FormFields cLabel={label} cInput={input} name="nome" text="Nome:" input="text" />
            </div>
            <div className={formGroup}>
              <FormFields cLabel={label} cInput={input} name="email" text="E-mail:" input="email" />
            </div>
            <div className={formGroup}>
              <FormArea cLabel={label} cArea={area} name="mensagem" cols="30" text="Mensagem:" />
            </div>
            <div className={formGroup}>
              <Button type="submit" cButton={button} >Enviar</Button>
            </div>
          </form>
        </section>
      </section>
  )
}

export default Contato
