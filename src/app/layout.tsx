import "./globals.css";

export const metadata = {
  title: "TodoApp",
  description: "App ToDo para tareas personales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
