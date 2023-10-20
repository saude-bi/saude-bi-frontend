import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';
import { Anchor, Text, Stack } from '@mantine/core';
import { ContentCard } from '@/components/Common/ContentCard/ContentCard';

type PropsAccessCard = {
  establishment: string;
  occupation: string;
  workRelation: number;
};

export const AccessCard: React.FC<PropsAccessCard> = ({
  establishment,
  occupation,
  workRelation,
}) => {
  const router = useRouter();

  const onClick = () => {
    setCookie('workRelation', workRelation.toString());
    router.push('/');
  };

  return (
    <Anchor onClick={onClick} style={{ textDecoration: 'none' }}>
      <ContentCard>
        <Stack spacing="sm">
          <Text fz="sm" fw={500}>
            {establishment}
          </Text>
          <Text component="p" sx={{ margin: 0 }}>
            {occupation}
          </Text>
        </Stack>
      </ContentCard>
    </Anchor>
  );
};
