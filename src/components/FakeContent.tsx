import { css } from '@/styled-system/css';
import Container from '@/components/ui/Container';

const FakeContent = () => {
  return (
    <div
      className={css({ backgroundColor: 'white', py: { base: 12, lg: 16 } })}
    >
      <Container as="section" maxW="4xl">
        <div className={css({ display: 'grid', gap: 6 })}>
          <h2
            className={css({
              fontSize: { base: '2xl', sm: '3xl' },
              fontWeight: 'medium',
            })}
          >
            Fake content, ma leggibile
          </h2>
          <p
            className={css({
              fontSize: { base: 'lg', sm: 'xl' },
              lineHeight: 'relaxed',
            })}
          >
            Questo testo serve solo per simulare volume e gerarchia. Deve essere
            abbastanza lungo da mostrare spazi, ritmo e leggibilita, ma non deve
            distrarre dal layout.
          </p>
          <p
            className={css({
              fontSize: { base: 'lg', sm: 'xl' },
              lineHeight: 'relaxed',
            })}
          >
            Qui puoi mettere un secondo paragrafo con una frase piu descrittiva,
            giusto per vedere come si comportano le righe su mobile e desktop.
          </p>
          <ul
            className={css({
              display: 'grid',
              gap: 3,
              pl: 4,
              listStyle: 'disc',
            })}
          >
            <li>Testo breve per bullet.</li>
            <li>Un altro punto, per capire gli spazi.</li>
            <li>Un terzo punto, utile per vedere la lista.</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default FakeContent;
