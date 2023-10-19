import UserTable from './UserTable';

interface Props {
	searchParams : {
		sortOrder: string;
	}
}

const UserPage = async ({searchParams: {sortOrder}}: Props) => {
	return (
		<>
			<h1 className='text-3xl mb-5'>Users</h1>
			<UserTable sortOrder={sortOrder} />
		</>
	);
};

export default UserPage;
