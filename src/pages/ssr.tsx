import Link from 'next/link';
import dayjs from "dayjs";

const SSR = ({ now }: { now: string }) => {
    return (
        <main>
            <p>Hello SSR!</p>
            <p>Now - {now}</p>
            <Link href='/'>to Home</Link>
        </main>
    );
};

export const getServerSideProps = async () => {
    await new Promise((resolve) => setTimeout(resolve, process.env.NEXT_PUBLIC_DELAY_MS));
    const data = await (await fetch(process.env.NEXT_PUBLIC_API_URL)).json();
    const now = dayjs(data['datetime']).format('YYYY-MM-DD HH:mm:ss');
    return {
        props: {
            now,
        },
    };
};

export default SSR;
