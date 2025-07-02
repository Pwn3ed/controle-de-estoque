import EstoqueCard from "@/components/EstoqueCard";
import { getAllEstoque } from "@/lib/estoqueDB";
import Link from 'next/link';

const Compra = async () => {

    const estoques = await getAllEstoque();

    return (
        <div className="flex flex-col items-center gap-2">
            <p>Selecione o estoque desejado: </p>

                {
                    estoques[0] ?
                    estoques.map( (estoque) => <Link key={estoque._id} href={'/compra/'+estoque._id} ><EstoqueCard estoque={estoque} /></Link> )
                    :
                    <p>Nenhum estoque encontrado</p>
                }
        </div>
    )
}

export default Compra;