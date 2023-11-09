'use client';

import dayjs from "dayjs";

const ClientComponent = async () => {
    await new Promise((resolve) => setTimeout(resolve, process.env.NEXT_PUBLIC_DELAY_MS));
    const data = await (await fetch(process.env.NEXT_PUBLIC_API_URL,{ cache: 'no-store' })).json();
    const now = dayjs(data['datetime']).format('YYYY-MM-DD HH:mm:ss');
    return <p>{`Now - ${now}`}</p>;
};

export default ClientComponent;
