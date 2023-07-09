export const fetchData = async (defQuery) => {
  try {
    const data = await fetch(
      `https://api.edamam.com/api/food-database/v2/parser?app_id=edf4582c&app_key=27d186fc0012dcefc2a35cb2fed17a96&ingr=${defQuery}&nutrition-type=cooking`
    );
    const response = await data.json();
    return response;
  } catch (e) {
    console.log("Somethnig wrong");
  }
};

export const fetchTabData = async (defQuery) => {
  try {
    const data = await fetch(
      `https://api.edamam.com/api/food-database/v2/parser?app_id=edf4582c&app_key=27d186fc0012dcefc2a35cb2fed17a96&ingr=${defQuery}&nutrition-type=cooking`
    );
    const response = await data.json();
    return response;
  } catch (e) {
    console.log("Somethnig wrong");
  }
};

export const fetchGovedinaData = async (defQuery) => {
  try {
    const data = await fetch(
      `https://api.edamam.com/api/food-database/v2/parser?app_id=edf4582c&app_key=27d186fc0012dcefc2a35cb2fed17a96&ingr=beef&nutrition-type=cooking`
    );
    const response = await data.json();
    return response;
  } catch (e) {
    console.log("Somethnig wrong");
  }
};

export const fetchJuheData = async (defQuery) => {
  try {
    const data = await fetch(
      `https://api.edamam.com/api/food-database/v2/parser?app_id=edf4582c&app_key=27d186fc0012dcefc2a35cb2fed17a96&ingr=soup&nutrition-type=cooking`
    );
    const response = await data.json();
    return response;
  } catch (e) {
    console.log("Somethnig wrong");
  }
};

export const fetchNudliData = async (defQuery) => {
  try {
    const data = await fetch(
      `https://api.edamam.com/api/food-database/v2/parser?app_id=edf4582c&app_key=27d186fc0012dcefc2a35cb2fed17a96&ingr=noodles&nutrition-type=cooking`
    );
    const response = await data.json();
    return response;
  } catch (e) {
    console.log("Somethnig wrong");
  }
};

export const fetchPiceData = async (defQuery) => {
  try {
    const data = await fetch(
      `https://api.edamam.com/api/food-database/v2/parser?app_id=edf4582c&app_key=27d186fc0012dcefc2a35cb2fed17a96&ingr=pizza&nutrition-type=cooking`
    );
    const response = await data.json();
    return response;
  } catch (e) {
    console.log("Somethnig wrong");
  }
};

export const fetchSpagetiData = async (defQuery) => {
  try {
    const data = await fetch(
      `https://api.edamam.com/api/food-database/v2/parser?app_id=edf4582c&app_key=27d186fc0012dcefc2a35cb2fed17a96&ingr=pasta&nutrition-type=cooking`
    );
    const response = await data.json();
    return response;
  } catch (e) {
    console.log("Somethnig wrong");
  }
};
