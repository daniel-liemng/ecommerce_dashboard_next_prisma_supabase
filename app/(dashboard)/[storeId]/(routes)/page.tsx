import prismadb from '@/lib/prismadb';

interface DashboardPageProps {
  params: {
    storeId: string;
  };
}

const DashboardPage = async ({ params: { storeId } }: DashboardPageProps) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: storeId,
    },
  });
  return (
    <div>
      DashboardPage - {storeId} - {store?.name} - {store?.id}
    </div>
  );
};

export default DashboardPage;
