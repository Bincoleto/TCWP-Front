import Banner from "../../componetes/banner/banner"
import Cabecalho from "../../componetes/cabecalho/cabecalho"
import Loja from "../../componetes/loja/loja"
import RecebaNovidades from "../../componetes/novidades/novidades"

function Home(){
    return(
        <div>
            <Cabecalho/>
            <Banner/>
            <Loja/>
            <RecebaNovidades/>
        </div>
    )
}

export default Home