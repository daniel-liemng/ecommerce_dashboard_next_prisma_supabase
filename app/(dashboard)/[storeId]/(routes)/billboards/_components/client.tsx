'use client';

import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
// import { Billboard } from '@prisma/client';
import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { BillboardColumn, columns } from './column';
import { DataTable } from '@/components/data-table';
import ApiList from '@/components/api-list';

interface BillboardsClientProps {
  // data: Billboard[];
  data: BillboardColumn[];
}

const BillboardsClient = ({ data }: BillboardsClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Billboard (${data.length})`}
          description='Manage billboards for your store'
        />

        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className='mr-2 w-4 h-4' />
          Add new
        </Button>
      </div>

      <Separator />

      <div>
        <DataTable columns={columns} data={data} searchKey='label' />
      </div>

      <Heading title='API' description='API calls for Billboards' />
      <Separator />
      <ApiList entityName='billboards' entityIdName='billboardId' />
    </>
  );
};

export default BillboardsClient;
