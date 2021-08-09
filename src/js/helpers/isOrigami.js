export default function isOrigami(hostnames) {
  if (hostnames.some((item) => !!window.location.hostname.match(item))) {
    const result = document.getElementsByClassName("navigation-bar__logo")
      .length
      ? "RWD"
      : "Origami";

    console.log("[DevBot] It's ", result);
  }
}
