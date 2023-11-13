import ProductButton from "./ProductButton";

export default function Product({ id, title, price, noButton = false }) {
    return (
        <div style={{ border: '1px solid black', margin: '20px', padding: "20px" }}>
            <h4>{title}</h4>
            <p>R {price}.00</p>
            {
                !noButton && <ProductButton id={id} />
            }
        </div>
    );
}
