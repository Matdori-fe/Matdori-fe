'use client';

import { searchAtom } from '@/atoms/search/searchAtom';
import CategorySection from '@/components/pages/search/CategorySection';
import RecentSearchListSection from '@/components/pages/search/RecentSearchListSection';
import RecommendButtonsSection from '@/components/pages/search/RecommendButtonSection';
import RelatedSearchSection from '@/components/pages/search/RelatedSearchSection';
import SearchBarSection from '@/components/pages/search/SearchBarSection';
import { useRecoilValue } from 'recoil';
import { useSearchParams } from 'next/navigation';

const Search = () => {
  const searchMode = useRecoilValue(searchAtom) === '' ? false : true;
  const searchParams = useSearchParams();
  const writeStore: boolean = searchParams.get('writeStore') === 'true';

  return (
    <div className=" flex flex-col gap-[30px]">
      {!searchMode ? (
        <>
          <RecentSearchListSection />
          {!writeStore && <RecommendButtonsSection />}

          <CategorySection />
        </>
      ) : (
        <RelatedSearchSection />
      )}
    </div>
  );
};

export default Search;
