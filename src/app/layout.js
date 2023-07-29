import Navbar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata = {
    title: "Chakraa",
    description: "influencer marketing agency",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
