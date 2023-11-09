import Link from 'next/link';
import { Suspense } from 'react';

import ClientComponent from './ClientComponent';

const RSC = () => {
    return (
        <main>
            <p>Hello RCC!</p>
            <Suspense fallback={<p>fetching...</p>}>
                <ClientComponent />
            </Suspense>
            <Link href='/'>to Home</Link>
        </main>
    );
};

export default RSC;
