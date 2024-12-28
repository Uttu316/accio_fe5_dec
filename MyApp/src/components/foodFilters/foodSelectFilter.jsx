const FoodSelect = ({ options, value, placeholder, onChange, name }) => {
  return (
    <select value={value} onChange={onChange} name={name}>
      <option disabled value={""} selected>
        {placeholder}
      </option>
      {options.map((i) => (
        <option key={i} value={i}>
          {i}
        </option>
      ))}
    </select>
  );
};

export default FoodSelect;
