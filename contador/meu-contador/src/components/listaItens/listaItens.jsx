import { useState } from "react";

function ListarItens() {
    const [itens, setItens] = useState([]);
    const [novoItem, setNovoItem] = useState('');

    const adicionarItem = () => {
        if (!novoItem) return;
        setItens([...itens, novoItem]);
        setNovoItem('');
    }

    const removerItem = (indice) => {
        setItens(itens.filter((_, index) => index !== indice));
    };

    return (
        <>
            <h2>Lista de Itens</h2>
            <input 
            type="text"
            value={novoItem}
            onChange={(event) => setNovoItem(event.target.value)} />
            <button onClick={adicionarItem}>Adicionar Item</button>
            <ul>
                {itens.map((item, index) => (
                    <li key={index}>{item} <button onClick={() => removerItem(index)}>Remover</button></li>
                ))}
            </ul>
        </>
    );
}

export default ListarItens