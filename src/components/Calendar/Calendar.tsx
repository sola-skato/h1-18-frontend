import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";
import { ja } from "react-day-picker/locale";

interface CalendarProps {
  // 選択中の日付
  selected: Date | undefined;
  // 選択中の日付のコールバック関数
  onSelected: (newDate: Date) => void;
  // CSSクラス
  className?: string;
}

/**
 * カレンダーコンポーネント
 */
export function Calendar({ selected, onSelected, className }: CalendarProps) {
  const defaultClassNames = getDefaultClassNames();
  return (
    <DayPicker
      animate
      mode="single"
      locale={ja}
      selected={selected}
      onSelect={onSelected}
      showOutsideDays
      className={className}
      required
      classNames={{
        root: `${defaultClassNames.root} text-4xl`,
        day: `${defaultClassNames.day} p-4`,
        today: "",
        selected: "bg-primary text-primary-foreground rounded-lg",
        caption_label: `${defaultClassNames.caption_label} text-4xl`,
        month_caption: `${defaultClassNames.month_caption} mb-5`,
        weekdays: `${defaultClassNames.weekdays} bg-primary text-primary-foreground`,
        nav: `${defaultClassNames.nav} scale-200 pr-3 text-primary`,
        chevron: "",
      }}
    />
  );
}
