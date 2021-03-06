import React, { Component } from "react";
// Components
import Btn from "../components/button.js";
// Images
import contato from "../img/contato.svg";
import facebookIcon from "../img/footerFacebookIcon.png";
import mailIcon from "../img/footerMailIcon.png";
import instagramIcon from "../img/footerInstagramIcon.png";
import githubIcon from "../img/footerGitHubIcon.png";

class Contato extends Component {
  enviarMensagem() {
    setTimeout(() => alert("Mensagem Enviada com Sucesso"), 200);
  }
  componentDidMount() {
    document.getElementById("top-of-root").scrollIntoView(true);
  }

  render() {
    return (
      <div className="container-fluid bg-white">
        <div className="container bg-white">
          <h1 className="green-text text-center pt-3">Contato</h1>
          {/* <!-- Primeira row --> */}
          <div className="row">
            {/* <!-- Imagem à direita/topo --> */}
            <div className="col-sm-12 col-md-11 mt-2 mb-3 mx-auto pr-1 d-lg-none ">
              <img
                src={contato}
                width="98%"
                className="my-auto rounded-image"
                alt="Imagem simbolizando diferentes formas de contato"
              />
            </div>
            {/* <!-- Fim da Imagem à direita/topo --> */}

            {/* <!-- Text-box com formulário à esquerda --> */}
            <div className="col-12 col-md-11 col-lg-7 mt-2 mb-3 mx-auto">
              <div className="jumbotron-green my-auto ">
                <form>
                  <div className="form-group">
                    <label className="text-white">
                      <strong>
                        <h5>Nome Completo</h5>
                      </strong>
                    </label>
                    <input
                      type="text"
                      className="form-control b-info type-field"
                      id="nome-contato"
                      placeholder="João da Silva"
                    />
                  </div>

                  <div className="form-group">
                    <label className="text-white">
                      <strong>
                        <h5>E-mail</h5>
                      </strong>
                    </label>
                    <input
                      type="email"
                      className="form-control b-info type-field"
                      id="email-contato"
                      placeholder="joãodasilva@email.com"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label className="text-white">
                      <strong>
                        <h5>Finalidade do Contato</h5>
                      </strong>
                    </label>
                    <select
                      className="form-control b-info type-field"
                      id="finalidade-contato"
                    >
                      <option>Sugestão</option>
                      <option>Elogio</option>
                      <option>Ajuda</option>
                      <option>Outros</option>
                      <option>Reclamação</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="text-white">
                      <strong>
                        <h5>Mensagem</h5>
                      </strong>
                    </label>
                    <textarea
                      className="form-control b-info type-field"
                      id="mensagem-contato"
                      rows="6"
                      placeholder="Digite sua mensagem neste campo..."
                    ></textarea>
                  </div>
                  <Btn
                    text="Enviar Mensagem"
                    onClick={this.enviarMensagem}
                    className="btn btn-dark-green shadow mt-2 mr-2"
                  />
                </form>
              </div>
            </div>
            {/* <!-- Fim da text-box com formulário à esquerda --> */}
            {/* <!-- Imagem à direita/topo --> */}
            <div className="col-sm-12 col-md-8 col-lg-5 mt-2 mb-3 mx-auto d-none d-lg-block">
              <div className="row mb-5 mt-1">
                <div className="jumbotron-clear my-auto text-center ">
                  <h1 className="green-text">Fale Conosco!</h1>
                  <br />
                  <h4 className="text-content text-left">
                    Tem algum elogio, sujestão ou reclamação?
                  </h4>
                  <br />
                  <h4 className="text-content text-left">
                    Conte-nos! Ficamos felizes com seu feedback.
                  </h4>
                  <br />
                  <h4 className="text-content text-left">
                    Acreditamos que uma comunicação eficaz, gera um melhor
                    relacionamento.
                  </h4>
                </div>
              </div>

              <div className="row">
                <img
                  src={contato}
                  width="98%"
                  className="my-auto rounded-image"
                  alt="Imagem simbolizando diferentes formas de contato"
                />
              </div>
            </div>
            {/* <!-- Fim da Imagem à direita/topo --> */}
          </div>
          <div className="text-center">
            <h6 className="green-text">
              <b>Encontre-nos nas redes sociais</b>
            </h6>
            <a
              href="https://pt-br.facebook.com/fixhubservicos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} height="50px" />
            </a>
            <a
              href="https://www.instagram.com/fixhub_servicos/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4"
            >
              <img src={instagramIcon} height="50px" />
            </a>
            <a
              href="https://github.com/vsilvasoares1710/Projeto-Recode"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <img src={githubIcon} height="50px" />
            </a>
            <h6 className="green-text text-center mt-4">
              <b>Sugestões, críticas ou observações?</b>
              <br />
              <b>contato@fixhub.tk</b>
            </h6>
          </div>
          {/* <!-- Fim da primeira row --> */}
        </div>
      </div>
    );
  }
}

export default Contato;
