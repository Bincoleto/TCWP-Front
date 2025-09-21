import Banner from "../../componetes/banner/banner"
import Cabecalho from "../../componetes/cabecalho/cabecalho"
import Loja from "../../componetes/loja/loja"
import RecebaNovidades from "../../componetes/novidades/novidades"
import Rodape from "../../componetes/rodape/rodape"

function Home(){
    return(
        <div>
            <Cabecalho/>
            <Banner/>
            <Loja/>
            <RecebaNovidades/>
            <Rodape/>
        </div>
    )
}

export default Home