import Banner from "../../componetes/banner/banner"
import Cabecalho from "../../componetes/cabecalho/cabecalho"
import Loja from "../../componetes/loja/loja"

function Home(){
    return(
        <div>
            <Cabecalho/>
            <Banner/>
            <Loja/>
        </div>
    )
}

export default Home