import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';


function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#005CB2',
    }


    const [listaCategorias, setListaCategorias] = useState([]);
    const [categoria, setCategoria] = useState(valoresIniciais);

    function setValores(chave, valor) {
        setCategoria({
            ...categoria,
            [chave]: valor,
        })
    }

    function handleChange(event) {
        setValores(event.target.getAttribute('name'), event.target.value);
    }

    useEffect(() => {
        const URL = 'http://localhost:3001/categorias';
        fetch(URL).then(async (respostaServidor) => {
            const resposta = await respostaServidor.json();
            setListaCategorias([
                ...resposta,
            ]);
        })
    }, []);




    return (
        <PageDefault>
            <h1>
                Cadastro de Categorias
            </h1>
            <form onSubmit={e => {
                e.preventDefault();
                setListaCategorias([
                    ...listaCategorias,
                    categoria
                ]);

                setCategoria(valoresIniciais);
            }}>
                <FormField
                    value={categoria.nome}
                    onChange={handleChange}
                    required={true}
                    type="text"
                    name="nome"
                    label="Categoria:"
                />

                <FormField
                    value={categoria.descricao}
                    onChange={handleChange}
                    type="textArea"
                    name="descricao"
                    label="Descrição:"
                />

                <FormField
                    value={categoria.cor}
                    onChange={handleChange}
                    required={true}
                    type="color"
                    label="Cor:"
                    name="cor"
                />

                <Button>
                    Cadastrar
                </Button>
            </form>
            <ul>
                {listaCategorias.map((categoria, indice) => {
                    return (
                        <li key={categoria}>
                            {categoria.nome}

                        </li>
                    )
                })}
            </ul>
            <Link to='/'>
                Go to home!!!!!!!!
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;