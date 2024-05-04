import Container from "@/src/components/Container";
import Header from "@/src/components/Header";

export default function pageLayout({children,}: {children: React.ReactNode;}) {
    return (
        <html lang='en' className="bg-black dark:bg-white">
            <Header> ToDo List </Header>
            <Container>{children}</Container>
        </html>
    );
}