import AuthButton from '@/components/ui/auth-button'
import Header from '@/components/header'

export default async function Index() {
  return (
    <div className="flex min-h-screen w-full flex-1 flex-col items-center justify-center gap-20">
      <Header>
        <div className="flex h-14 w-full items-center justify-between">
          <nav className="flex items-center gap-4">
            <AuthButton />
          </nav>
        </div>
      </Header>

      <main className="flex max-w-[1230px] flex-1 flex-col gap-6">Main content goes here</main>

      <footer className="border-t-foreground/10 flex w-full justify-center border-t p-8 text-center text-xs">
        <p>
          Powered by{' '}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
  )
}
