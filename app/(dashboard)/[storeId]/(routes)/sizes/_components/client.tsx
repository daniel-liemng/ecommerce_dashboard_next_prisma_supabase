'use client';

import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { SizeColumn, columns } from './column';
import { DataTable } from '@/components/data-table';
import ApiList from '@/components/api-list';

interface SizesClientProps {
  data: SizeColumn[];
}

const SizesClient = ({ data }: SizesClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Sizes (${data.length})`}
          description='Manage sizes for your store'
        />

        <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
          <Plus className='mr-2 w-4 h-4' />
          Add new
        </Button>
      </div>

      <Separator />

      <div>
        <DataTable columns={columns} data={data} searchKey='name' />
      </div>

      <Heading title='API' description='API calls for Sizes' />
      <Separator />
      <ApiList entityName='sizes' entityIdName='sizeId' />
    </>
  );
};

export default SizesClient;
