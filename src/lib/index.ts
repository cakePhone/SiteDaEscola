export function handleAnchorClick(event: MouseEvent) {
  event.preventDefault(); // Prevent the default anchor behavior

  const link: EventTarget | null = event.currentTarget;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const anchorId: string = new URL(link!.href).hash.replace("#", "");
  const anchor: HTMLElement | null = document.getElementById(anchorId);

  window.scrollTo({
    top: anchor!.offsetTop - 5 * 16,
    behavior: "smooth",
  });
}

export function isCurrentPage(url: string | null, pageName: string): boolean {
  if (pageName === "" && url !== "/") return false;
  const regex: RegExp = new RegExp(`^/${pageName}(.*)$`);
  return url !== null && regex.test(url);
}
