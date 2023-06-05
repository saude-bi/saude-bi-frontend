import { EditLayout } from '@/components/Common/Layout/EditLayout';
import {
  OccupationCategory,
  useCreateOccupationCategoryMutation,
  useRemoveOccupationCategoryMutation,
  useFindAllOccupationCategoriesQuery,
  useUpdateOccupationCategoryMutation,
} from '@/store/occupation-categories';
import { Button, Grid, Stack, Text } from '@mantine/core';
import { useEffect, useMemo } from 'react';

export default function OccupationCategoriesPage() {
  useEffect(() => {
  });

  return (
    <EditLayout title="Categorias de Ocupacoes">
      teste
    </EditLayout>
  );
}
