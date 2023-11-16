import { UserButton, auth } from '@clerk/nextjs';
import MainNav from './main-nav';
import StoreSwitcher from './store-switcher';
import prismadb from '@/lib/prismadb';
import { redirect } from 'next/navigation';
import ThemeMode from './theme-mode';

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className='border-b'>
      <div className='flex items-center h-16 px-4'>
        <StoreSwitcher items={stores} />

        <MainNav className='mx-6' />

        <div className='ml-auto flex items-center space-x-4'>
          <ThemeMode />
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
