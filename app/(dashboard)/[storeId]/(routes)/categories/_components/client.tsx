'use client';

import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { CategoryColumn, columns } from './column';
import { DataTable } from '@/components/data-table';
import ApiList from '@/components/api-list';

interface CategoriesClientProps {
  data: CategoryColumn[];
}

const CategoriesClient = ({ data }: CategoriesClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Categories (${data.length})`}
          description='Manage categories for your store'
        />

        <Button
          onClick={() => router.push(`/${params.storeId}/categories/new`)}
        >
          <Plus className='mr-2 w-4 h-4' />
          Add new
        </Button>
      </div>

      <Separator />

      <div>
        <DataTable columns={columns} data={data} searchKey='name' />
      </div>

      <Heading title='API' description='API calls for Categories' />
      <Separator />
      <ApiList entityName='categories' entityIdName='categoryId' />
    </>
  );
};

export default CategoriesClient;
