import { Navbar } from '../Navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar keys={[
        {
          name: 'Home',
          href: '/',
        },
        {
          name: 'To Do List',
          href: '/todo',
        }
      ]} />
      <main>{children}</main>
    </>
  )
}
