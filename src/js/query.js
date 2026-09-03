const cache = new Map();

export const query = async (path) => {
  if (cache.has(path)) {
    return cache.get(path);
  }
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error("Erro ao carregar o arquivo JSON");
    }

    const data = await response.json();
    cache.set(path, data);
    return data;
  } catch (error) {
    console.error("Erro:", error);
    throw error;
  }
};
