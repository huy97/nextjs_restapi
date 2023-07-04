import { NextPageContext } from 'next';
import { useTranslation } from '~/hooks';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main>
      <h1>{t('home')}</h1>
    </main>
  );
}

export const getServerSideProps = async (ctx: NextPageContext) => {
  return {
    props: {},
  };
};
