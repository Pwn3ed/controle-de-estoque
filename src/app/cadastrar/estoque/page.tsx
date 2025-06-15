
const Estoque = () => {
    return (
        <div className="flex flex-col items-center">
            <p className="text-2xl">Cadastrar novo estoque</p>

            <div className="flex flex-col p-2 m-4 border-2 rounded">
                <div className="flex flex-row justify-between p-2">
                    <p className="text-xl">Nome: </p>
                    <input className="ml-1 rounded" type="text" />
                </div>

                <div className="flex flex-row justify-between p-2">
                    <p className="text-xl">Local: </p>
                    <input className="ml-1 rounded" type="text" />
                </div>

                <div className="flex flex-row p-2">
                    <p className="text-xl">Descricao</p>
                    <input className="ml-1 rounded" type="text" />
                </div>


            </div>
            
            <button className="text-2xl bg-green-700 rounded p-2 mt-2">Cadastrar</button>

        </div>
    )
}

export default Estoque;
