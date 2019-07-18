/**
 * Vendor
 */

import React from 'react';
import cn from 'classnames';

/**
 * Typings
 */

import { ITable } from './interfaces';
type ITableProps = ITable;

/**
 * Expo
 */

const Table: React.FC<ITableProps> = ({
  className,
  bordered,
  responsive,
  children,
}) => {
  const tableClasses = cn('table', className, { 'table-bordered': bordered });

  if (responsive) {
    const responsiveClass =
      typeof responsive === 'string'
        ? `table-responsive-${responsive}`
        : 'table-responsive';

    return (
      <div className={responsiveClass}>
        <table className={tableClasses}>{children}</table>
      </div>
    );
  }

  return <table className={tableClasses}>{children}</table>;
};

export default Table;
