import { useRef } from 'react';
import { Container, Button } from './styles';

interface ListCardItem {
  link: string;
  linkShortened: string;
}

export function ListCardItem({ link, linkShortened }: ListCardItem) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function copyText() {
    console.log(inputRef.current);
    inputRef.current?.select();
    document.execCommand('copy');
  }

  return (
    <Container>
      <p>{link}</p>
      <div>
        <input type='text' value={linkShortened} ref={inputRef} />
        <Button status={true} onClick={copyText}>
          {false ? 'Copy' : 'Copied!'}
        </Button>
      </div>
    </Container>
  );
}
