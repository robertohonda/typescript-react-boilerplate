export const parseIds = (ids: any) => {
  const parsedIds: any = {};
  for (const [key, value] of Object.entries(ids)) {
    const id = ids._path.join(".") + "." + value;
    if (key !== "_path") { parsedIds[key] = id; }
  }

  return parsedIds;
};
