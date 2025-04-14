import { DollarSign, Pin, Users } from 'lucide-react';
import { useSelector } from 'react-redux';

import ListingDetailsCardImages from '@/components/ListingDetailsCardImages';
import ListingFavoriteButton from '@/components/ListingFavoriteButton';
import { Card, Separator } from '@/components/ui';

import UserAvatar from './UserAvatar';

const ListingDetailsCard = ({ listing }) => {
  const { users } = useSelector((state) => state.users);

  const listingUser = users[listing.userId];
  return (
    <Card className='mx-auto p-4'>
      <ListingDetailsCardImages listing={listing} />
      <Separator className='my-4' />
      <div className='flex justify-between'>
        <div className='flex flex-col gap-2'>
          <h1 className='mb-2 text-2xl font-bold'>{listing.name}</h1>
          <div className='flex items-center gap-2'>
            <DollarSign className='h-4 w-4 text-primary' />
            <span className='text-muted-foreground'>
              <span className='font-bold text-foreground'>{listing.price}</span>{' '}
              / night
            </span>
          </div>
        </div>
      </div>
      <Separator className='mb-4' />
      {listingUser && (
        <>
          <UserAvatar user={listingUser} />
          <Separator className='my-4' />
        </>
      )}
      <div className='whitespace-pre-line'>{listing.description}</div>
    </Card>
  );
};

export default ListingDetailsCard;
