import { Provider } from "@/components/ui/provider";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <main>
          <Provider forcedTheme="light">{children}</Provider>
        </main>
      </body>
    </html>
  );
}
