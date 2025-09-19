function Cabecalho(){
    return(
        <div className="cabecalho">
            <div className="cabecalho-nome">
                <img src="public/icone-tcwp.svg" alt="The Crazy World Pedals" />
                <h1>The Crazy World Pedals</h1>
            </div>

            <nav className="menu">
                <a href="./">Home</a>
                <a href="./">Loja</a>
                <a href="./">Login</a>
                <a href="./">Sobre Nós</a>
            </nav>
        </div>
    )
}


export default Cabecalho