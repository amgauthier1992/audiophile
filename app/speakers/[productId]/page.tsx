import { SPEAKERS } from '@/app/lib/data';
import { Product } from '@/app/lib/definitions';

const SpeakersProduct: React.FC<{ params: { productId: string } }> = ({ params }) => {
  const speakers: Product | undefined = SPEAKERS.find((s) => s.id === Number(params.productId));
  return <div>{speakers?.name}</div>;
};

export default SpeakersProduct;
