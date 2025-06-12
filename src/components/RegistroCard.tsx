import { IRegistro } from "@/types/types";

type RegistroCardProps = {
  registro: IRegistro
};

const RegistroCard = ({ registro }: RegistroCardProps) => {
  return (
    <div>
      <p>{registro.estoque.nome}</p>
      {registro.estoque.itens.map( (item) => {
        return (
          <p>{item.nome}</p>
        )
      } )}
    </div>
  )
};

export default RegistroCard;
