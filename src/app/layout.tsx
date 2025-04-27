import { Metadata } from "next";
import { Manrope } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
    title: "Spark",
    description:
        "Скачивайте любимую музыку и слушайте онлайн в хорошем качестве на Spark. Огромная библиотека mp3, удобный поиск и отличный звук. Бесплатно и без ограничений!"
};

const manrope = Manrope({
    subsets: ["latin", "cyrillic"],
    display: "swap"
});

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${manrope.className} antialiased`}
        >
            <body>{children}</body>
        </html>
    );
}
