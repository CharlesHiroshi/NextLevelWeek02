import React from 'react'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'
import warningIcon from '../../assets/images/icons/warning.svg'
import './styles.css'

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Que incrível que você quer ensinar." description="O primeiro passo é preencher este formulário de inscrição.">
      </PageHeader>
      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>
        <fieldset>
          <legend>Sobre a aula</legend>
          <Select name="subject" label="Matéria" options={[
            { value: 'Matemática', label: 'Matemática' },
            { value: 'Português', label: 'Português' },
            { value: 'Física', label: 'Física' },
            { value: 'Química', label: 'Química' },
            { value: 'Biologia', label: 'Biologia' },
            { value: 'História', label: 'História' },
            { value: 'Geografia', label: 'Geografia' },
            { value: 'Artes', label: 'Artes' },
          ]} />
          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados.
          </p>
          <button type="button">Salvar Cadastro</button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm