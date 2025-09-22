function RecebaNovidades(){
    return(
        <>
          <div className="recebaNovidedes">
            <div className="recebaNovidades-item">
                <h3>Receba Novidades</h3>
                <p>Inscreva-se em nossa newsletter para receber novidades, dicas e promoções exclusivas</p>

                <div className="recebaNovidades-divemail">
                    <input type="'email'" placeholder="Digite seu Email"/>
                    <button>Inscreve-se</button>
                </div>
            </div>

            <div className="recebaNovidades-item">
                <img src="public/img/Imagem-novidades.png" alt="Imagem TCWP" />
            </div>

          </div>
        </>
    )
}
 
export default RecebaNovidades