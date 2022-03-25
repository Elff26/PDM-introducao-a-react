import  React  from "react"
import ReactDOM from "react-dom"
import './styles.css' 

// const App = () => {
//     return <div>Meu primeiro componente ReactJS</div>
// }

const App = () => {
    const estilosBotao = {
        marginTop: 12, 
        paddingTop: 8, 
        paddingBottom: 8, 
        backgroundColor: 'blueviolet', 
        color: 'white',
        border: 'none', 
        width: "100%", 
        borderRadius: 8
    }

    const textoDoRotulo = 'Nome:'

    const obterTextoDoBotao = () => "Enviar"
    return(
        // Usamos { } para indicar que o que vem a seguir é uma expressão Javascript. Quando usamos { } pela segunda vez, estamos especificando
        //um objeto JSON.
        <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
            <label className="rotulo" htmlFor="nome" style={{display: 'block', marginBottom: 4}}>{textoDoRotulo}</label>
            <input type="text" id="nome" style={{paddingTop: 8, paddingBottom: 8, borderStyle: 
            'hidden',width: '100%', borderRadius: 8, outline: 'none', boxSizing: 'border-box'}}/>
            <button style={estilosBotao}>{obterTextoDoBotao()}</button>
        </div>
    ) 
}

ReactDOM.render(
    <App />,
    document.querySelector("#root") //buscando pelo id 
)
