import { useLocale, useSetLocale } from "../Context/LocaleContext";

function LocaleSelect({ value, onChange }) {
  const locale = useLocale();
  const setLocale = useSetLocale();

  const handleChange = (e) => onChange(e.target.value);

  return (
    <select value={locale} onChange={handleChange}>
      <option value="ko">한국어</option>
      <option value="en">English</option>
    </select>
  );
}

export default LocaleSelect;
