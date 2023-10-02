
import { Grid, Stack } from '@mantine/core';

import { ContentCard } from '../ContentCard/ContentCard';

type Props = {
    children: React.ReactNode;
};


export const CommonLayoutForm: React.FC<Props> = ({ children }) => {

    return (
        <Grid.Col span={3}>
            <ContentCard>
                <Stack>
                    {children}
                </Stack>
            </ContentCard>
        </Grid.Col>
    )

}