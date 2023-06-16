import StyledComponentsRegistry from '../lib/registry'
import '@/styles/globals.css'

export const metadata = {
  title: 'Portfolio',
  description: '',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}