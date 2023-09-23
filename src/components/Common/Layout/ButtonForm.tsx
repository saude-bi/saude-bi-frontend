import React from 'react';
import { Button } from '@mantine/core';
import { useRouter, usePathname } from 'next/navigation';
import { IconList } from '@tabler/icons-react';

interface ButtonFormprops {
  pathSliceEnd: number;
  buttonText: string;
}

export const ButtonForm: React.FC<ButtonFormprops> = ({ pathSliceEnd, buttonText }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Button
      variant="outline"
      color="primary"
      leftIcon={<IconList size="1rem" />}
      onClick={() => router.push(pathname.split('/').slice(0, pathSliceEnd).join('/'))}
    >
      {buttonText}
    </Button>
  );
};
