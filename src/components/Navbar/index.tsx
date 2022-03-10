
import Link from 'next/link';
import * as S from './styles';

type TNavbarProps = {
  keys: {
    name: string,
    href: string,
  }[]
}

export function Navbar({ keys }: TNavbarProps) {
  return (
    <S.Container>
      <ul>
        {
          keys.map(key => {
            return (
              <li key={key.href}>
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
