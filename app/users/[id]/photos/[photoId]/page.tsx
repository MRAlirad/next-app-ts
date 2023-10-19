interface Props {
	params: {
		id: number;
		photoId: number;
	};
}

const UserPhotoPage = ({ params: { photoId, id } }: Props) => {
	return <div>UserPhotoPage {id} {photoId}</div>;
};

export default UserPhotoPage;
