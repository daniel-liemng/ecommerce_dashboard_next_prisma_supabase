import prismadb from '@/lib/prismadb';
import { OrderColumn } from './_components/column';
import { format } from 'date-fns';
import { formatPrice } from '@/lib/utils';
import OrdersClient from './_components/client';

const OrdersPage = async ({ params }: { params: { storeId: string } }) => {
  const orders = await prismadb.order.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  // format data for DataTable
  const formattedOrders: OrderColumn[] = orders.map((item) => ({
    id: item.id,
    phone: item.phone,
    address: item.address,
    products: item.orderItems
      .map((orderItem) => orderItem.product.name)
      .join(', '),
    totalPrice: formatPrice.format(
      item.orderItems.reduce(
        (total, currentOrderItem) =>
          total + Number(currentOrderItem.product.price),
        0
      )
    ),
    isPaid: item.isPaid,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <OrdersClient data={formattedOrders} />
      </div>
    </div>
  );
};

export default OrdersPage;
