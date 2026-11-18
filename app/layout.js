
export const metadata = {
  title: "My Portfolio",
  description: "Professional DevOps and Cloud Portfolio"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin: 0}}>
        {children}
      </body>
    </html>
  );
}
