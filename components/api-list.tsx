'use client';

import { useOrigin } from '@/hooks/use-origin';
import { useParams } from 'next/navigation';
import ApiAlert from './api-alert';

interface ApiListProps {
  entityIdName: string;
  entityName: string;
}

const ApiList = ({ entityIdName, entityName }: ApiListProps) => {
  const params = useParams();
  const origin = useOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`;
  return (
    <div>
      <ApiAlert
        title='GET'
        description={`${baseUrl}/${entityName}`}
        variant='public'
      />
      <ApiAlert
        title='GET'
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
        variant='public'
      />
      <ApiAlert
        title='POST'
        description={`${baseUrl}/${entityName}`}
        variant='admin'
      />
      <ApiAlert
        title='PATCH'
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
        variant='admin'
      />
      <ApiAlert
        title='DELETE'
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
        variant='admin'
      />
    </div>
  );
};

export default ApiList;
