import React from 'react';
import { Card, Text } from '@mantine/core';
import { Title } from '@mantine/core';
import Router from 'next/router';

type Props = {
  title: string;
  text: string;
  url?: string;
};

export const CardProfile: React.FC<Props> = ({ title, text, url }) => {
  const redirect = () => {
    if (url) {
      Router.push(url);
    }
  };

  return (
    <Card
      onClick={redirect}
      padding="xl"
      radius="lg"
      withBorder
      w={'20vw'}
      sx={{
        maxHeight: '20vh',
      }}
      onClickCapture={redirect}
    >
      <Title size={'2.5vh'}>{title}</Title>
      <Text size={'2vh'}>{text}</Text>
    </Card>
  );
};
