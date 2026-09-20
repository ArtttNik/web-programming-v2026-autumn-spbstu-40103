import {SORT_OPTIONS} from '../utils/constants'
import './SortTabs.css'

export default function SortTabs({value, onChange}) {
  return (
    <div className="sort-tabs" role="tablist">
      {SORT_OPTIONS.map((opt) => (
        <button
          key={opt.value}
          type="button"
          role="tab"
          aria-selected={value === opt.value}
          className={`sort-tabs__item ${value === opt.value ? 'sort-tabs__item--active' : ''}`}
          onClick={() => onChange(opt.value)}
        >
          <span>{opt.label}</span>
        </button>
      ))}
    </div>
  )
}
