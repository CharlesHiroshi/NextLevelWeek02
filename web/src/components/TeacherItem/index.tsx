import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/7002287?s=460&u=d489a70c068e635a55935c8d210ab1f9fa6365e8&v=4" alt="Charles Hiroshi" />
        <div>
          <strong>Charles Hiroshi</strong>
          <span>Análise de Sistemas</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias para Sistemas avançados.
            <br /><br />
            Apaixonado por difundir a experiência de desenvolvimento dos sistemas mais avançados da atualidade.
          </p>
      <footer>
        <p>
          Preço/Hora
              <strong>¥1800</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
                Entrar em contato
              </button>
      </footer>
    </article>
  )
}

export default TeacherItem