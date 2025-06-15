import { resetEstoque, resetItem, resetRegistro } from "@/lib/estoqueDB";

const Reset = () => {

    resetRegistro();
    resetEstoque();
    resetItem();

    return (
        <h1>O seu banco de dados foi resetado.</h1>
    )
}

export default Reset;