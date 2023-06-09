import React, { useEffect, useState } from 'react';
import { Chip, Group } from '@mantine/core';

type Props = {
  options: string[];
  setSelectedOption: (option: number) => void;
};

export const FilterSelector: React.FC<Props> = ({ options, setSelectedOption }) => {
  const [currentOption, setCurrentOption] = useState(-1);

  useEffect(() => {
    setSelectedOption(currentOption);
  }, [currentOption]);

  return (
    <Chip.Group>
      <Group position="center">
        {options.map((option, idx) => (
          <Chip
            color="teal"
            radius="md"
            checked={currentOption === idx}
            onClick={() => (currentOption === idx ? setCurrentOption(-1) : setCurrentOption(idx))}
            wrapperProps={{ border: 'none' }}
          >
            {option}
          </Chip>
        ))}
      </Group>
    </Chip.Group>
  );
};
