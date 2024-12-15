type FormattedDateProps = {
  date: string | Date;
};

export function FormattedDate({ date }: FormattedDateProps) {
  const formattedDate:string = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

  return <span>{formattedDate}</span>;
}
