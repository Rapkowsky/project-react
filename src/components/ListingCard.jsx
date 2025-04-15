import { DollarSign, Pin } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ListingFavoriteButton from '@/components/ListingFavoriteButton';
import ListingRatingStars from '@/components/ListingRatingStars';
import { Card, CardContent, Separator } from '@/components/ui';
import UserAvatar from '@/components/UserAvatar';
import { getImageUrl } from '@/lib/utils/images';

const ListingCard = ({ listing }) => {
  const { users } = useSelector((state) => state.users);

  const listingUser = users[listing.userId];

  return (
    <Link to={`/listings/${listing.id}`}>
      <Card className='w-[320px]'>
        <div className='relative'>
          <img
            className='h-[200px] w-full rounded-md object-cover'
            src={getImageUrl(listing.images[0])}
            alt={listing.name}
          />
          <ListingFavoriteButton
            className='absolute right-4 top-4'
            listing={listing}
          />
          <ListingRatingStars
            className='absolute bottom-4 left-4'
            listing={listing}
          />
        </div>
        <CardContent className='p-4'>
          <h2 className='mb-2 text-xl font-semibold'>{listing.name}</h2>
          <div className='mb-2 flex items-center gap-2'>
            <Pin className='h-4 w-4 text-primary' />
            <span className='text-muted-foreground'>
              {listing.location.name}
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <DollarSign className='h-4 w-4 text-primary' />
            <span className='text-muted-foreground'>
              <span className='font-bold text-foreground'>{listing.price}</span>{' '}
              / night
            </span>
          </div>
          {listingUser && (
            <>
              <Separator className='my-4' />
              <UserAvatar user={listingUser} />
            </>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default ListingCard;
