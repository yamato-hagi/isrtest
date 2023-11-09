'use client';

import Link from "next/link";
import {useState} from "react";
import dayjs from "dayjs";

export default function Home() {
    const [clickedAt, setClickedAt] = useState<string>();
    const handleClick = () => setClickedAt(dayjs().format('YYYY-MM-DD HH:mm:ss'));

    return (
        <main>
            <h1>以下のリンクからSSG,SSR,RSC,RCCの動きを確認</h1>
            <p>{clickedAt ? `ClickedAt - ${clickedAt}` : 'リンクをクリックしてください。'}</p>
            <div style={{display: "flex", flexDirection: "column"}}>
                {clickedAt ? (<p>遷移中...</p>) : (
                    <>
                        <Link href='/ssg' onClick={handleClick}>to SSG</Link>
                        <Link href='/ssr' onClick={handleClick}>to SSR</Link>
                        <Link href='/rsc' onClick={handleClick}>to RSC</Link>
                        <Link href='/rcc' onClick={handleClick}>to RCC</Link>
                    </>
                )}
            </div>
        </main>
    )
}
