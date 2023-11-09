declare namespace NodeJS {
    interface ProcessEnv {
        readonly NEXT_PUBLIC_DELAY_MS: number;
        readonly NEXT_PUBLIC_API_URL: string;
    }
}
