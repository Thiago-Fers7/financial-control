import PropTypes from 'prop-types';

function CircleIndicatorIcon({ colorIcon, rotate }) {
  return (
    <svg style={{ transform: `rotate(${rotate})` }} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill={colorIcon}>
      <rect fill="none" height="24" width="24" />
      <path d="M15.08,9.59L12,12.67L8.92,9.59L7.5,11l4.5,4.5l4.5-4.5L15.08,9.59z M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10 s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.42,0-8-3.58-8-8s3.58-8,8-8s8,3.58,8,8S16.42,20,12,20z" />
    </svg>
  );
}

CircleIndicatorIcon.propTypes = {
  colorIcon: PropTypes.string.isRequired,
  rotate: PropTypes.string.isRequired,
};

function AlertIcon({ colorIcon }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill={colorIcon}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" />
    </svg>
  );
}

AlertIcon.propTypes = {
  colorIcon: PropTypes.string.isRequired,
};
function MoneyIcon({ colorIcon }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill={colorIcon}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
    </svg>
  );
}

MoneyIcon.propTypes = {
  colorIcon: PropTypes.string.isRequired,
};

function DropDown({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill={color}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
    </svg>
  );
}

DropDown.propTypes = {
  color: PropTypes.string.isRequired,
};

function Add({ color, width }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={width} viewBox="0 0 24 24" width={width} fill={color}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </svg>
  );
}

Add.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

function EditIcon({ color, size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 24 24" width={size} fill={color}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" />
    </svg>
  );
}

EditIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

EditIcon.defaultProps = {
  color: '#000000',
  size: '24px',
};

function RemoveIcon({ color, size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 24 24" width={size} fill={color}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </svg>
  );
}

RemoveIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

RemoveIcon.defaultProps = {
  color: '#000000',
  size: '24px',
};

export {
  CircleIndicatorIcon, AlertIcon, MoneyIcon, DropDown, Add, EditIcon, RemoveIcon,
};
