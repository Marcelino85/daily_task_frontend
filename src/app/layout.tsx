
import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 flex justify-center items-center h-screen">
        {children}
      </body>
    </html>
  );
}
