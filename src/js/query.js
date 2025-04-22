export const query = async (path) => {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error("Erro ao carregar o arquivo JSON");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro:", error);
    throw error;
  }
};
