import Image from 'next/image';
import Link from 'next/link';

import { CategoryListingType } from '../../types/ListingTypes';
import { constants } from '../../utils/constants';
import styles from './CategorySection.module.scss';

interface CategorySectionProps {
  title?: string;
  categories: CategoryListingType[];
}

export const CategorySection = ({
  title = 'Categories',
  categories,
}: CategorySectionProps) => {
  return (
    <div className={styles.categorySection}>
      <div className={styles.header}>
        <p className={styles.categoriesHeader}>{title}</p>
        <p className={styles.postsHeader}>Posts</p>
        <p className={styles.lastPostHeader}>Last Post</p>
      </div>
      {categories.map(
        ({
          imgUrl = constants.svg.NO_IMG_URL,
          categoryId,
          categoryName,
          categoryDescription = '',
          posts,
          lastPost,
        }) => (
          <Link key={categoryId} href={`category/${categoryId}`}>
            <div className={styles.category}>
              <div className={styles.info}>
                <div className={styles.iconContainer}>
                  <Image layout="fill" src={imgUrl} />
                </div>
                <div>
                  <p className={styles.categoryName}>{categoryName}</p>
                  <p className={styles.categoryDescription}>
                    {categoryDescription}
                  </p>
                </div>
              </div>
              <p className={styles.posts}>{posts}</p>
              <p className={styles.lastPost}>{lastPost}</p>
            </div>
          </Link>
        )
      )}
    </div>
  );
};
