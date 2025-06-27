'use client'

import ItemAdd from "@/components/ItemAdd";
import { addItem, getAllEstoque } from "@/lib/estoqueDB";
import { IEstoque, IItem } from "@/types/types";
import { useEffect, useState } from "react";


const Item = async () => {

    const estoques: IEstoque[] = await getAllEstoque();

    return (
        <div className="flex flex-col items-center">
            <p className="text-2xl">Cadastrar novo item</p>

            <div>
                <ItemAdd estoques={estoques} />
            </div>

        </div>
    )
}

export default Item;
