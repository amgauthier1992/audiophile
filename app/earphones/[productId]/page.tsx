import { EARPHONES } from '@/app/lib/data';
import { Product } from '@/app/lib/definitions';

const EarphonesProduct: React.FC<{ params: { productId: string } }> = ({ params }) => {
  const earphones: Product | undefined = EARPHONES.find((e) => e.id === Number(params.productId));
  return <div>{earphones?.name}</div>;
};

export default EarphonesProduct;
