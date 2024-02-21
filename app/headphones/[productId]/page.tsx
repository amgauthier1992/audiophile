import { HEADPHONES } from '@/app/lib/data';
import { Product } from '@/app/lib/definitions';

const HeadphonesProduct: React.FC<{ params: { productId: string } }> = ({ params }) => {
  const headphones: Product | undefined = HEADPHONES.find((h) => h.id === Number(params.productId));
  return <div>{headphones?.name}</div>;
};

export default HeadphonesProduct;
