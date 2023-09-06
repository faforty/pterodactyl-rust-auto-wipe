export function formatTitle(str) {
  const date = new Date();

  const tz_one = date.toString().match(/([A-Z]+[\+-][0-9]+)/)[1];
  const tz_two = date.toString().match(/([+-][0-9]{2}[0-9]{2})/)[1];
  const tz_three = date.toString().match(/([+-][0-9]{2})/)[1];
  const month_str_short = date.toLocaleString('default', { month: 'short' });
  const month_str_long = date.toLocaleString('default', { month: 'long' });
  const week_day_str_short = date.toLocaleString('default', { weekday: 'short' });
  const week_day_str_long = date.toLocaleString('default', { weekday: 'long' });
  const year_one = date.toLocaleString('default', { year: '2-digit' });
  const year_two = date.toLocaleString('default', { year: 'numeric' });
  const month_one = date.toLocaleString('default', { month: '2-digit' });
  const month_two = date.toLocaleString('default', { month: 'numeric' });
  const month_three = date.toLocaleString('default', { month: 'numeric', day: 'numeric' }).split('/')[1];
  const day_one = date.toLocaleString('default', { day: '2-digit' });
  const day_two = date.toLocaleString('default', { day: 'numeric' });
  const day_three = date.toLocaleString('default', { day: 'numeric' }).split('/')[1];
  const hour_one = date.toLocaleString('default', { hour: '2-digit' });
  const hour_two = date.toLocaleString('default', { hour: 'numeric' });
  const hour_three = date.toLocaleString('default', { hour: 'numeric', hour12: false });
  const min_one = date.toLocaleString('default', { minute: '2-digit' });
  const min_two = date.toLocaleString('default', { minute: 'numeric' });
  const sec_one = date.toLocaleString('default', { second: '2-digit' });
  const sec_two = date.toLocaleString('default', { second: 'numeric' });
  const mark_one = date.toLocaleString('default', { hour: 'numeric', hour12: true }).split(' ')[1].toUpperCase();
  const mark_two = date.toLocaleString('default', { hour: 'numeric', hour12: true }).split(' ')[1].toLowerCase();

  str = str.replace("{tz_one}", tz_one)
    .replace("{tz_two}", tz_two)
    .replace("{tz_three}", tz_three)
    .replace("{month_str_short}", month_str_short)
    .replace("{month_str_long}", month_str_long)
    .replace("{week_day_str_short}", week_day_str_short)
    .replace("{week_day_str_long}", week_day_str_long)
    .replace("{year_one}", year_one)
    .replace("{year_two}", year_two)
    .replace("{month_one}", month_one)
    .replace("{month_two}", month_two)
    .replace("{month_three}", month_three)
    .replace("{day_one}", day_one)
    .replace("{day_two}", day_two)
    .replace("{day_three}", day_three)
    .replace("{hour_one}", hour_one)
    .replace("{hour_two}", hour_two)
    .replace("{hour_three}", hour_three)
    .replace("{min_one}", min_one)
    .replace("{min_two}", min_two)
    .replace("{sec_one}", sec_one)
    .replace("{sec_two}", sec_two)
    .replace("{mark_one}", mark_one)
    .replace("{mark_two}", mark_two);

  return str;
}
