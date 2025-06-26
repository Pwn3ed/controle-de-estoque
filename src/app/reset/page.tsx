import { resetEstoque, resetItem, resetRegistro } from "@/lib/estoqueDB";

const Reset = () => {

    //resetRegistro();
    resetEstoque();
    resetItem();

    return (
        <div className="flex flex-col items-center">
            <h1>O seu banco de dados foi resetado.</h1>
        </div>
    )
}

export default Reset;
