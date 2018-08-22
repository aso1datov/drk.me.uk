import React from 'react';
import cn from 'classnames';
import { string, bool, node, oneOf } from 'prop-types';

const Table = ({ className, bordered, responsive, children }) => {
  const tableClasses = cn('table', className, { 'table-bordered': bordered });
  
  if (responsive) {
    const responsiveClass =
      typeof responsive === 'string' ? `table-responsive-${responsive}` : 'table-responsive';

    return (
      <div className={responsiveClass}>
        <table className={tableClasses}>{children}</table>
      </div>
    );
  }

  return (
    <table className={tableClasses}>{children}</table>
  );
};

Table.propTypes = {
  className: string,
  bordered: bool,
  responsive: oneOf([true, 'sm', 'md', 'lg', 'xl']),
  children: node,
};

export default Table;
