'use client';

import Heading from '@/components/heading';
import { Separator } from '@/components/ui/separator';
import { useParams, useRouter } from 'next/navigation';
import { OrderColumn, columns } from './column';
import { DataTable } from '@/components/data-table';

interface OrdersClientProps {
  data: OrderColumn[];
}

const OrdersClient = ({ data }: OrdersClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description='Manage orders for your store'
      />

      <Separator />

      <DataTable columns={columns} data={data} searchKey='products' />
    </>
  );
};

export default OrdersClient;
