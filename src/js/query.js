export const query = async () => {
  try {
    const response = await fetch("./productCards.json");
    if (!response.ok) {
      throw new Error("Erro ao carregar o arquivo JSON");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro:", error);
    return error; // maybe remove this
  }
};
