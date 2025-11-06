export default function NewsDetailLayout({ children , modal }: { children: React.ReactNode }) {
    return (
        <>
            {modal}
            {children}
        </>
    );
}