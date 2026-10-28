import { useParams } from "react-router-dom";
import { product } from "./products";

export default function Product() {
    const { productid } = useParams();
    const product1 = product[productid - 1];

    return (
        <div>
            <div> Name:{product1.name}</div>
            <div> age:{product1.age}</div>
        </div>
    );
}
