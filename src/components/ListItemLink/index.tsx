import { useEffect, useRef, useState } from 'react';
import { Container, Button } from './styles';

interface ListCardItem {
  link: string;
  linkShortened: string;
}

export function ListCardItem({ link, linkShortened }: ListCardItem) {
  const inputRef = useRef<HTMLInputElement | null>(null);
<<<<<<< HEAD
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const clearTime = setTimeout(() => setIsCopied(false), 2000);

    return () => {
      clearTimeout(clearTime);
    };
  }, [isCopied]);
=======
  const [isCopiedText, setIsCopiedText] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => setIsCopiedText(false), 2000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [isCopiedText]);
>>>>>>> d67353401a540eb29bf4d4618ab723ffcf420eab

  function copyText() {
    console.log(inputRef.current);
    inputRef.current?.select();
    document.execCommand('copy');
<<<<<<< HEAD
    setIsCopied(true);
=======
    setIsCopiedText(true);
>>>>>>> d67353401a540eb29bf4d4618ab723ffcf420eab
  }

  return (
    <Container>
      <p>{link}</p>
      <div>
        <input type='text' value={linkShortened} ref={inputRef} />
        <span>{linkShortened}</span>
<<<<<<< HEAD
        <Button status={isCopied} onClick={copyText}>
          {isCopied ? 'Copied!' : 'Copy'}
=======
        <Button status={isCopiedText} onClick={copyText}>
          {isCopiedText ? 'Copied!' : 'Copy'}
>>>>>>> d67353401a540eb29bf4d4618ab723ffcf420eab
        </Button>
      </div>
    </Container>
  );
}
