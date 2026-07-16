import { Suspense } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';

import PostsList from 'src/components/PostsList';
import Loading from 'src/components/Loading';

export const Main = () => {
  const { postsPromise } = useLoaderData()

  return (
    <main>
      <Outlet />
      <Suspense fallback={<Loading />}>
       <PostsList postsPromise={postsPromise} />
      </Suspense>
    </main>
  );
};