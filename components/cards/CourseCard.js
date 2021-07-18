import { Badge, Card } from 'antd';
import Link from 'next/link';
import { currencyFormatter } from '../../utils/helpers';

const { Meta } = Card;

const CourseCard = ({ course }) => {
  const { name, instructor, price, image, slug, paid, category } = course;
  return (
    <Link href={`/course/${slug}`}>
      <a>
        <Card
          className="mb-4"
          cover={
            image ? (
              <img
                src={image.Location}
                alt={name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
            ) : (
              ''
            )
          }
        >
          <h2 className="font-weight-bold">{name}</h2>
          <p>by {instructor.name}</p>
          <Badge
            count={category}
            style={{ backgroundColor: '#03a9f4' }}
            className="pb-2 mr-2"
          />
          <h4 className="pt-2">
            {paid
              ? currencyFormatter({ amount: price, currency: 'usd' })
              : 'Free'}
          </h4>
        </Card>
      </a>
    </Link>
  );
};

export default CourseCard;
