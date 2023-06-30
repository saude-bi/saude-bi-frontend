import React, { useEffect, useState } from 'react';
import { Chip, Group } from '@mantine/core';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Props = {
  options: string[];
  setSelectedOption: (option: string) => void;
};

export const FilterSelector: React.FC<Props> = ({ options, setSelectedOption }) => {
  const pathname = usePathname();
  const [currentOption, setCurrentOption] = useState('todos');

  useEffect(() => {
    setSelectedOption(currentOption);
  }, [currentOption]);

  return (
    <Chip.Group multiple={false} value={currentOption}  onChange={setCurrentOption}>
      <Group position="center">
        <Link 
          href={pathname + '?' + `filter=todos`}
          onClick={() => (setCurrentOption('todos'))}
        >
          <Chip
            color="teal"
            radius="md"
            value="todos"
            wrapperProps={{ border: 'none' }}
          >
            Todos
          </Chip>
        </Link>
        {options.map((option, idx) => (
          <Link 
            key={idx}
            href={pathname + '?' + `filter=${option}`}               
            onClick={() => (setCurrentOption(option))}
          >
            <Chip
              color="teal"
              radius="md"
              value={option}
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
