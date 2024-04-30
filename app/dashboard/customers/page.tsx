import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const customers = fetchFilteredCustomers(query);

  return (
    <div>
      <CustomersTable customers={[]} />
    </div>
  );
}
