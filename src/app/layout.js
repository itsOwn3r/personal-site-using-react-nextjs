import "./static/css/bootstrap.min.css";
import "./static/css/index.css";
import "./globals.css";
import "./static/css/font-awesome.min.css";

export const metadata = {
  title: "Own3r's Website",
  description: "Own3r's Personal Website, Portfolio and Blog",
  icons: {
    icon: '/icon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      {children}
      </body>
    </html>
  );
}
