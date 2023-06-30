import React, { useEffect, useState } from 'react';
import { Chip, Group } from '@mantine/core';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Props = {
  options: string[];
  setSelectedOption: (option: number) => void;
};

export const FilterSelector: React.FC<Props> = ({ options, setSelectedOption }) => {
  const pathname = usePathname();
  const [currentOption, setCurrentOption] = useState(-1);

  useEffect(() => {
    setSelectedOption(currentOption);
  }, [currentOption]);

  return (
    <Chip.Group>
      <Group position="center">
        {options.map((option, idx) => (
          <Link href={pathname + '?' + `filter=${option}`}>
            <Chip
              key={idx}
              color="teal"
              radius="md"
              checked={currentOption === idx}
              onClick={() => (currentOption === idx ? setCurrentOption(-1) : setCurrentOption(idx))}
              wrapperProps={{ border: 'none' }}
            >
              {option}
            </Chip>
          </Link>
        ))}
      </Group>
    </Chip.Group>
  );
};
