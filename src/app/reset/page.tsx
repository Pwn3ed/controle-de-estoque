import { resetRegistro } from "@/lib/estoqueDB";

const Reset = () => {

    resetRegistro();

    return (
        <h1>O seu banco de dados foi resetado.</h1>
    )
}

export default Reset;