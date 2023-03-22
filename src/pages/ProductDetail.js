import { useParams, Link } from "react-router-dom";

function ProductDetailPage(props) {
  const params = useParams();

  return (
    <>
      <h1>Product Details</h1>
      {params.productId}
      <p>
        <Link
          to=".."
          relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export default ProductDetailPage;
