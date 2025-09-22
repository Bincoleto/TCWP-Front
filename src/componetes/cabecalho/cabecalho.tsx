function Cabecalho(){
    return(
        <div className="cabecalho">
            <div className="cabecalho-nome">
                <img src="public/icone-tcwp.svg" alt="The Crazy World Pedals" />
                <h1>The Crazy World Pedals</h1>
            </div>

            <nav className="menu">
                <a href="./">Home</a>
                <a href="./Sobrenos">Sobre Nós</a>
                <a href="./">Loja</a>
                <a href="./">Login</a>
            </nav>
        </div>
    )
}


export default Cabecalho