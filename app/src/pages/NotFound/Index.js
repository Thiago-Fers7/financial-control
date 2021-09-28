import { useLocation } from 'react-router-dom';

function NotFound() {
  const { pathname } = useLocation();

  return (
    <p>
      Cannot GET
      {' '}
      {pathname}
    </p>
  );
}

export { NotFound };
