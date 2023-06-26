'use client';

import { WorkRelationInputs, WorkRelationSchema } from '@/components/Forms/work-relation';
import { useCreateWorkRelationMutation } from '@/store/work-relation';
import { CreateWorkRelationDto } from '@/types/medical-worker';
import { Drawer } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type Props = {
  workerId: number;
  opened: boolean;
  close: () => void;
};

export function WorkRelationDrawer({ workerId, opened, close }: Props) {
  const router = useRouter();
  const [save, { isSuccess }] = useCreateWorkRelationMutation();

  const form = useForm<CreateWorkRelationDto>({
    initialValues: {
      establishment: -1,
      occupation: -1,
    },
    validate: zodResolver(WorkRelationSchema),
    validateInputOnChange: true,
  });

  const onSave = () => {
    save({ id: workerId, body: form.values });
  };

  useEffect(() => {
    if (isSuccess) {
      close();
      router.refresh();
    }
  }, [isSuccess]);

  return (
    <Drawer
      opened={opened}
      onClose={close}
      position="bottom"
      size="90%"
      title="Authentication"
      overlayProps={{ opacity: 0.5, blur: 4 }}
    >
      <WorkRelationInputs disabled={false} form={form} onSave={onSave} />
    </Drawer>
  );
}
