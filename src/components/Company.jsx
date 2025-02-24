const Company = ({ name, isActive, activateCompany }) => {
  const classes = 'company' + (isActive ? ' active' : '');

  return (
    <li className={classes} onClick={() => activateCompany(name)}>
      {name}
    </li>
  );
};

export default Company;
