export default function ListaSuspensa({itens, ...rest}) { 
    return (
        <select defaultValue="" {...rest}>
            <option value="" disabled>Selecione uma opção...</option>
            {
                itens.map(item => <option key={item.id} value={item.id}>{item.nome}</option>)
            }
        </select>
    );
}