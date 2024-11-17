//function to return current year.
export default function getFullYear() {
  return new Date().getFullYear();
}

//function to return textcopy  in footer.
export function getFooterCopy(isIndex) {
  if (isIndex === true) {
    return "Holberton School";
  } else {
    return "Holberton School main dashboard";
  }
}

export function getLatestNotification() {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}

export function buttonClick() {
  console.log("Close button has been clicked");
}

export function dangerouslySetInnerHTML() {
  getLatestNotification();
}
