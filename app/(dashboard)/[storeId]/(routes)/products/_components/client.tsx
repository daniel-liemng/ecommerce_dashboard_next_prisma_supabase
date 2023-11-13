'use client';

import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { ProductColumn, columns } from './column';
import { DataTable } from '@/components/data-table';
import ApiList from '@/components/api-list';

interface ProductsClientProps {
  data: ProductColumn[];
}

const ProductsClient = ({ data }: ProductsClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Products (${data.length})`}
          description='Manage products for your store'
        />

        <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
          <Plus className='mr-2 w-4 h-4' />
          Add new
        </Button>
      </div>

      <Separator />

      <div>
        <DataTable columns={columns} data={data} searchKey='name' />
      </div>

      <Heading title='API' description='API calls for Products' />
      <Separator />
      <ApiList entityName='products' entityIdName='productId' />
    </>
  );
};

export default ProductsClient;
