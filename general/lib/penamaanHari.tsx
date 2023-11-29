import moment from "moment"

export const getLabelWaktuTransaksi = (date: Date) =>
  moment(date).locale("id").format("MMM DD, dddd")
