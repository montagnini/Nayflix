import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';


function CadastroCategoria() {
    return (
        <PageDefault>
            <h1>
                 Cadastro de Categoriass
            </h1>

            <Link to='/'>
                Go to home!!!!!!!!
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;