import dayjs from 'dayjs';
import Link from 'next/link';

const SSG = ({ now }: { now: string }) => {
    return (
        <main>
            <p>Hello SSG!</p>
            <p>Now - {now}</p>
            <Link href='/'>to Home</Link>
        </main>
    );
};

export const getStaticProps = async () => {
    await new Promise((resolve) => setTimeout(resolve, process.env.NEXT_PUBLIC_DELAY_MS));
    const now = dayjs().format('YYYY-MM-DD HH:mm:ss');
    return {
        props: {
            now,
        },
    };
};

export default SSG;
