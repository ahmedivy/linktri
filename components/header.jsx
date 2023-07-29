import ThemeToggle from './theme-toggle'

function Header() {
  return (
    <header className='container flex h-16 items-center gap-x-4 my-2'>
        <ThemeToggle />
    </header>
  )
}

export default Header
