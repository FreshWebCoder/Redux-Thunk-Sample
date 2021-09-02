import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ElementCard from '../ElementCard';
import Loader from '../Loader';

import { fetchElements } from '../../store/actions/AppActions';
import {
  getIsLoading,
  getElements,
  getHasMore
} from '../../store/selectors/AppSelector';

import './styles.css';

const size = 10;

const ElementList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const elements = useSelector(getElements);
  const hasMore = useSelector(getHasMore);

  useEffect(() => {
    dispatch(fetchElements(size));
  }, [dispatch]);

  useEffect(() => {
    const loadMore = () => {
      if (isLoading || !hasMore) return;
  
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        // if reached to the bottom of page
        dispatch(fetchElements(size));
      }
    };

    window.addEventListener("scroll", loadMore);

    return () => {
      window.removeEventListener("scroll", loadMore);
    }
  }, [dispatch, isLoading, hasMore]);

  return elements.length ? (
    <div className="elements-list">
      {elements.map((el) => (
        <ElementCard
          key={el.id}
          quote={el.quote}
          author={el.author}
        />
      ))}
      {isLoading && <Loader />}
    </div>
  ) : (
    <div className="empty-list">
      {isLoading ? (
        <Loader />
      ) : (
        <p>Empty data</p>
      )}
    </div>
  );
};

export default ElementList;
