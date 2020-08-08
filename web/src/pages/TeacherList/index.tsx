import React from 'react'
import PageHeader from '../../components/PageHeader'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os Proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matérias</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week_day">Dia da Semana</label>
            <input type="text" id="week_day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Horário</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>
      <main>
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
      </main>
    </div>
  )
}

export default TeacherList