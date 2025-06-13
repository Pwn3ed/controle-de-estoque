import { IEstoque } from "@/types/types";

type EstoqueCardProps = {
  estoque: IEstoque
};

const EstoqueCard = ({ estoque }: EstoqueCardProps) => {
  return (
    <div>
        {
            estoque.nome
        }
    </div>
  )
};

export default EstoqueCard;
