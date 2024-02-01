export const getAllPokemon = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json(); // データをJSON形式に解析
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  export const getPokemon = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json(); // データをJSON形式に解析
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };