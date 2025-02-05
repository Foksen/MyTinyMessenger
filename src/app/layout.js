import { Provider } from "@/components/ui/provider";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider forcedTheme="light">{children}</Provider>
      </body>
    </html>
  );
}
