interface Props {
	params: {
		slug: string[];
	};
}
const ProductsPage = ({ params: { slug } }: Props) => {
	return <div>ProductsPage {slug} </div>;
};

export default ProductsPage;
