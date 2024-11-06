// function store value for store login
export const inStorage = (name, value, remember = false) =>
    remember
        ? localStorage.setItem(name, value)
        : sessionStorage.setItem(name, value);

// function bring value either local or session
export const fromStorage = (name) =>
    localStorage.getItem(name) || sessionStorage.getItem(name);

// function remove value from both local and session
export const removeStorage = (name) => {
    localStorage.removeItem(name);
    sessionStorage.removeItem(name);
};
