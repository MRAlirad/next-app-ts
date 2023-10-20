import { NextRequest, NextResponse } from 'next/server';

interface Props {
	params: {
		id: number;
	};
}

export function GET(request: NextRequest, { params }: Props) {
	if (params.id > 10) return NextResponse.json({ error: 'User Not Found' }, { status: 404 });
	return NextResponse.json({ id: 1, name: 'Mohammad' });
}

export async function PUT(request: NextRequest, { params }: Props) {
	const body = await request.json();
	if (!body.name) return NextResponse.json({ error: 'name is required' }, { status: 400 });
	if (params.id > 10) return NextResponse.json({ error: 'user not found' }, { status: 404 });

	return NextResponse.json({ id: 1, name: body.name });
}
