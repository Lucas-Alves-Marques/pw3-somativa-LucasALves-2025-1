import './Button.module.css'
import { Link } from 'react-router-dom'

const Button = ({ label, cod_livro, router }) => {

    return (
        <div>
            <Link to={`${router}${cod_livro}`}>
                <button>{label}</button>
            </Link>
        </div>
    )
}

export default Button