import React from "react";

const Categorie = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) => {
  return <button className={`${color}`}>{children}</button>;
};

export default Categorie;
