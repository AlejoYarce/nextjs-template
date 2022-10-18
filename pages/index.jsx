import PageHead from '~app/components/PageHead'
import Navbar from '~app/components/ui/Navbar'

export default function Home() {
  return (
    <>
      <PageHead />

      <Navbar />

      <main>
        <h1>
          Welcome to Default Next.js Structure
        </h1>
      </main>

      <footer>
        Default Next.js Structure
      </footer>
    </>
  )
}
