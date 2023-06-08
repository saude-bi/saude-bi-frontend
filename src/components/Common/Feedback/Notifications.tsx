import { notifications } from '@mantine/notifications';
import { IconX } from '@tabler/icons-react';
import { IconCheck } from '@tabler/icons-react';

export type BaseNotificationProps = {
  title?: string,
  message: string,
  type: 'success' | 'error'
};

export const ShowStateNotification = ({ title, message, type = 'success' }: BaseNotificationProps) => 
  notifications.show({ 
    title: title,
    message: message,
    icon: (type === 'success' ? (
      <IconCheck size="1.1rem" />
    ) : (
      <IconX size="1.1rem" />
    )),
    color: (type === 'success' ? 'teal' : 'red'),
  });