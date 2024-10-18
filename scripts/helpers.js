import { gotoIcon, homeIcon, jobIcon, parkIcon } from "./constants.js";

function getIcon(status) {
  switch (status) {
    case "goto":
      return gotoIcon;

    case "home":
      return homeIcon;

    case "job":
      return jobIcon;

    case "park":
      return parkIcon;

    default:
      return undefined;
  }
}

export default getIcon;

export function getStatus(status) {
  switch (status) {
    case "goto":
      return "Visit";

    case "home":
      return "Home";

    case "job":
      return "Work";

    case "park":
      return "Parking";

    default:
      return "Insignificant";
  }
}