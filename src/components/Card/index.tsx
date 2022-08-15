import { Cotnainer, SectionContent, SectionHeader, BoxImage } from './styles';

interface ICardProps {
  title: string;
  paragraphy: string;
  source: string;
  alt: string;
  mt?: string | number;
}

export function Card({ paragraphy, title, alt, source, mt }: ICardProps) {
  return (
    <Cotnainer mt={mt}>
      <BoxImage>
        <img src={source} alt={alt} />
      </BoxImage>
      <SectionHeader>
        <span>{title}</span>
      </SectionHeader>
      <SectionContent>
        <p>{paragraphy}</p>
      </SectionContent>
    </Cotnainer>
  );
}
