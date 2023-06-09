import { FormLayout } from '@/components/Common/Layout/FormLayout';
import React from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { useRouter } from 'next/router';

import { CreateOccupationDto } from "@/types/occupations";
