import Banner from "../../componetes/banner/banner";
import Cabecalho from "../../componetes/cabecalho/cabecalho";
import RecebaNovidades from "../../componetes/novidades/novidades";
import Rodape from "../../componetes/rodape/rodape";

function SobreNos(){
    return(
        <>
            <Cabecalho/>
            <Banner/>
            <div className="sobrenos-principal">
                <h2>Sobre Nós</h2>
                <div className="sobrenos-div">
                    <div className="sobrenos-div-item">
                        <p>Ajudamos você Guitarrista, Baixas e qualquer 
                            amante de pedais que deseja dar destino ao seus pedais parados a 
                            novas lares e além de tudo, ajudamos a você a encontrar novas pedais para sua coleção</p>
                        <img src="public/img/Imagem-pedal-boss.png" alt="Imagem Pedal Boss" width={520} height={440}/>
                    </div>

                    <div className="sobrenos-div-item">
                        <p><strong>Crie sua conta e anuncie seus pedais.</strong></p>
                        <a href="./">Cadastre-se Aqui</a>
                    </div>

                </div>
            </div>
            <RecebaNovidades/>
            <Rodape/>
        </>
    )
}

export default SobreNos;