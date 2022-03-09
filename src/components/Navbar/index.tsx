
import Link from 'next/link';
import * as S from './styles';

type NavbarProps = {
  keys: {
    name: string,
    href: string,
  }[]
}

export function Navbar({ keys }: NavbarProps) {
  return (
    <S.Container>
      <ul>
        {
          keys.map(key => {
            return (
              <li>
                <Link href={key.href}>
                  <a>{key.name}</a>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </S.Container>
  )
}
