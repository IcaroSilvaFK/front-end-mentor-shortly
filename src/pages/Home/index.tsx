import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema } from '../../utils/schema';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

import {
  Container,
  SectionContent,
  Column,
  Content,
  Heading,
  Form,
  SectionStatistics,
  SectionCards,
  Separator,
  BoostSection,
  ColumnForm,
  Ul,
} from './styles';
import { useEffect, useState } from 'react';
import { ListCardItem } from '../../components/ListItemLink';

interface IFormProps {
  url: string;
}

export function Home() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormProps>({
    defaultValues: {
      url: '',
    },
    resolver: yupResolver(schema),
  });
  const [hasError, setHasError] = useState(false);
  const [isVisibleMenuMobile, setIsVisibleMenuMobile] = useState(false);
  const [links, setLinks] = useState(['acsac']);

  useEffect(() => {
    if (errors.url) {
      setHasError(true);
    }
  }, [errors]);

  const onSubmit: SubmitHandler<IFormProps> = ({ url }) => {
    console.log(url);
    reset();
  };

  function handleToggleMenu() {
    setIsVisibleMenuMobile((prev) => !prev);
  }

  function handleCloseMenuMobile() {
    setIsVisibleMenuMobile(false);
  }

  return (
    <Container onClick={handleCloseMenuMobile}>
      <Header
        isVisibleMenu={isVisibleMenuMobile}
        handleToggleMenu={handleToggleMenu}
      />
      <SectionContent>
        <Column>
          <Heading>
            More than just <br />
            shorter links
          </Heading>
          <Content>
            <p>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
          </Content>

          <Button
            variant='solid'
            px='22px'
            py='10px'
            size='1.1rem'
            rounded='40px'
          >
            Get Started
          </Button>
        </Column>
        <img src='/assets/illustration-working.svg' alt='' />
      </SectionContent>
      <Form onSubmit={handleSubmit(onSubmit)} hasError={hasError}>
        <ColumnForm>
          <input
            type='text'
            placeholder='Shorten a link here...'
            {...register('url')}
            onChange={() => setHasError(false)}
          />
          {hasError && <span>Please add a link</span>}
        </ColumnForm>

        <Button variant='solid' rounded='5px' py='16px'>
          Shorten It!
        </Button>
      </Form>
      <SectionStatistics>
        {links && (
          <Ul>
            {links.map((link) => (
              <ListCardItem
                link='https://duckduckgo.com/?q=tradutor&ia=web'
                linkShortened='TESTE'
              />
            ))}
          </Ul>
        )}
        <div className='SectionStatistics__header'>
          <h3>Advanced Statistics</h3>
          <div>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
        </div>
        <SectionCards>
          <Card
            title='Brand Recognition'
            paragraphy="Boost your brand recognition with each click. Generic links dont't mean a thing. Branded links help instil confidence in your content."
            alt='Graphic'
            source='/assets/icon-brand-recognition.svg'
          />
          <Separator left='400px' topMobile='378px' leftMobie='160px' />
          <Card
            title='Detailed Records'
            paragraphy='Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
            alt='Graphic'
            source='/assets/icon-detailed-records.svg'
            mt='45px'
          />
          <Separator left='845px' topMobile='782px' leftMobie='160px' />
          <Card
            title='Fully Customizable'
            paragraphy='Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
            alt='Graphic'
            source='/assets/icon-fully-customizable.svg'
            mt='140px'
          />
        </SectionCards>
      </SectionStatistics>
      <BoostSection>
        <h3>Boost your links today</h3>
        <Button variant='solid' size='1.2rem' px='32px' py='10px'>
          Get Started
        </Button>
      </BoostSection>
      <Footer />
    </Container>
  );
}
