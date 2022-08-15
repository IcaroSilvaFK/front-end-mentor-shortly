import { useEffect, useRef, useState } from 'react';
import { Container, Button } from './styles';

interface ListCardItem {
  link: string;
  linkShortened: string;
}

export function ListCardItem({ link, linkShortened }: ListCardItem) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isCopiedText, setIsCopiedText] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => setIsCopiedText(false), 2000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [isCopiedText]);

  function copyText() {
    inputRef.current?.select();
    document.execCommand('copy');
    setIsCopiedText(true);
  }

  return (
    <Container>
      <p>{link}</p>
      <div>
        <input type='text' value={linkShortened} ref={inputRef} />
        <span>{linkShortened}</span>

        <Button status={isCopiedText} onClick={copyText}>
          {isCopiedText ? 'Copied!' : 'Copy'}
        </Button>
      </div>
    </Container>
  );
}
