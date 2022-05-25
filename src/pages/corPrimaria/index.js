import axios from "axios"
import { useState } from "react"


export default function Index(){

    const [cor, setCor]  = useState('');
    const [resposta, setResposta]  = useState('');

     async function verificarCorPrimaria() {
       const resp = await axios.get ('http://localhost:5000/dia2/corprimaria/' + cor);

      if( resp.data.primaria === true){
          setResposta('Sim!');
      } else{
          setResposta('Nao!');
      }
    }
    return(
        <main>
            <div>
        <h1>Cor Primaria</h1>
        </div>

        <div>
            Cor <input type='text' value={cor} onChange={e => setCor(e.target.value)}/>
            </div>
            <div> 
                <button onClick={verificarCorPrimaria}>Verificar</button>
            </div>

            <div>
                É cor Primaria? {resposta}
            </div>
            </main>
    )
}