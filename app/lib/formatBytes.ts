// Converts bytes to a human-readable string (KB, MB, GB)
export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const units = ["KB", "MB", "GB", "TB"];
  let i = -1;
  let size = bytes;
  do {
    size = size / 1024;
    i++;
  } while (size >= 1024 && i < units.length - 1);
  return `${size.toFixed(2)} ${units[i]}`;
}

export const generateUUID = () => crypto.randomUUID();
