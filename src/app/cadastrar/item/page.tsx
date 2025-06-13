

const Item = () => {
    return (
        <div className="flex flex-col items-center">
            <p className="text-2xl">Cadastrar novo item</p>

            <div className="flex flex-col p-2 m-4 border-2 rounded-lg">
                <div className="flex flex-row justify-between p-2">
                    <p className="text-xl">Nome: </p>
                    <input className="ml-1 rounded-lg" type="text" />
                </div>

                <div className="flex flex-row justify-between p-2">
                    <p className="text-xl">Descrição: </p>
                    <input className="ml-1 rounded-lg" type="text" />
                </div>

                <div className="flex flex-row justify-between p-2">
                    <p className="text-xl">Quantidade: </p>
                    <input className="ml-1 rounded-lg" type="text" />
                </div>

                <div className="flex flex-row justify-between p-2">
                    <p className="text-xl">Quantidade Mínimo: </p>
                    <input className="ml-1 rounded-lg" type="text" />
                </div>

                <div className="flex flex-row justify-between p-2">
                    <p className="text-xl">Preço: </p>
                    <input className="ml-1 rounded-lg" type="text" />
                </div>


            </div>
            
            <button className="text-2xl bg-green-700 rounded-lg p-2 mt-2">Cadastrar</button>

        </div>
    )
}

export default Item;
