import { useEffect, useRef, useState } from 'react';
import { Container, Button } from './styles';

interface ListCardItem {
  link: string;
  linkShortened: string;
}

export function ListCardItem({ link, linkShortened }: ListCardItem) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const clearTime = setTimeout(() => setIsCopied(false), 2000);

    return () => {
      clearTimeout(clearTime);
    };
  }, [isCopied]);

  function copyText() {
    console.log(inputRef.current);
    inputRef.current?.select();
    document.execCommand('copy');
    setIsCopied(true);
  }

  return (
    <Container>
      <p>{link}</p>
      <div>
        <input type='text' value={linkShortened} ref={inputRef} />
        <span>{linkShortened}</span>
        <Button status={isCopied} onClick={copyText}>
          {isCopied ? 'Copied!' : 'Copy'}
        </Button>
      </div>
    </Container>
  );
}
