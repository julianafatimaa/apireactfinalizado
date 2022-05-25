import { Link } from "react-router-dom";

export default function index() {
    return(
        <main>
           <h1>home</h1>

           <ul>
            <li> <Link to='/corPrimaria'> Cor Primária </Link></li>
            <li> <Link to='/frequencia'> frequencia </Link></li>
            <li> <Link to='/ingresso'> ingresso </Link></li>
            <li> <Link to='/maiorNumero'> maiorNumero </Link></li>
           </ul>
        </main>
    )
}