import { ButtonBack, ButtonSave } from '@/components/Common/Buttons/Buttons';
import { Grid, Stack, Text } from '@mantine/core';
import { CommonLayout } from '@/components/Common/Layout/CommonLayout';
import { ContentCard } from '../ContentCard/ContentCard';
import React from 'react';

type Props = {
  children: React.ReactNode,
  title: string
}

export const EditLayout: React.FC<Props> = ({ children, title }) => {
  
  return (
    <CommonLayout title={title}>
        <Grid>
            <Grid.Col span={3}>
                <ContentCard>
                    <Stack>
                        <Text color="dark.3">
                        </Text>
                        <ButtonSave />
                        <ButtonBack />
                    </Stack>
                </ContentCard>
            </Grid.Col>
            <Grid.Col span={9}>
                <ContentCard>
                    {children}
                </ContentCard>
            </Grid.Col>
        </Grid>
    </CommonLayout>
  );
};