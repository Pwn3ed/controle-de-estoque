import { resetEstoque } from "@/lib/estoqueDB";

const Reset = () => {

    resetEstoque();

    return (
        <h1>O seu banco de dados foi resetado.</h1>
    )
}

export default Reset;