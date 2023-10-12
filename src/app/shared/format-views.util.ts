// src/app/pipes/format-views.util.ts
export function formatViews(views: number): string {
  if (views < 1000) {
    return views.toString();
  } else if (views < 1000000) {
    return Math.floor(views / 1000) + 'k';
  } else {
    return Math.floor(views / 1000000) + 'M';
  }
}
