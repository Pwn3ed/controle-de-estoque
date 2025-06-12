import { Estoque } from "@/types/types";

type EstoqueComponentProps = {
  estoque: Estoque
};

const EstoqueComponent = ({ estoque }: EstoqueComponentProps) => {
  return (
    <h1>Componente de Estoque</h1>


  )
};

export default EstoqueComponent;
