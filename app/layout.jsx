import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "My Next App Project",
  description: "NextJs Project to learn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-mono bg-zinc-200">
        <Header />  {/* bazoume t header panw apo t main code gia n einai se kathe page*/}
        {/* edw ebale main tag me class container gia margin padding*/}
        {children}
      </body>
    </html>
  );
}
