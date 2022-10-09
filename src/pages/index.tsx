import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Page.module.scss";

import { SearchBanner } from "../components/SearchBanner/SearchBanner";
import { PostSection } from "../components/PostSection/PostSection";
import { CategorySection } from "../components/CategorySection/CategorySection";
import { Location } from "../components/Location/Location";
import { CategoryListingType, PostListingType } from "../types/ListingTypes";

interface HomePageProps {
  mostPopularCategories: CategoryListingType[];
  recentPosts: PostListingType[];
}

const HomePage: NextPage<HomePageProps> = ({
  mostPopularCategories,
  recentPosts,
}: HomePageProps) => {
  return (
    <>
      <Head>
        <title>FlashForum Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBanner />
      <Location />
      <div className={styles.maxWidthContainer}>
        <CategorySection
          title="Most popular categories"
          categories={mostPopularCategories}
        />
      </div>
      <div className={styles.maxWidthContainer}>
        <PostSection title="Recent posts" posts={recentPosts} />
      </div>
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  return {
    props: {
      mostPopularCategories: mockedCategories,
      recentPosts: mockedPosts,
    },
    revalidate: 60,
  };
};

const mockedCategories = [
  {
    categoryId: "dsads",
    categoryName: "Announcements",
    categoryDescription: "Most important information regarding the FlashForum",
    posts: 132,
    lastPost: "yesterday",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Shield_Icon_White.png/640px-Shield_Icon_White.png",
    categoryId: "test1",
    categoryName: "Sale offers",
    categoryDescription: "Find a buyer for your flashlight",
    posts: 65,
    lastPost: "1 year ago",
  },
  {
    categoryId: "test2",
    categoryName: "Buy offers ",
    categoryDescription: "Looking for a specific model? Make a post here",
    posts: 39,
    lastPost: "3 days ago",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Diamond_Icon_Transparent.png/640px-Diamond_Icon_Transparent.png",
    categoryId: "test3",
    categoryName: "Questions and answers",
    categoryDescription: "Want to learn more? Ask the community for help",
    posts: 34,
    lastPost: "About a week ago",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Diamond_Icon_Transparent.png/640px-Diamond_Icon_Transparent.png",
    categoryId: "test42",
    categoryName: "News",
    categoryDescription:
      "Check out the latest technologies and other news regarding flashlights",
    posts: 31,
    lastPost: "9 days ago",
  },
];

const mockedPosts = [
  {
    id: "dsad",
    title: "Do Sofirn sp36 pro flashlights really have 8000 lumens?",
    tags: ["Sofrin", "Question"],
    lastResponse: "3 minutes ago",
    likes: 0,
    responses: 2,
    views: 13,
  },
  {
    id: "dsad2",
    title: "What is the best flashlight for divers?",
    tags: ["Diving", "Question"],
    lastResponse: "19 minutes ago",
    likes: 2,
    responses: 21,
    views: 129,
  },
  {
    id: "dsad3",
    title: "Want to sell Olight X9R",
    tags: ["Olight"],
    lastResponse: "1 hour ago",
    likes: 6,
    responses: 1,
    views: 57,
  },
];