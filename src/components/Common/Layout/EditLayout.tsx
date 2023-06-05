import { ButtonBack, ButtonSave } from '@/components/Common/Buttons/Buttons';
import { Grid, Stack, Text } from '@mantine/core';
import { CommonLayout } from '@/components/Common/Layout/CommonLayout';
import { ContentCard } from '../ContentCard/ContentCard';
import React, { MouseEventHandler } from 'react';

type Props = {
  children: React.ReactNode,
  handleSubmit: MouseEventHandler<HTMLButtonElement>,
  title: string
}

export const EditLayout: React.FC<Props> = ({ children, handleSubmit, title }) => {
  
  return (
    <CommonLayout title={title}>
        <Grid>
            <Grid.Col span={3}>
                <ContentCard>
                    <Stack>
                        <Text color="dark.3">
                        </Text>
                        <ButtonSave handleSubmit={handleSubmit} />
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