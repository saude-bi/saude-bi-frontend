import {
    GenericCreateMutation,
    GenericRemoveMutation,
    GenericUpdateMutation,
} from '@/store/common';

import { UseForm } from '@mantine/form/lib/types';
export type GenericForm<T> = ReturnType<UseForm<T>>;

export type PropsPreviewActions = {
    id: number;
    useRemoveMutation: GenericRemoveMutation;
};
export interface PropsCreateAction<T> {
    form: GenericForm<T>;
    useCreateMutation: GenericCreateMutation<any, T>;
}
export interface PropsUpdateAction<T> {
    id: number;
    form: GenericForm<T>;
    useUpdateMutation: GenericUpdateMutation<any, T>;
}
export type Props<T> = {
    title: string;
    form: GenericForm<T>;
    FormInputs: React.FC<{ disabled: boolean; form: GenericForm<T> }>;
    extraButtons?: React.ReactNode;
} & (
        | (PropsPreviewActions & { type: 'preview' })
        | (PropsCreateAction<T> & { type: 'create' })
        | (PropsUpdateAction<T> & { type: 'update' })
    );