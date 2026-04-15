import React from 'react';

const AdminHeader = ({ title, subtitle }) => {
  return (
    <header className="mb-12">
      <h2 className="text-mabe-dark font-display text-4xl uppercase tracking-tighter">{title}</h2>
      {subtitle && <p className="text-gray-400 text-sm mt-2">{subtitle}</p>}
    </header>
  );
};

export default AdminHeader;